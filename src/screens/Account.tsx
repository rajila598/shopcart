import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import types from '../redux/types';
import { logout } from '../redux/actions/authAction';
const screenHeight = Dimensions.get('window').height;

const Account = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.authReducer);
  console.log(userData, "=-=-=-=-=-=-=-=-");
  const handleLogout = () => {
    logout().then(() => {
        // Navigate to login screen or any other action after logout
        console.log('Logged out successfully');
    }).catch((error) => {
        console.error('Logout failed', error);
    });
};

  return (
    <View style={style.container}>
        <View style={style.content}>
            <View>
              <Image source={{uri: userData.userData.image}} style={style.profileImage}/>
            </View>
            <View>
              <Text style={style.name}>Name: {userData.userData.firstName} {userData.userData.lastName}</Text>
              <Text style={style.name}>Email:  {userData.userData.email}</Text>
              <Text style={style.name}>Gender:  {userData.userData.gender}</Text>
            </View>
            <TouchableOpacity style={style.logoutBtn} onPress={handleLogout}>
              <Text style={style.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Account

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E9EDED',
    justifyContent: 'center',
    alignItems:'center',
    height: screenHeight
  },
  content: {
    alignItems: 'center'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    padding: 4
  },
  logoutBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    height: 50,
    backgroundColor: '#9395D3',
    color: '#ffffff',
    borderRadius: 15,
    padding: 9,
    margin: 10
  },
  logoutText: {
    color: '#ffffff',
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  })