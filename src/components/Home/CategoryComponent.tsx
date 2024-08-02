import React, { useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { getApiUrl } from '../../config/urls';
import ProductCard from './ProductCard';

const CategoryComponent = () => {
    const dispatch = useDispatch();
    const dataFromApi = useSelector(state => state.productReducer);
    const categories = ['beauty', 'furniture', 'laptops', 'womens-jewellery'];

    useEffect(() => {
        const fetchProducts = async (category) => {
            try {
                const response = await fetch(getApiUrl(`products/category/${category}?limit=6`));
                const result = await response.json();
                console.log(result.products, `---------- ${category}`);
                dispatch(getProducts({ category, products: result.products }));
            } catch (err) {
                console.log(err);
            }
        };

        categories.forEach(category => fetchProducts(category));
    }, [dispatch]);

    const renderCategory = (category) => {
        const products = dataFromApi[category];
        if (products && products.length > 0) {
            return (
                <View style={styles.products} key={category}>
                    <Text style={styles.title}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <ProductCard item={item} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                    />
                </View>
            );
        }
        return null;
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {categories.map(category => renderCategory(category))}
        </ScrollView>
    );
};

export default CategoryComponent;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    products: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000'
    },
});
