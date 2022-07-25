import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
// import { StackNavigator } from './StackNavigator';
import { styles } from '../themes/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                headerLeft: () => null,
                headerShown: false,
                drawerType: (width >=  768 ? 'permanent' : 'front')
            }}
            drawerContent={ (props) => <MenuInterno { ...props } /> }
        >
        <Drawer.Screen name="Tabs" component={ Tabs } />
        <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        </Drawer.Navigator>
    );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView>
            {/* Avatar */}
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{
                        uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* Opciones del menu */}
            <View style={ styles.menuContainer }>

                <TouchableOpacity 
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => navigation.navigate('Tabs')}
                >
                    <Icon name='compass-outline' size={22} color="black" />
                    <Text style={ styles.menuTexto }>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => navigation.navigate('SettingsScreen')}
                >
                    <Icon name='cog-outline' size={22} color="black" />
                    <Text style={ styles.menuTexto }>Ajustes</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}