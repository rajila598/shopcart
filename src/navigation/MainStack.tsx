import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Todo, AddTask, TaskManager, Home } from '../screens';
import BottomNav from './BottomNav';
const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tab" component={BottomNav}  options={{ headerShown: false }}/>
            <Stack.Screen name="Task" component={Todo} />
            <Stack.Screen name="AddTask" component={AddTask} />
        </Stack.Navigator>
    )
}

export default MainStack