import React from 'react'
import { Text, Image } from 'react-native';
import { styles } from '../theme/AppTheme';

export const HomeScreen = () => {
  return (
    <>
        <Image source={require('../assets/pokebola.png')}
            style = {{...styles.pokebolaPNG, ...styles.globalMargin}}/>
        <Text style={{color: "black"}}>HomeScreen</Text>
    </>
  )
}
