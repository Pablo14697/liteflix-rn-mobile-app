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
import { DrawerContainer, NativeStyles } from './styles';

const Drawer = createDrawerNavigator();
const { Screen } = createStackNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { routeNames } = props.state;
  return (
    <DrawerContainer>
      <ScrollView style={NativeStyles.scrollView}>
        {routeNames.map((screen: string) => (
          <TouchableOpacity>
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
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />}>
      <Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
