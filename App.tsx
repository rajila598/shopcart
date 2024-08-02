/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Home, Login, Todo } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';
import BottomNav from './src/navigation/BottomNav';
import { MyDrawer } from './src/navigation/DrawerNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RouteNav from './src/navigation/RouteNav';



function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <RouteNav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'green'
  }
});

export default App;
