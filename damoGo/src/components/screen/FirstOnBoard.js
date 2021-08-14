import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../config/Colors';

export default function FirstOnBoard(props) {
  const bahasa = props.bahasa;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/first.png')}
        style={styles.image}
      />
      {bahasa === 'Bahasa Indonesia' ? (
        <View style={{marginHorizontal:10}}>
          <Text style={styles.title}>Tingkatkan penjualan kamu!</Text>
          <Text style={styles.desc}>
            Yuk jual kembali makanan kamu yang belum laku dan hampir terbuang.
            Sekaligus selamatkan lingkungan sekitar kamu dari food waste!
          </Text>
        </View>
      ) : (
        <View style={{marginHorizontal:10}}>
          <Text style={styles.title}>Increase your sales</Text>
          <Text style={styles.desc}>
            Let's resell your food that hasn't been sold out and almost wasted.
            At a time save the environment around you from food waste!
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: '40%',
    resizeMode: 'stretch',
  },
  title: {
    color: color.primary,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
  desc: {
    color: color.desc,
    textAlign: 'center',
    marginTop: '5%',
  },
});
