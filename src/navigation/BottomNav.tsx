import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, Cart, Home, Login, Search, Todo } from '../screens';
import { MyDrawer } from './DrawerNav';
import ProdStackNavigator from './ProdNav/ProdStackNav';
import TodoStack from './TodoStackNav/TodoStack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        
        <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (rn === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (rn === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (rn === 'User') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (rn === 'Todo') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={'#9395D3'} />;
          },
        })}>
          <Tab.Screen name="Home" component={ProdStackNavigator} />
          <Tab.Screen name="Search" component={Search}/>
          <Tab.Screen name="Cart" component={Cart}/>
          <Tab.Screen name="Account" component={Account}/>
          {/* <Tab.Screen name="Login" component={Login} /> */}
          {/* <Tab.Screen name="Drawer" component={MyDrawer} /> */}
        </Tab.Navigator>
      );
}

export default BottomNav