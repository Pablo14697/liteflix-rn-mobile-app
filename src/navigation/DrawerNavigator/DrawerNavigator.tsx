// REACT
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

// CUSTOM COMPONENTS
import { Typography } from '../../components';

// NAVIGATION
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import { Home } from '../../screens';

// STYLES
import { BurgerMenuButton, DrawerContainer, HeaderContent, NativeStyles } from './styles';

// ASSETS
import { BurgerIconWhite, Liteflix } from '../../assets/images';

const Drawer = createDrawerNavigator();
const { Screen } = createStackNavigator();

function CustomDrawerContent(props: any) {
  const closeDrawerNavigator = () => {
    props.navigation.closeDrawer();
  };

  const { routeNames } = props.state;

  return (
    <DrawerContainer>
      <ScrollView style={NativeStyles.scrollView}>
        <HeaderContent>
          <BurgerMenuButton hitSlop={NativeStyles.hitSlop} onPress={closeDrawerNavigator}>
            <BurgerIconWhite color="white" height={30} width={40} />
          </BurgerMenuButton>
          <Liteflix height={60} width={140} />
        </HeaderContent>
        {routeNames.map((screen: string) => (
          <TouchableOpacity key={screen}>
            <Typography color="white" size={20}>
              {screen}
            </Typography>
          </TouchableOpacity>
        ))}
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
