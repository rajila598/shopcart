import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { userLogin } from '../api/UserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import actions from '../redux/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  
  const handleLogin = async () => {
   if(username == '' || password == ''){
    alert("Please enter your email and password")
    return
   } else{
    try{
      const res = await actions.login({
        username, 
        password
      })
      console.log("res---------", res)
    }catch(error){
      console.log("error raised", error)
    }
   }
  }
  return (
    <View style={style.container}>
      {/* welcome container */}
      <View style={style.headContainer}>
        <Text style={style.headText}>Welcome!</Text>
        <Text style={style.headText}>Login to continue</Text>
      </View>
      {/* input field */}
      <View style={style.inputContainer}>
        <View style={style.inputView}>
          <TextInput
            placeholder="Username"
            style={style.textInput}
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            placeholder="Password"
            style={style.textInput}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry = {seePassword}
          />
          <TouchableOpacity>
            {/* <Image source={require('../../public/assests/images/eye.png')} /> */}
          </TouchableOpacity>
        </View>
        {/* forgot password */}
        <TouchableOpacity>
          <Text style={style.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      {/* btn */}
      <View>
        <TouchableOpacity 
        style={style.signInBtn}
         onPress={handleLogin}
         >
          <Text style={style.signInText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      {/* create account */}
      <View style={style.createAccountView}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={style.createAccount}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#0098FF0D',
  },
  headContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  iconText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  googleContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 3,
  },
  email: {
    textAlign: 'center',
    marginBottom: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 370,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  textInput: {
    width: 320,
    height: 60,
    color: '#000000',
    padding: 10,
    paddingLeft: 20,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  forgot: {
    textAlign: 'right',
    color: '#000000',
  },
  signInBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    height: 50,
    backgroundColor: '#9395D3',
    color: '#ffffff',
    borderRadius: 15,
    padding: 9,
  },
  signInText: {
    color: '#ffffff',
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  createAccountView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  createAccount: {
    color: '#9395D3',
    fontWeight: 'bold',
  },
})