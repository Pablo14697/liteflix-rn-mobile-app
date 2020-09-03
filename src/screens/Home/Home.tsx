// REACT
import React, { useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';

// LIBS
import LinearGradient from 'react-native-linear-gradient';

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
  NativeStyles,
  OnImageContent,
  PlayButton,
  PlayContainer,
  PlusContainer,
  PopupalateFilmButton,
  PopulateImage,
  PopulateSectionContainer,
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
  setOutstandingFilms,
  setPopularFilms,
} from '../../redux/actions/films';

// COMPONENTS
import { Typography, Spacing } from '../../components';

// TYPES
import { Films, FilmsResults } from '../../redux/reducers/films';

// UTILS
import Config from '../../config';

interface Props {
  comingSoonFilms: Films;
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
  outstandingFilms: Films;
  popularFilms: Films;
  setComingSoonFilms: (payload: Films) => void;
  setOutstandingFilms: (payload: Films) => void;
  setPopularFilms: (payload: Films) => void;
}

function Home({
  comingSoonFilms,
  navigation,
  outstandingFilms,
  popularFilms,
  setComingSoonFilms,
  setOutstandingFilms,
  setPopularFilms,
}: Props) {
  const openDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const getFilms = async () => {
    const promises = [getComingSoon(), getOutstanding(), getPopular()];
    Promise.all(promises)
      .then((results) => {
        setComingSoonFilms(results[0]);
        setOutstandingFilms(results[1]);
        setPopularFilms(results[2]);
      })
      .catch((error) => console.log('Error getting coming soon films on Home screen: ', error));
  };

  const getComingSoon = async () => {
    const response = await fetch(Config.COMING_SOON_API_URL);
    const data = await response.json();
    return data;
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

  const renderComingSoonItem = ({ item }: { item: FilmsResults }) => (
    <ComingSoonFilmButton>
      <ComingSoonImage source={{ uri: `${Config.IMAGES_API_URL}${item.backdrop_path}` }} />
      <TitleContainer>
        <Typography color="white" size={20}>
          {item.title.toUpperCase()}
        </Typography>
      </TitleContainer>
    </ComingSoonFilmButton>
  );
  const renderPopulateItem = ({ item }: { item: FilmsResults }) => {
    const { title } = item;
    return (
      <PopupalateFilmButton>
        <PopulateImage source={{ uri: `${Config.IMAGES_API_URL}${item.backdrop_path}` }} />
        <TitleContainer>
          <Typography color="white" size={20} textAlign="center">
            {title.toUpperCase()}
          </Typography>
        </TitleContainer>
      </PopupalateFilmButton>
    );
  };
  const renderSeparator = (size: number) => <Spacing size={size} />;
  const getKeyExtractor = (item: FilmsResults) => String(item.id);

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
      <ComingSoonSectionContainer>
        <Typography color="white" size={22}>
          Próximamente
        </Typography>
        <Spacing size={5} />
      </ComingSoonSectionContainer>
    </>
  );

  const renderFooter = () => (
    <PopulateSectionContainer>
      <Typography color="white" size={22}>
        Populares DE LITEFLIX
      </Typography>
      <Spacing size={5} />
      <FlatList
        data={popularFilms.results}
        ItemSeparatorComponent={renderSeparator.bind(null, 2)}
        keyExtractor={getKeyExtractor}
        numColumns={2}
        renderItem={renderPopulateItem}
        columnWrapperStyle={NativeStyles.columnFlatList}
      />
    </PopulateSectionContainer>
  );

  useEffect(() => {
    getFilms();
  }, []);

  const poster =
    outstandingFilms.results &&
    outstandingFilms.results.length > 0 &&
    outstandingFilms.results[0].poster_path.length > 0 &&
    outstandingFilms.results[0].poster_path;

  console.log({ comingSoonFilms, outstandingFilms, popularFilms });

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
    </Container>
  );
}

const mapStateToProps = (state: State) => {
  return {
    comingSoonFilms: state.films.comingSoonFilms,
    outstandingFilms: state.films.outstandingFilms,
    popularFilms: state.films.popularFilms,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setComingSoonFilms: (films: Films) => {
      dispatch(setComingSoonFilms(films));
    },
    setOutstandingFilms: (films: Films) => {
      dispatch(setOutstandingFilms(films));
    },
    setPopularFilms: (films: Films) => {
      dispatch(setPopularFilms(films));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
