import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext/AuthContext';

export const SettingsScreen = () => {

  const { authState } = useContext(AuthContext)
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      ...styles.globalMargin, 
      marginTop: insets.top + 20
    }}>
        <Text style={ styles.title }>SettingsScreen</Text>
        <Text>{ JSON.stringify( authState, null, 4 ) }</Text>
        {
          authState.favoriteIcon && (

            <Icon 
              name={ authState.favoriteIcon } 
              size={150} 
              color={ colores.primary } 
            />
          )
        }
    </View>
  )
}
