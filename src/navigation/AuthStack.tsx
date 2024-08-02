import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';
import React from 'react'
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthStack