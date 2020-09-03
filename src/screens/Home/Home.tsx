// REACT
import React, { useEffect, useState, createRef } from 'react';
import { FlatList, RefreshControl, StatusBar } from 'react-native';

// LIBS
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

// ASSETS
import {
  BurgerIcon,
  BurgerIconWhite,
  Liteflix,
  PlayIcon,
  PlusIcon,
  UpArrow,
  WarningIcon,
} from '../../assets/images/';

// STYLES
import {
  BurgerMenuButton,
  ComingSoonFilmButton,
  ComingSoonImage,
  ComingSoonSectionContainer,
  Container,
  Fill,
  GradientColors,
  HeaderContent,
  MyMovieFilmButton,
  MyMovieImage,
  MyMoviesContainer,
  NativeStyles,
  OnImageContent,
  PlayButton,
  PlayContainer,
  PlusContainer,
  PopularFilmButton,
  PopularImage,
  PopularSectionContainer,
  StarringImage,
  TitleContainer,
  UpArrowContainer,
  WarningContainer,
  WarningIconContainer,
} from './styles';

// NAVIGATION
import { DrawerNavigationProp } from '@react-navigation/drawer';

// REDUX
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/reducers';
import { setFilms, setFilmsError, setUpdateFlag } from '../../redux/actions/films';

// COMPONENTS
import { LoadingModal, Spacing, Typography } from '../../components';

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
  setUpdateFlag: (status: boolean) => void;
  updateFlagStatus: boolean;
}

interface Movie {
  backdrop_path: string;
  title: string;
}

const flatListRef: any = createRef();

function Home({
  films,
  filmsError,
  navigation,
  setFilms,
  setFilmsError,
  setUpdateFlag,
  updateFlagStatus,
}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const openDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const getKeyExtractor = (item: FilmsResults) => String(item.id);

  const getMyMoviesKeyExtractor = (item: Movie) => String(item.title);

  const getComingSoon = async () => {
    const endpoint = `${Config.API_URL}upcoming?api_key=${Config.MOVIE_DB_API_KEY}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

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
        setFilms(films);
      })
      .catch((error) => {
        setFilmsError(true);
        console.log('Error getting coming soon films on Home screen: ', error);
      });
    setTimeout(() => {
      if (refreshControl) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }, 1000);
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

  const renderMyMoviesItem = ({ item }: { item: Movie }) => {
    const title = item.title.length > 33 ? `${item.title.slice(0, 32)}..` : item.title;
    return (
      <MyMovieFilmButton>
        <MyMovieImage source={{ uri: item.backdrop_path }} />
        <TitleContainer>
          <Typography color="white" size={20}>
            {title.toUpperCase()}
          </Typography>
        </TitleContainer>
      </MyMovieFilmButton>
    );
  };

  const renderPopularItem = ({ item }: { item: FilmsResults }) => {
    const title = item.title.length > 33 ? `${item.title.slice(0, 32)}..` : item.title;
    return (
      <PopularFilmButton>
        <PopularImage source={{ uri: `${Config.IMAGES_API_URL}${item.backdrop_path}` }} />
        <TitleContainer>
          <Typography color="white" size={20} textAlign="center">
            {title.toUpperCase()}
          </Typography>
        </TitleContainer>
      </PopularFilmButton>
    );
  };
  const renderSeparator = (size: number) => <Spacing size={size} />;

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
      {renderHeaderMenu()}
      <OnImageContent>
        <Fill />
        <PlayButton>
          <PlayContainer>
            <PlayIcon height={30} width={30} />
            <Spacing isHorizontal size={5} />
            <Typography color="white" size={20}>
              Reproducir
            </Typography>
          </PlayContainer>
        </PlayButton>
        <PlusContainer>
          <PlusIcon height={20} width={20} />
        </PlusContainer>
      </OnImageContent>
      {films.myMovies.length > 0 && (
        <MyMoviesContainer>
          <Typography color="white" size={22}>
            Mis películas
          </Typography>
          <Spacing size={5} />
          <FlatList
            data={films.myMovies}
            keyExtractor={getMyMoviesKeyExtractor}
            ItemSeparatorComponent={renderSeparator.bind(null, 5)}
            renderItem={renderMyMoviesItem}
          />
        </MyMoviesContainer>
      )}

      <ComingSoonSectionContainer isMarginTop={films.myMovies.length === 0}>
        <Typography color="white" size={22}>
          Próximamente
        </Typography>
        <Spacing size={5} />
      </ComingSoonSectionContainer>
    </>
  );

  const goToTop = () => {
    flatListRef.current.scrollToOffset({ offset: 0 });
  };

  const renderPopularFilmsFooter = () => (
    <UpArrowContainer onPress={goToTop}>
      <UpArrow height={30} width={30} />
    </UpArrowContainer>
  );

  const renderFooter = () => (
    <PopularSectionContainer>
      <Typography color="white" size={22}>
        Populares de Liteflix
      </Typography>
      <Spacing size={5} />
      <FlatList
        data={films.popular.results}
        ItemSeparatorComponent={renderSeparator.bind(null, 2)}
        ListFooterComponent={renderPopularFilmsFooter}
        keyExtractor={getKeyExtractor}
        numColumns={2}
        renderItem={renderPopularItem}
        columnWrapperStyle={NativeStyles.columnFlatList}
      />
    </PopularSectionContainer>
  );

  const renderHeaderMenu = (colorBurgerButton: 'black' | 'white' = 'black') => (
    <HeaderContent>
      <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={openDrawerNavigator}>
        {poster && colorBurgerButton === 'black' ? (
          <BurgerIcon height={30} width={40} />
        ) : (
          <BurgerIconWhite height={30} width={40} />
        )}
      </BurgerMenuButton>
      <Liteflix height={60} width={140} />
      <Fill />
    </HeaderContent>
  );

  const renderWarning = () => (
    <WarningContainer
      contentContainerStyle={NativeStyles.warningScrollView}
      refreshControl={
        <RefreshControl onRefresh={getFilms.bind(null, true)} refreshing={refreshing} />
      }>
      {renderHeaderMenu('white')}
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
    if (updateFlagStatus) {
      setUpdateFlag(false);
    }
  }, [updateFlagStatus]);

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
          ItemSeparatorComponent={renderSeparator.bind(null, 5)}
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
    updateFlagStatus: state.films.updateFlagStatus,
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
    setUpdateFlag: (status: boolean) => {
      dispatch(setUpdateFlag(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
