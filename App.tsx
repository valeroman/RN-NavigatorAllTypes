import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Tabs } from './src/navigator/Tabs';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <MenuLateral />
      {/* <MenuLateralBasico /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  )
}

export default App;
