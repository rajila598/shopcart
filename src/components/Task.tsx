import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Task = ({task}) => {
    return (
        <View style={style.task}>
            <View style={style.taskText}>
                <Text style={style.taskTitle}>{task.title}</Text>
                <Text>{task.description}</Text>
            </View>
            {/* <View style={style.taskIcon}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
            </View> */}
        </View>
    )
}

export default Task

const style = StyleSheet.create({
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 82,
        borderRadius: 10,
        padding: 20,
        margin: 10
    },
    taskText: {
    },
    taskIcon: {
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskTitle: {
        color: '#9395D3',
        fontSize: 18,
        fontWeight: '600'
    },
    taskDescription: {
        color: '#000',
    }
})