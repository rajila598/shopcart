import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { productReducer } from '../../redux/reducers/productReducers';
import { getApiUrl } from '../../config/urls';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProdStackParamList } from '../../redux/types';
import { useNavigation } from '@react-navigation/native';

// type ProductDetailScreenNavigationProp = StackNavigationProp<ProdStackParamList, 'ProductDetail'>;

const ProductCard = ({ item }) => {
    const navigation = useNavigation();
    // const navigation = useNavigation<ProductDetailScreenNavigationProp>();
    const handleNavigateToDetail = () => {
        navigation.navigate('ProductDetail', { productId: item.id });
      };
    return (
        <TouchableOpacity style={style.productCard} onPress={handleNavigateToDetail}>
            <Image source={{ uri: item.thumbnail }} style={style.prodImage} />
            <View>

                <Text style={style.title}>{item.title}</Text>
                <View style={style.pricings}>
                    <Text style={style.price}>Rs. {item.price}</Text>
                    <Text style={style.discount}>-{item.discountPercentage}%</Text>
                </View>
                <Text style={style.rating}><Ionicons name="star" color={'#FFD700'} />{item.rating}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const style = StyleSheet.create({
    
    prodImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
    },
    productCard: {
        width: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 4,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5
    },
    rating: {
        color: '#000'
    },
    pricings: {
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        color: '#ff0000'
    },
    discount: {
        fontSize: 12,
        backgroundColor: '#FFB3B2'
    }
})