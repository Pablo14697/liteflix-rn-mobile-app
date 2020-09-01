// REACT
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// NAVIGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>LiteFlix</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

export default App;
