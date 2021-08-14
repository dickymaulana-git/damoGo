import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../config/Colors';

export default function ProdukScreen() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: '40%', height: '25%', resizeMode: 'stretch'}}
      />
      <Text style={{color: Colors.primary, fontWeight: 'bold'}}>
        ProdukScreen
      </Text>
    </View>
  );
}
