// REACT
import React from 'react';
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
import { useDispatch } from 'react-redux';

interface Props {
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
}

function Home({ navigation }: Props) {
  const dispatch = useDispatch();
  dispatch(setComingSoonFilms({}));

  const openDrawerNavigator = () => {
    navigation.openDrawer();
  };
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

export default Home;
