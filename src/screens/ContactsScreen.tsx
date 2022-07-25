import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext/AuthContext';

export const ContactsScreen = () => {

  const { signIn, authState: { isLoggedIn } } = useContext(AuthContext);
  
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>ContactsScreen</Text>
        {
          !isLoggedIn && (
            <Button
              title='SignIn'
              onPress={ signIn }
            />
          )

        }
    </View>
  )
}
