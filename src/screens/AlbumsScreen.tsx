import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext/AuthContext';
import { styles } from '../themes/appTheme';

export const AlbumsScreen = () => {

  const { authState: { isLoggedIn,  }, logout  } = useContext(AuthContext);

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>ContactsScreen</Text>
        {
          isLoggedIn && (
            <Button
              title='Logout'
              onPress={ logout }
            />
          )

        }
    </View>
  )
}
