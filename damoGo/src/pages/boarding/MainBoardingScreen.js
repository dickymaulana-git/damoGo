import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomDots from '../../components/BottomDots';
import color from '../../config/Colors';

import FirstOnBoard from '../../components/screen/FirstOnBoard';
import SecondOnBoard from '../../components/screen/SecondOnBoard';
import ThirdOnBoard from '../../components/screen/ThirdOnBoard';
import FourthOnBoard from '../../components/screen/FourthOnBoard';

export default function MainBoardingScreen(props) {
  const [slide, setSlide] = useState(1);
  const [bahasaHandler, setBahasaHandler] = useState(false);
  const [defaultBahasa, setDefaultBahasa] = useState('Bahasa Indonesia');

  useEffect(() => {
    setTimeout(() => {
      setSlide(2);
      setTimeout(() => {
        setSlide(3);
        setTimeout(() => {
          setSlide(4);
        }, 2000);
      }, 2000);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setBahasaHandler(!bahasaHandler)}
          style={styles.bahasaWrapper}>
          <Text style={styles.textBahasa}>{defaultBahasa}</Text>
          <Icon name={bahasaHandler ? 'chevron-up' : "chevron-down"} size={20} color={color.line} />
        </TouchableOpacity>
        {bahasaHandler && (
          <View style={styles.chooseBahasaWrapper}>
            {defaultBahasa == 'Bahasa Indonesia' ? (
              <TouchableOpacity
                onPress={() => {
                  setDefaultBahasa('English');
                  setBahasaHandler(false);
                }}>
                <Text style={styles.chooseTextBahasa}>English</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setDefaultBahasa('Bahasa Indonesia');
                  setBahasaHandler(false);
                }}>
                <Text style={styles.chooseTextBahasa}>Bahasa Indonesia</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
      {slide === 1 ? (
        <FirstOnBoard bahasa={defaultBahasa} />
      ) : slide === 2 ? (
        <SecondOnBoard bahasa={defaultBahasa} />
      ) : slide === 3 ? (
        <ThirdOnBoard bahasa={defaultBahasa} />
      ) : (
        <FourthOnBoard bahasa={defaultBahasa} />
      )}
      <View style={styles.footer}>
        <View style={styles.navigasiBar}>
          {slide === 1 ? (
            <View />
          ) : (
            <TouchableOpacity onPress={() => setSlide(slide - 1)}>
              {defaultBahasa === 'Bahasa Indonesia' ? (
                <Text style={styles.btnNavigasi}>Sebelumnya</Text>
              ) : (
                <Text style={styles.btnNavigasi}>Previous</Text>
              )}
            </TouchableOpacity>
          )}
          {slide === 4 ? (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('LoginScreen',{bahasa:defaultBahasa})}
              style={{alignItems: 'flex-end'}}>
              {defaultBahasa === 'Bahasa Indonesia' ? (
                <Text style={styles.btnNavigasi}>Selesai</Text>
              ) : (
                <Text style={styles.btnNavigasi}>Done</Text>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setSlide(slide + 1)}
              style={{alignItems: 'flex-end'}}>
              {defaultBahasa === 'Bahasa Indonesia' ? (
                <Text style={styles.btnNavigasi}>Lewati</Text>
              ) : (
                <Text style={styles.btnNavigasi}>Skip</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.dotsNavigasi}>
          <BottomDots slide={slide} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  bahasaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.line,
    borderWidth: 1,
    padding: '2%',
    width: '45%',
    justifyContent: 'center',
    borderRadius: 3,
  },
  chooseBahasaWrapper: {
    flexDirection: 'row',
    backgroundColor: color.primary,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    padding: '2%',
    width: '45%',
    justifyContent: 'center',
    borderRadius: 3,
  },
  textBahasa: {
    color: color.line,
  },
  chooseTextBahasa: {
    color: 'white',
  },
  navigasiBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnNavigasi: {
    color: color.primary,
    fontWeight: 'bold',
  },
  dotsNavigasi: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    marginTop: 3,
    zIndex: -1000,
  },
});
