import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../config/Colors';

import HomeScreen from '../../pages/home/HomeScreen';
import ProdukScreen from '../../pages/home/ProdukScreen';
import SupplyScreen from '../../pages/home/SupplyScreen';
import StatistikScreen from '../../pages/home/StatistikScreen';
import AkunScreen from '../../pages/home/AkunScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName="HomeScreen"
      activeColor={color.primary}
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProdukScreen"
        component={ProdukScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Produk',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="text-box-multiple-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="SupplyScreen"
        component={SupplyScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Supply',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="StatistikScreen"
        component={StatistikScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Statistik',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="poll" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="AkunScreen"
        component={AkunScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Akun',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
