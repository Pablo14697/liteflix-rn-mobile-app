// REACT
import * as React from 'react';

// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';

// SCREENS
import { AddFilm } from '../screens';

const { Navigator, Screen } = createStackNavigator();
const MainNavigator = () => (
  <Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
    <Screen name="Main" component={DrawerNavigator} />
    <Screen name="AddFilm" component={AddFilm} />
  </Navigator>
);

export default MainNavigator;
