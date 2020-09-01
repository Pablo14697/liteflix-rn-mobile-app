// REACT
import React from 'react';

// NAVIGATION
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/RootNavigation';

// REDUX
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
