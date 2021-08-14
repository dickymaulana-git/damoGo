import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../config/Colors';

export default function FourthOnBoard(props) {
  const bahasa = props.bahasa;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/forth.png')}
        style={styles.image}
      />
      {bahasa === 'Bahasa Indonesia' ? (
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>Tanpa risk</Text>
          <Text style={styles.desc}>
            Semua gratis. Gratis biaya pendaftaran, ga ada biaya bulanan, ga ada
            syarat minimum, ga ada biaya yang tersembunyi. Kurang apa coba?
          </Text>
        </View>
      ) : (
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>No risk</Text>
          <Text style={styles.desc}>
            All free. Free registration, no monthly fees, no minimum
            requirements, no hidden fees. What's lacking?
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
