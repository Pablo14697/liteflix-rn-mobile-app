import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
    <Screen name="Main" component={DrawerNavigator} />
  </Navigator>
);

export default MainNavigator;
