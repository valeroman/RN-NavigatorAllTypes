import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';
LogBox.ignoreLogs(['Sending'])

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            style={{ paddingTop: top }}
            screenOptions={ ({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                      switch (route.name) {
                          case 'Chat' :
                              iconName = 'person-circle-outline'
                          break;
          
                          case 'Contacts' :
                              iconName = 'american-football-outline'
                          break;
          
                          case 'Albums' :
                              iconName = 'cog-outline'
                          break;
                      }
                      return <Icon name={ iconName } size={20} color={ colores.primary } />
                  }
                
            })}
        >
        <Tab.Screen name="Chat" component={ ChatScreen } />
        <Tab.Screen name="Contacts" component={ ContactsScreen } />
        <Tab.Screen name="Albums" component={ AlbumsScreen } />
        </Tab.Navigator>
    );
}