import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddTask, Todo } from '../../screens';
const Stack = createNativeStackNavigator();
const TodoStack = () => {
    const [taskItems, setTaskItems] = useState([]);
    const addTask = (task) => {
        setTaskItems([...taskItems, task]);
      };
     
  return (
    <Stack.Navigator>
        <Stack.Screen name="Todo" options={{headerShown:false}}>
          {(props) => <Todo {...props} taskItems={taskItems}/>}
        </Stack.Screen>
        <Stack.Screen name="AddTask" options={{headerShown:false}}>
          {(props) => <AddTask {...props} addTask={addTask} />}
        </Stack.Screen>
      </Stack.Navigator>
  )
}

export default TodoStack