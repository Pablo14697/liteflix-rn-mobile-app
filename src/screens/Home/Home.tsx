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
import { Films } from '../../redux/reducers/films';

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

  useEffect(() => {
    getComingSoonFilms();
  }, []);
  console.log('Films', films);
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
    setComingSoonFilms: (films: Films) => {
      dispatch(setComingSoonFilms(films));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
