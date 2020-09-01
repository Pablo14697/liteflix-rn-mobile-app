// REACT
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

// LIBS
import LinearGradient from 'react-native-linear-gradient';

// ASSETS
import { BurgerIcon, BurgerIconWhite, Liteflix, PlayIcon, PlusIcon } from '../../assets/images/';

// STYLES
import {
  BurgerMenuButton,
  ComingSoonImage,
  ComingSoonSectionContainer,
  Container,
  ScrollContent,
  Fill,
  HeaderContent,
  NativeStyles,
  OnImageContent,
  PlayButton,
  PlayContainer,
  PlusContainer,
  PopulateSectionContainer,
  StarringImage,
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
    <ComingSoonImage source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} />
  );
  const renderComingSoonSeparator = () => <Spacing size={7} />;

  useEffect(() => {
    getComingSoonFilms();
  }, []);

  const poster =
    films.results &&
    films.results.length > 0 &&
    films.results[0].poster_path.length > 0 &&
    films.results[0].poster_path;

  return (
    <Container>
      <ScrollContent>
        <StarringImage
          resizeMode="stretch"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster}`,
          }}>
          <LinearGradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
            style={{ height: '100%', width: '100%' }}
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
            ItemSeparatorComponent={renderComingSoonSeparator}
            renderItem={renderComingSoonItem}
          />
        </ComingSoonSectionContainer>
        <PopulateSectionContainer>
          <Typography color="white" size={22}>
            Populares DE LITEFLIX
          </Typography>
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
