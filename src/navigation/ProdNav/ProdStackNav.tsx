import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart, Home, ProductDetail, Search } from '../../screens';

type ProdStackParamList = {
  ProductHome: undefined;
  Search: undefined;
  Cart: undefined;
  ProductDetail: { productId: number };
};
const Stack = createStackNavigator<ProdStackParamList>();


const ProdStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductHome" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default ProdStackNavigator;