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
  ScrollContent,
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
import { setComingSoonFilms } from '../../redux/actions/films';

// COMPONENTS
import { Typography, Spacing } from '../../components';

// TYPES
import { Films, FilmsResults } from '../../redux/reducers/films';

// UTILS
import Config from '../../config';

interface Props {
  films: Films;
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
  setComingSoonFilms: (payload: Films) => void;
}

function Home({ navigation, films, setComingSoonFilms }: Props) {
  const openDrawerNavigator = () => {
    navigation.openDrawer();
  };

  const getComingSoonFilms = async () => {
    try {
      const response = await fetch(Config.COMING_SOON_API_URL);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setComingSoonFilms(data);
      }
    } catch (error) {
      console.log('Error getting coming soon films on Home screen: ', error);
    }
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
  const renderPopulateItem = ({ item }: { item: FilmsResults }) => (
    <PopupalateFilmButton>
      <PopulateImage source={{ uri: `${Config.IMAGES_API_URL}${item.backdrop_path}` }} />
      <TitleContainer>
        <Typography color="white" size={20}>
          {item.title.toUpperCase()}
        </Typography>
      </TitleContainer>
    </PopupalateFilmButton>
  );
  const renderSeparator = () => <Spacing size={5} />;
  const getKeyExtractor = (item: FilmsResults) => String(item.id);
  const poster =
    films.results &&
    films.results.length > 0 &&
    films.results[0].poster_path.length > 0 &&
    films.results[0].poster_path;

  useEffect(() => {
    getComingSoonFilms();
  }, []);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <ScrollContent>
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
          <FlatList
            data={films.results.splice(0, 4)}
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={getKeyExtractor}
            renderItem={renderComingSoonItem}
          />
        </ComingSoonSectionContainer>
        <PopulateSectionContainer>
          <Typography color="white" size={22}>
            Populares DE LITEFLIX
          </Typography>
          <Spacing size={5} />
          <FlatList
            data={films.results.splice(0, 4)}
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={getKeyExtractor}
            numColumns={2}
            renderItem={renderPopulateItem}
            columnWrapperStyle={NativeStyles.columnFlatList}
          />
        </PopulateSectionContainer>
      </ScrollContent>
    </Container>
  );
}

const mapStateToProps = (state: State) => {
  return {
    films: state.films.films,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setComingSoonFilms: (films: Films) => {
      dispatch(setComingSoonFilms(films));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
