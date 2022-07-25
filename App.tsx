import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Tabs } from './src/navigator/Tabs';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext/AuthContext';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <Tabs /> */}
        <MenuLateral />
        {/* <MenuLateralBasico /> */}
        {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}

export default App;
