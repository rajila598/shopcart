import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import SplashScreen from '../screens/SplashScreen'

const RouteNav = () => {
  const [loading, setLoading] = useState  (true);
    const userData = useSelector(state => state.authReducer.userData)
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000); // Adjust the timeout duration as needed
  
      return () => clearTimeout(timeout);
    }, []);
    console.log("userdata-----------", userData)
    const refresh_token = userData.refreshToken
    console.log("-----------refreshtoken---", refresh_token)
  return (
    <NavigationContainer>
         {loading ? <SplashScreen /> : !!userData && userData?.refreshToken ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default RouteNav