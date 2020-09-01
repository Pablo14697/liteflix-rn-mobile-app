// REACT
import React from 'react';

// ASSETS
import { BurgerIcon, Liteflix } from '../../assets/images/';

// STYLES
import { BurgerMenuButton, Container, Fill, HeaderContent, NativeStyles } from './styles';

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
      <HeaderContent>
        <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={openDrawerNavigator}>
          <BurgerIcon height={30} width={40} />
        </BurgerMenuButton>
        <Liteflix height={30} width={100} />
        <Fill />
      </HeaderContent>
    </Container>
  );
}

export default Home;
