import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../config/Colors';

export default function SecondOnBoard(props) {
  const bahasa = props.bahasa;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/second.png')}
        style={styles.image}
      />
      {bahasa === 'Bahasa Indonesia' ? (
        <View style={{marginHorizontal:10}}>
          <Text style={styles.title}>Dapetin customer baru</Text>
          <Text style={styles.desc}>
            Tingkatkan exposure gerai kamu dan branding perusahaan dengan
            aplikasi kami.
          </Text>
        </View>
      ) : (
        <View style={{marginHorizontal:10}}>
          <Text style={styles.title}>Get a new customer</Text>
          <Text style={styles.desc}>
            Increase your store exposure and company branding with our app.
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
