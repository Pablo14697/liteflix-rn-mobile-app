// REACT
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

// CUSTOM COMPONENTS
import { Spacing, Typography } from '../../components';

// NAVIGATION
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import { Home } from '../../screens';

// STYLES
import {
  AddMovieButton,
  BadgeDot,
  BellContainer,
  BurgerMenuButton,
  CircleContainer,
  DrawerContainer,
  HeaderContent,
  Line,
  LogOutButton,
  NameContainer,
  NativeStyles,
  NewsOptionButton,
  NewsTitle,
} from './styles';

// ASSETS
import { BellIcon, BurgerIconWhite, Liteflix, LiteboxIcon, PlusIcon } from '../../assets/images';

const Drawer = createDrawerNavigator();
const { Screen } = createStackNavigator();
const DrawerNavigatorOptions = ['Cambiar Usuario', 'Configuración', 'Ayuda'];
const News = ['Series', 'Películas', 'Mi lista', 'Niños'];
function CustomDrawerContent(props: any) {
  const closeDrawerNavigator = () => {
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContainer>
      <ScrollView style={NativeStyles.scrollView}>
        <HeaderContent>
          <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={closeDrawerNavigator}>
            <BurgerIconWhite color="white" height={30} width={40} />
          </BurgerMenuButton>
          <Liteflix height={60} width={140} />
        </HeaderContent>
        <Spacing />
        <NameContainer>
          <CircleContainer>
            <LiteboxIcon height={30} width={30} />
          </CircleContainer>
          <Typography color="white" numberOfLines={1} size={18}>
            Ernesto Garmendia
          </Typography>
        </NameContainer>
        {DrawerNavigatorOptions.map((screen: string) => (
          <>
            <TouchableOpacity hitSlop={NativeStyles.hitSlop} key={screen}>
              <Typography color="white" size={20}>
                {screen}
              </Typography>
            </TouchableOpacity>
            <Line />
          </>
        ))}

        <NewsTitle>
          <BellContainer>
            <BadgeDot />
            <BellIcon height={25} width={25} />
          </BellContainer>
          <Typography color="white" size={22}>
            Novedades
          </Typography>
        </NewsTitle>
        {News.map((screen: string) => (
          <>
            <NewsOptionButton hitSlop={NativeStyles.hitSlop} key={screen}>
              <Typography color="white" size={20}>
                {screen}
              </Typography>
            </NewsOptionButton>
          </>
        ))}
        <AddMovieButton>
          <PlusIcon height={20} width={20} />
          <Spacing isHorizontal size={5} />
          <Typography color="white" size={20}>
            Agregar película
          </Typography>
        </AddMovieButton>
        <LogOutButton>
          <Typography color="white" size={20}>
            Log out
          </Typography>
        </LogOutButton>
      </ScrollView>
    </DrawerContainer>
  );
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}
      drawerStyle={NativeStyles.drawer}>
      <Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
