import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Task from '../components/Task'
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;


// const Todo = ({ navigation, taskItems }) => {
const Todo = ({ navigation, taskItems }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredTasks = taskItems.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.heading}>
                    <Text style={style.headText}>Today's Task</Text>
                    
                </View>
                <View style={style.todoBody}>
                <TextInput
                        style={style.searchInput}
                        placeholder="Search tasks"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {filteredTasks.map((task, index) => (
                        <Task key={index} task={task} />
                    ))}
                </View>
            </View>
            {/* <KeyboardAvoidingView>

            </KeyboardAvoidingView> */}
            <View style={style.addTask}>
                <TouchableOpacity style={style.addBtn} onPress={() => navigation.navigate('AddTask')}>
                    <Text style={style.add}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Todo

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
    searchInput: {
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        
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
    todoBody: {
        margin: 10,
    },
    addTask: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 10,
        alignItems: 'flex-end',
    },
    addBtn: {
        backgroundColor: '#9395D3',
        width: 80,
        height: 80,
        borderRadius: 50,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    add: {
        color: '#fff',
        fontSize: 30
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
        alignItems: 'center',
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