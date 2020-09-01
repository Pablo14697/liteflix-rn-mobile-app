// REACT
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

// ASSETS
import { BurgerIcon, Liteflix } from '../../assets/images/';

// STYLES
import {
  BurgerMenuButton,
  Container,
  ScrollContent,
  Fill,
  HeaderContent,
  NativeStyles,
  StarringImage,
} from './styles';

// NAVIGATION
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { setComingSoonFilms } from '../../redux/actions/films';
import { connect } from 'react-redux';
import Config from '../../config';
import { Dispatch } from 'redux';
import { State } from '../../redux/reducers';

type ComingSoonResults = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ComingSoonFilmsResponse = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: ComingSoonResults[];
  total_pages: number;
  total_results: number;
};
interface Props {
  films: object[];
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
  setComingSoonFilms: (payload: ComingSoonFilmsResponse) => void;
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

  useEffect(() => {
    getComingSoonFilms();
  }, []);
  console.log('BEFORE GET', films);
  return (
    <Container>
      <ScrollContent>
        <StatusBar barStyle="dark-content" />
        <HeaderContent>
          <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={openDrawerNavigator}>
            <BurgerIcon height={30} width={40} />
          </BurgerMenuButton>
          <Liteflix height={60} width={140} />
          <Fill />
        </HeaderContent>
        <StarringImage
          resizeMode="stretch"
          source={{
            uri:
              'https://vanguardia.com.mx/sites/default/files/styles/paragraph_image_large_desktop_1x/public/dark-tower-poster-idris-elba_1200_1778_81_s.jpeg',
          }}
        />
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
    setComingSoonFilms: (films: ComingSoonFilmsResponse) => {
      dispatch(setComingSoonFilms(films));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
