// REACT
import React, { useEffect, createRef, useState } from 'react';
import { Alert, FlatList, RefreshControl, StatusBar } from 'react-native';

// LIBS
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

// ASSETS
import { WarningIcon } from '../../assets/images/';

// STYLES
import {
  ComingSoonFilmButton,
  ComingSoonImage,
  ComingSoonSectionContainer,
  Container,
  GradientColors,
  NativeStyles,
  StarringImage,
  TitleContainer,
  WarningContainer,
  WarningIconContainer,
} from './styles';

// NAVIGATION
import { DrawerNavigationProp } from '@react-navigation/drawer';

// REDUX
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/reducers';
import { setFilms, setFilmsError } from '../../redux/actions/films';

// COMPONENTS
import { LoadingModal, Spacing, Typography } from '../../components';
import { HeaderMenu, PlayAndPlusButtons, MyMoviesList, PopularList } from './components';

// TYPES
import { FilmsResults, SetOfFilms } from '../../redux/reducers/films';

// UTILS
import Config from '../../config';
import { MY_MOVIES } from '../../utils/constants';

interface Props {
  films: SetOfFilms;
  filmsError: boolean;
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
  setFilms: (payload: SetOfFilms) => void;
  setFilmsError: (status: boolean) => void;
}

const flatListRef: any = createRef();

function Home({ films, filmsError, navigation, setFilms, setFilmsError }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getKeyExtractor = (item: FilmsResults) => String(item.id);

  const getFilms = async (refreshControl: boolean = false) => {
    if (refreshControl) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    const promises = [getComingSoon(), getOutstanding(), getPopular(), getMyMovies()];
    Promise.all(promises)
      .then((results) => {
        const films = {
          comingSoon: results[0],
          myMovies: results[3],
          outstanding: results[1],
          popular: results[2],
        };
        let success = true;
        results.forEach((element) => {
          if (element.success !== undefined) {
            success = element.success;
          }
        });

        if (!success) {
          return setFilmsError(true);
        }
        setFilms(films);
      })
      .catch((error) => {
        setFilmsError(true);
        console.log('Error getting films on Home screen: ', error);
      });
    setTimeout(() => {
      if (refreshControl) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }, 1000);
  };

  const getComingSoon = async () => {
    const endpoint = `${Config.API_URL}upcoming?api_key=${Config.MOVIE_DB_API_KEY}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

  const getMyMovies = async () => {
    const response = await AsyncStorage.getItem(MY_MOVIES);
    if (response) {
      const data = JSON.parse(response);
      return data;
    } else {
      return [];
    }
  };

  const getOutstanding = async () => {
    const endpoint = `${Config.API_URL}now_playing?api_key=${Config.MOVIE_DB_API_KEY}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

  const getPopular = async () => {
    const endpoint = `${Config.API_URL}popular?api_key=${Config.MOVIE_DB_API_KEY}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

  const renderComingSoonItem = ({ item }: { item: FilmsResults }) => {
    const title = item.title.length > 33 ? `${item.title.slice(0, 32)}..` : item.title;
    return (
      <ComingSoonFilmButton>
        <ComingSoonImage source={{ uri: `${Config.IMAGES_API_URL}${item.backdrop_path}` }} />
        <TitleContainer>
          <Typography color="white" size={20}>
            {title.toUpperCase()}
          </Typography>
        </TitleContainer>
      </ComingSoonFilmButton>
    );
  };

  const renderSeparator = () => <Spacing size={5} />;

  const sendAlert = (text: string) => {
    Alert.alert('onPress: ', text);
  };

  const renderHeader = () => (
    <>
      <StarringImage
        resizeMode="stretch"
        source={{
          uri: `${Config.IMAGES_API_URL}${poster}`,
        }}>
        <LinearGradient
          locations={[0, 0.2, 0.6, 0.93]}
          colors={GradientColors}
          style={NativeStyles.linearGradient}
        />
      </StarringImage>
      <HeaderMenu navigation={navigation} poster={poster} />
      <PlayAndPlusButtons
        onPressPlay={sendAlert.bind(null, 'onPressPlay')}
        onPressPlus={sendAlert.bind(null, 'onPressPlus')}
      />
      {films.myMovies.length > 0 && <MyMoviesList data={films.myMovies} />}

      <ComingSoonSectionContainer isMarginTop={films.myMovies.length === 0}>
        <Typography color="white" size={22}>
          Próximamente
        </Typography>
        <Spacing size={5} />
      </ComingSoonSectionContainer>
    </>
  );

  const renderFooter = () => <PopularList data={films.popular.results} flatListRef={flatListRef} />;

  const renderWarning = () => (
    <WarningContainer
      contentContainerStyle={NativeStyles.warningScrollView}
      refreshControl={
        <RefreshControl onRefresh={getFilms.bind(null, true)} refreshing={refreshing} />
      }>
      <HeaderMenu colorBurgerButton="white" navigation={navigation} poster={poster} />
      <WarningIconContainer>
        <WarningIcon height={100} width={100} style={{ top: '30%' }} />
        <Spacing size={40} />
        <Typography color="white" size={18} textAlign="center">
          Algo ha ido mal, arrastre para refrescar
        </Typography>
      </WarningIconContainer>
    </WarningContainer>
  );

  useEffect(() => {
    getFilms();
  }, []);

  const poster =
    films.outstanding.results &&
    films.outstanding.results.length > 0 &&
    films.outstanding.results[0].poster_path.length > 0 &&
    films.outstanding.results[0].poster_path;

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {filmsError ? (
        renderWarning()
      ) : (
        <FlatList
          data={films.comingSoon.results}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
          ListFooterComponentStyle={NativeStyles.footerFlatList}
          ListHeaderComponent={renderHeader}
          keyExtractor={getKeyExtractor}
          ref={flatListRef}
          refreshControl={
            <RefreshControl onRefresh={getFilms.bind(null, true)} refreshing={refreshing} />
          }
          renderItem={renderComingSoonItem}
        />
      )}
      <LoadingModal visible={loading || refreshing} />
    </Container>
  );
}

const mapStateToProps = (state: State) => {
  return {
    films: state.films.films,
    filmsError: state.films.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setFilms: (films: SetOfFilms) => {
      dispatch(setFilms(films));
    },
    setFilmsError: (status: boolean) => {
      dispatch(setFilmsError(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
