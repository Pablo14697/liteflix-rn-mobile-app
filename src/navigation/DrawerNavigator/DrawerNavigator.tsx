// REACT
import React from 'react';

// COMPONENTS
import { CustomDrawerContent } from '../../components';

// NAVIGATION
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import { AddFilm, Home } from '../../screens';

// STYLES
import { NativeStyles } from './styles';

const Drawer = createDrawerNavigator();
const { Screen } = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}
      drawerStyle={NativeStyles.drawer}>
      <Screen name="Home" component={Home} />
      <Screen name="AddFilm" component={AddFilm} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
