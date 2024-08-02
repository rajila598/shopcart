import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Banner = () => {
    
  return (
    <View>
        <Image source={{uri: 'https://picsum.photos/200/300'}} style={styles.bannerImage}  />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    bannerImage: {
      width: '100%',
      height: 200,
    },
  });