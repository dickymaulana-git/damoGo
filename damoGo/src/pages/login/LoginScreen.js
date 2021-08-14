import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../config/Colors';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function LoginScreen(props) {
  const [bahasaHandler, setBahasaHandler] = useState(false);
  const [defaultBahasa, setDefaultBahasa] = useState(props.route.params.bahasa);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (email == '' && password == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Email / Kata sandi salah',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      props.navigation.navigate('BottomTabNavigator');
      setEmail('');
      setPassword('');
    }
  };

  const daftarHandler = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Fitur dalah pengembangan, akan dikembangkan jika saya berhasil bekerja di damoGO :)) ',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setBahasaHandler(!bahasaHandler)}
          style={styles.bahasaWrapper}>
          <Text style={styles.textBahasa}>{defaultBahasa}</Text>
          <Icon name="chevron-down" size={20} color={color.line} />
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
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.loginContent}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={email.length > 0 ? styles.inputStyleLength : styles.inputStyle}
        />
        <TextInput
          placeholder={
            defaultBahasa === 'Bahasa Indonesia' ? 'Kata sandi' : 'Password'
          }
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={
            password.length > 0 ? styles.inputStyleLength : styles.inputStyle
          }
        />
        <View style={styles.loginFooter}>
          <ButtonPrimary
            text={defaultBahasa === 'Bahasa Indonesia' ? 'Masuk' : 'Login'}
            style={styles.masuk}
            styleText={styles.textMasuk}
            onPress={loginHandler}
          />
          <ButtonPrimary
            text={
              defaultBahasa === 'Bahasa Indonesia'
                ? 'Daftar sebagai mitra'
                : 'Register as partner'
            }
            style={styles.daftar}
            styleText={styles.textDaftar}
            onPress={daftarHandler}
          />
        </View>
      </View>
      {defaultBahasa === 'Bahasa Indonesia' ? (
        <Text style={styles.footerText}>
          Dengan masuk, kamu menyetujui Kebijakan Penggunaan dan Kebijakan
          Publik kami
        </Text>
      ) : (
        <Text style={styles.footerText}>
          By logging in, you agree to our Usage Policy and Public Policy
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    paddingBottom: '20%',
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
  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '45%',
    height: '23%',
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  loginContent: {},
  loginText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputStyle: {
    borderBottomColor: color.line,
    borderBottomWidth: 1,
  },
  inputStyleLength: {
    borderBottomColor: color.primary,
    borderBottomWidth: 1,
  },
  loginFooter: {
    marginTop: '15%',
  },
  masuk: {
    backgroundColor: color.primary,
    borderRadius: 5,
  },
  textMasuk: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  daftar: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: color.primary,
    borderWidth: 1,
    marginTop: '5%',
  },
  textDaftar: {
    color: color.primary,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: color.desc,
    marginTop: '10%',
    marginHorizontal: 20,
  },
});
