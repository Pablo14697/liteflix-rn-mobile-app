// REACT
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

// COMPONENTS
import AddFilmButton from '../AddFilmButton/AddFilmButton';
import Spacing from '../Spacing/Spacing';
import Typography from '../Typography/Typography';

// NAVIGATION
import { goToPage } from '../../navigation/RootNavigation';

// STYLES
import {
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
  OptionContainer,
} from './styles';

// ASSETS
import { BellIcon, BurgerIconWhite, Liteflix, LiteboxIcon } from '../../assets/images';

const DrawerNavigatorOptions = ['Cambiar Usuario', 'Configuración', 'Ayuda'];
const News = ['Series', 'Películas', 'Mi lista', 'Niños'];
function CustomDrawerContent(props: any) {
  const closeDrawerNavigator = () => {
    props.navigation.closeDrawer();
  };
  const goToAddFilm = () => goToPage('AddFilm');
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
          <OptionContainer key={screen}>
            <TouchableOpacity hitSlop={NativeStyles.hitSlop}>
              <Typography color="white" size={20}>
                {screen}
              </Typography>
            </TouchableOpacity>
            <Line />
          </OptionContainer>
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
          <NewsOptionButton hitSlop={NativeStyles.hitSlop} key={screen}>
            <Typography color="white" size={20}>
              {screen}
            </Typography>
          </NewsOptionButton>
        ))}
        <AddFilmButton onPress={goToAddFilm} />
        <LogOutButton>
          <Typography color="white" size={20}>
            Log out
          </Typography>
        </LogOutButton>
      </ScrollView>
    </DrawerContainer>
  );
}

export default CustomDrawerContent;
