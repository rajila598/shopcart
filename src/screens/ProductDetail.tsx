import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/actions/cartAction';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('window').height;
const ProductDetail = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { productId } = route.params;
  // const product = useSelector((state) =>
  //   state.productReducer.find((item) => item.id === productId)
  // );
  const product = useSelector((state) => {
    let foundProduct;
    Object.values(state.productReducer).some(categoryProducts => {
      foundProduct = categoryProducts.find(item => item.id === productId);
      return foundProduct; // if found, stop iterating
    });
    return foundProduct;
  });
  // const product = useSelector((state) => 
  //   state.products.find((item) => item.id === productId)
  // );

  if (!product) {
    return <Text>Product not found</Text>;
  }
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    alert("Added to cart")
  };
  return (
    <View style={style.container}>
      <View style={style.content}>
        <View>
          <Image source={{ uri: product.thumbnail }} style={style.image} />
        </View>
        <View style={style.details}>
          <View style={style.pricing}>
            <Text style={style.price}>Rs. {product.price}</Text>
            <Text style={style.discount}>-{product.discountPercentage}%</Text>
          </View>
          <Text style={style.heading}>{product.title}</Text>
          <Text style={style.categoryTitle}>Category: {product.category}</Text>
          <Text style={style.rating}><Ionicons name="star" color={'#FFD700'} style={style.ratingStar}/> {product.rating}</Text>
          <Text style={style.stock}>InStock: {product.stock}</Text>

        </View>
        <TouchableOpacity onPress={handleAddToCart} style={style.btn}><Text style={style.btnText}>Add To Cart</Text></TouchableOpacity>
      </View>
    </View>
  )
}


export default ProductDetail

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E9EDED',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: screenHeight
  },
  content: {
    alignItems: 'center'
  },
  heading: {
    fontSize: 24,
    color: '#000',
    fontWeight: '700'
  },
  heading2: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    margin: 20,
    fontWeight: '700'
  },
  categoryTitle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: '500'
  },
  products: {
    flexDirection: 'row',
  },
  image: {
    width: 300,
    height: 300,

  },
  price: {
    color: 'red',
    fontSize: 24,
    fontWeight: '600',
  },
  discount: {
    color: 'red',
    fontSize: 18
  },
  pricing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  details: {
    alignItems: 'flex-start',
    margin: 10,
    backgroundColor: '#D6D7EF',
    padding: 10,
    borderRadius: 10,
    width: 300,
  },
  btn: {
    backgroundColor: '#9395D3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  rating: {
    fontSize: 18
  },
  ratingStar: {
    width: 10,
    fontSize: 20,
  }
})