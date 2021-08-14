import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../pages/splash/SplashScreen';
import MainBoardingScreen from '../../pages/boarding/MainBoardingScreen';
import LoginScreen from '../../pages/login/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='SplashScreen' component={SplashScreen} />
      <Stack.Screen options={{headerShown:false}} name='MainBoardingScreen' component={MainBoardingScreen} />
      <Stack.Screen options={{headerShown:false}} name='LoginScreen' component={LoginScreen} />
      <Stack.Screen options={{headerShown:false}} name='BottomTabNavigator' component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
