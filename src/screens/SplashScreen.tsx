import React, { useEffect } from 'react'
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native'

const screenHeight = Dimensions.get('window').height;
const SplashScreen = () => {
    
  return (
    <View style={style.container}>
        <Image source={require('../../public/assets/images/logo.png')} style={style.image}/>
    </View>
  )
}

export default SplashScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        height: screenHeight
    },
    image: {
        width: 300,
        height: 300,
    }

})