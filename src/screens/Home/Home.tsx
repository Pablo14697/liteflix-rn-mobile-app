// REACT
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';

// LIBS
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

// ASSETS
import { BurgerIcon, BurgerIconWhite, Liteflix, PlayIcon, PlusIcon } from '../../assets/images/';

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
} from './styles';

// NAVIGATION
import { DrawerNavigationProp } from '@react-navigation/drawer';

// REDUX
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/reducers';
import {
  setComingSoonFilms,
  setMyMovies,
  setOutstandingFilms,
  setPopularFilms,
  setUpdateFlag,
} from '../../redux/actions/films';

// COMPONENTS
import { LoadingModal, Spacing, Typography } from '../../components';

// TYPES
import { Films, FilmsResults } from '../../redux/reducers/films';

// UTILS
import Config from '../../config';
import { MY_MOVIES } from '../../utils/constants';

interface Props {
  comingSoonFilms: Films;
  myMovies: Movie[];
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
  outstandingFilms: Films;
  popularFilms: Films;
  setComingSoonFilms: (payload: Films) => void;
  setMyMovies: (payload: Movie[]) => void;
  setOutstandingFilms: (payload: Films) => void;
  setPopularFilms: (payload: Films) => void;
  setUpdateFlag: (status: boolean) => void;
  updateFlagStatus: boolean;
}

interface Movie {
  backdrop_path: string;
  title: string;
}

function Home({
  comingSoonFilms,
  myMovies,
  navigation,
  outstandingFilms,
  popularFilms,
  setComingSoonFilms,
  setMyMovies,
  setOutstandingFilms,
  setPopularFilms,
  setUpdateFlag,
  updateFlagStatus,
}: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const openDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const getKeyExtractor = (item: FilmsResults) => String(item.id);

  const getMyMoviesKeyExtractor = (item: Movie) => String(item.title);

  const getComingSoon = async () => {
    const response = await fetch(Config.COMING_SOON_API_URL);
    const data = await response.json();
    return data;
  };

  const getFilms = async () => {
    setLoading(true);
    const promises = [getComingSoon(), getOutstanding(), getPopular(), getMyMovies()];
    Promise.all(promises)
      .then((results) => {
        setComingSoonFilms(results[0]);
        setOutstandingFilms(results[1]);
        setPopularFilms(results[2]);
        setMyMovies(results[3]);
      })
      .catch((error) => console.log('Error getting coming soon films on Home screen: ', error));
    setTimeout(() => setLoading(false), 1000);
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
    const response = await fetch(Config.OUTSTANDING_API_URL);
    const data = await response.json();
    return data;
  };

  const getPopular = async () => {
    const response = await fetch(Config.POPULAR_API_URL);
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
      <HeaderContent>
        <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={openDrawerNavigator}>
          {poster ? (
            <BurgerIcon height={30} width={40} />
          ) : (
            <BurgerIconWhite height={30} width={40} />
          )}
        </BurgerMenuButton>
        <Liteflix height={60} width={140} />
        <Fill />
      </HeaderContent>
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
      {myMovies.length > 0 && (
        <MyMoviesContainer>
          <Typography color="white" size={22}>
            Mis películas
          </Typography>
          <Spacing size={5} />
          <FlatList
            data={myMovies}
            keyExtractor={getMyMoviesKeyExtractor}
            ItemSeparatorComponent={renderSeparator.bind(null, 5)}
            renderItem={renderMyMoviesItem}
          />
        </MyMoviesContainer>
      )}

      <ComingSoonSectionContainer isMarginTop={myMovies.length === 0}>
        <Typography color="white" size={22}>
          Próximamente
        </Typography>
        <Spacing size={5} />
      </ComingSoonSectionContainer>
    </>
  );

  const renderFooter = () => (
    <PopularSectionContainer>
      <Typography color="white" size={22}>
        Populares DE LITEFLIX
      </Typography>
      <Spacing size={5} />
      <FlatList
        data={popularFilms.results}
        ItemSeparatorComponent={renderSeparator.bind(null, 2)}
        keyExtractor={getKeyExtractor}
        numColumns={2}
        renderItem={renderPopularItem}
        columnWrapperStyle={NativeStyles.columnFlatList}
      />
    </PopularSectionContainer>
  );

  useEffect(() => {
    getFilms();
    if (updateFlagStatus) {
      setUpdateFlag(false);
    }
  }, [updateFlagStatus]);

  const poster =
    outstandingFilms.results &&
    outstandingFilms.results.length > 0 &&
    outstandingFilms.results[0].poster_path.length > 0 &&
    outstandingFilms.results[0].poster_path;

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={comingSoonFilms.results}
        ItemSeparatorComponent={renderSeparator.bind(null, 5)}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={NativeStyles.footerFlatList}
        ListHeaderComponent={renderHeader}
        keyExtractor={getKeyExtractor}
        renderItem={renderComingSoonItem}
      />
      <LoadingModal visible={loading} />
    </Container>
  );
}

const mapStateToProps = (state: State) => {
  return {
    comingSoonFilms: state.films.comingSoonFilms,
    myMovies: state.films.myMovies,
    outstandingFilms: state.films.outstandingFilms,
    popularFilms: state.films.popularFilms,
    updateFlagStatus: state.films.updateFlagStatus,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setComingSoonFilms: (films: Films) => {
      dispatch(setComingSoonFilms(films));
    },
    setMyMovies: (films: Movie[]) => {
      dispatch(setMyMovies(films));
    },
    setOutstandingFilms: (films: Films) => {
      dispatch(setOutstandingFilms(films));
    },
    setPopularFilms: (films: Films) => {
      dispatch(setPopularFilms(films));
    },
    setUpdateFlag: (status: boolean) => {
      dispatch(setUpdateFlag(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
