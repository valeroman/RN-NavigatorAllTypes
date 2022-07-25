import React from 'react';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/appTheme';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'person-circle-outline'
            break;

            case 'TopTabNavigator':
              iconName = 'cash-outline'
            break;

            case 'StackNavigator':
              iconName = 'cog-outline'
            break;

          }
          return <Icon name={ iconName } size={20} color={ color } />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2'}} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        headerShown: false,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'person-circle-outline'
            break;

            case 'TopTabNavigator':
              iconName = 'cash-outline'
            break;

            case 'StackNavigator':
              iconName = 'cog-outline'
            break;

          }
          return <Icon name={ iconName } size={20} color={ colores.primary } />
        }
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2'}} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}