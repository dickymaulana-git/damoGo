import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function AkunScreen(props) {
  return (
    <ScrollView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../assets/images/saladmoi.png')}
        style={{width: '100%', height: 230}}>
        <View style={styles.backgroundHeader}>
          <TouchableOpacity style={styles.editBtn}>
            <Icon name="square-edit-outline" color="white" size={24} />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/moilogo.png')}
            style={{width: '18%', height: '34%', resizeMode: 'stretch'}}
          />
          <Text style={styles.titleStore}>Salad Moi</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.details}>
              <Icon name="account" size={20} color="white" />
              <Text style={styles.detailText}>100 Pengikut</Text>
            </View>
            <View style={styles.details}>
              <Icon name="instagram" size={20} color="white" />
              <Text style={styles.detailText}>@saladmoi</Text>
            </View>
            <View style={styles.details}>
              <Icon name="phone" size={20} color="white" />
              <Text style={styles.detailText}>089745624982</Text>
            </View>
          </View>
          <Text style={{color: 'white', paddingTop: 10, fontSize: 11}}>
            Gg. Mbakalan No 14, Jl. Kaliurang No.km 7.6
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.contentTop}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Rating Toko</Text>
            <Icon
              name="star"
              color={Colors.gold}
              size={18}
              style={{marginLeft: 10}}
            />
            <Text style={{color: Colors.desc}}>5.0</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: Colors.gold}}>
              Lihat ulasan
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: Colors.box1,
              flex: 1,
              marginRight: 5,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 5,
            }}>
            <Icon name="thumb-up" size={20} color={Colors.gold} />
            <Text
              style={{color: Colors.gold, fontSize: 12, fontWeight: 'bold'}}>
              3 Produk terlaris
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.box2,
              flex: 1,
              marginLeft: 5,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Icon name="alarm" size={20} color={Colors.hijau} />
            <Text
              style={{color: Colors.hijau, fontSize: 12, fontWeight: 'bold'}}>
              Jam paling recomended
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingVertical: 10,
          flex:1
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="cog" size={23} color={Colors.line} />
            <Text style={{marginLeft: 10}}>Pengaturan</Text>
          </View>
          <Icon name="chevron-right" size={23} color={Colors.line} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="face-woman" size={23} color={Colors.line} />
            <Text style={{marginLeft: 10}}>Customer support</Text>
          </View>
          <Icon name="chevron-right" size={23} color={Colors.line} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="help-circle" size={23} color={Colors.line} />
            <Text style={{marginLeft: 10}}>Cara memakai</Text>
          </View>
          <Icon name="chevron-right" size={23} color={Colors.line} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="earth" size={23} color={Colors.line} />
            <Text style={{marginLeft: 10}}>Kebijakan publik kami</Text>
          </View>
          <Icon name="chevron-right" size={23} color={Colors.line} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="account-group" size={23} color={Colors.line} />
            <Text style={{marginLeft: 10}}>Kebijakan pengguna</Text>
          </View>
          <Icon name="chevron-right" size={23} color={Colors.line} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../assets/images/go.png')} style={{width:22,height:13,resizeMode:'stretch'}} />
            <Text style={{marginLeft: 10}}>Jadi pengguna app kami yuk</Text>
          </View>
          <Icon name="chevron-right" size={23} color={Colors.line} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:'20%'}}>
          <ButtonPrimary text="Keluar" style={styles.btnSignOut} onPress={()=>props.navigation.navigate('LoginScreen',{bahasa:'Bahasa Indonesia'})} styleText={styles.textSignOut} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundHeader: {
    backgroundColor: 'rgba(1,1,1,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  titleStore: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginVertical: 5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    color: 'white',
    fontSize: 11,
    marginLeft: 5,
  },
  editBtn: {
    position: 'absolute',
    right: 15,
    top: 65,
  },
  contentTop: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  contentList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginTop: 10,
    height: '100%',
  },
  btnSignOut: {
    borderColor: Colors.signout,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textSignOut:{
    color:Colors.signout,
    fontWeight:'bold',
    paddingVertical:10
  }
});
