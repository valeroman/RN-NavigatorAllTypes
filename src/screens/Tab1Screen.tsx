import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles, colores } from '../themes/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect')
  },[]);

  return (
    <View style={{
        ...styles.globalMargin,
        marginTop: top + 10
      }}
    >
        <Text style={ styles.title }>Iconos</Text>
        <Text>
          <Icon name='add-outline' size={80} color={ colores.primary } />
          <Icon name='airplane-outline' size={80} color={ colores.primary } />
          <Icon name='add-outline' size={80} color={ colores.primary } />
          <Icon name='bicycle-outline' size={80} color={ colores.primary } />
          <Icon name='add-outline' size={80} color={ colores.primary } />
        </Text>
        
    </View>
  )
}
