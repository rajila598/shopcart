import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Dimensions } from 'react-native';
import ImageCarousel from '../components/ImageCarousel';
import Banner from '../components/Home/Banner';
import ProductCard from '../components/Home/ProductCard';
import CategoryComponent from '../components/Home/CategoryComponent';

const screenHeight = Dimensions.get('window').height;

const Home = () => {


  return (
    <View style={style.container}>
      <View style={style.content}>
        <View>
          <Banner />
        </View>
        <View>
          <Text style={style.heading}>Available Products</Text>
          <View style={style.products}>
            <CategoryComponent />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Home

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E9EDED',
    justifyContent: 'space-between',
    height: screenHeight
  },
  content: {

  },
  heading: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    margin: 20,
    fontWeight: '700'
  },
  products: {
    flexDirection: 'row',
  }
})