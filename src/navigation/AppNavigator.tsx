import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
    <Screen name="Main" component={Home} />
  </Navigator>
);

export default MainNavigator;
