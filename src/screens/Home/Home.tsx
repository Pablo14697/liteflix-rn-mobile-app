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
} from './styles';

// NAVIGATION
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface Props {
  navigation: DrawerNavigationProp<Record<string, object | undefined>>;
}

function Home({ navigation }: Props) {
  const openDrawerNavigator = () => {
    navigation.openDrawer();
  };

  return (
    <Container>
      <ScrollContent>
        <StatusBar barStyle="light-content" />
        <HeaderContent>
          <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={openDrawerNavigator}>
            <BurgerIcon height={30} width={40} />
          </BurgerMenuButton>
          <Liteflix height={60} width={140} />
          <Fill />
        </HeaderContent>
      </ScrollContent>
    </Container>
  );
}

export default Home;
