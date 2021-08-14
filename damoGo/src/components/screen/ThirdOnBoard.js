import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../config/Colors';

export default function ThirdOnBoard(props) {
  const bahasa = props.bahasa;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/third.png')}
        style={styles.image}
      />
      {bahasa === 'Bahasa Indonesia' ? (
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>Platform marketing gratis!</Text>
          <Text style={styles.desc}>
            Perkuat branding gerai kamu dengan menunjukkan ke masyarakat luas
            bahwa kamu peduli terhadap problema food waste, sekaligus
            bertanggung jawab sebagai owner dari usaha yang kamu manage.
          </Text>
        </View>
      ) : (
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.title}>Free marketing platform!</Text>
          <Text style={styles.desc}>
            Strengthen your outlet branding by showing the wider community that
            you care about the food waste problem, as well as being responsible
            as the owner of the business you manage.
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
