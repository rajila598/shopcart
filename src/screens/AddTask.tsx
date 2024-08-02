import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
// function AddTask({addTask}) {
function AddTask({ navigation, addTask }) {
    const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
    const handleAddTask = () => {
        addTask({ title: taskTitle, description: taskDescription });
    setTaskTitle('');
    setTaskDescription('');
    navigation.navigate('Todo');
      };
    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.heading}>
                    <Text style={style.headText}>Add New Task</Text>
                </View>
                <KeyboardAvoidingView>
                    <TextInput style={style.taskInput} placeholder='Title' value={taskTitle} onChangeText={(text) => setTaskTitle(text)}/>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView>
                    <TextInput style={style.taskInput} placeholder='Write Your task' value={taskDescription} onChangeText={(text) =>setTaskDescription(text)}/>
                </KeyboardAvoidingView>
                <View style={style.addContainer}>
                <TouchableOpacity style={style.btn} onPress={handleAddTask}>
                    <Text style={style.btnText}>Add</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default AddTask
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D6D7EF',
        justifyContent: 'space-between',
        height: screenHeight
    },
    content: {
        flex: 1,
    },
    heading: {
        backgroundColor: '#9395D3',
        height: 100,
    },
    headText: {
        margin: 20,
        marginTop: 30,
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
    },

    taskInput: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 20,
        borderRadius: 10,
    },
    addContainer: {
        alignItems: 'center'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#9395D3'
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '500',
    }
})
