import { useNavigation } from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const Pagina2Screen = () => {

  const navigation = useNavigation<any>();

  const options: StackNavigationOptions = {
    title: 'Hola mundo',
    headerBackTitle: 'Atras', // headerBackTitle: ''  => Back
  };
  useEffect(() => {
    navigation.setOptions(options);
  }, []);

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina2Screen</Text>
        <Button 
          title='Ir a pagina 3'
          onPress={ () => navigation.navigate('Pagina3Screen')}
        />
    </View>
  )
}
