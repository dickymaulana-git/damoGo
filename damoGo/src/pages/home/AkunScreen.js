import React, {useState} from 'react';
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
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';

export default function AkunScreen(props) {
  const {profile, sampul, title, alamat} = useSelector(
    state => state.allReducers,
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const [produkModal, setProdukModal] = useState(false);
  const [jamModal, setJamModal] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalProduk = () => {
    setProdukModal(!produkModal);
  };

  const toggleModalJam = () => {
    setJamModal(!jamModal);
  };

  const ulasanLoop = [1, 2, 3];
  const jamLoop = [
    {
      id: 1,
      image: require('../../assets/images/1.png'),
      jam: '12.00 - 16.00',
      terjual: '24',
    },
    {
      id: 2,
      image: require('../../assets/images/2.png'),
      jam: '16.00 - 19.00',
      terjual: '10',
    },
    {
      id: 3,
      image: require('../../assets/images/2.png'),
      jam: '19.00 - 21.00',
      terjual: '5',
    },
  ];
  return (
    <ScrollView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={{uri: sampul}}
        style={{width: '100%', height: 230}}>
        <View style={styles.backgroundHeader}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AkunEdit', {
                profile: profile,
                sampul: sampul,
                title:title,
                alamat:alamat
              })
            }
            style={styles.editBtn}>
            <Icon name="square-edit-outline" color="white" size={24} />
          </TouchableOpacity>
          <Image
            source={{uri: profile}}
            style={{
              width: '18%',
              height: '34%',
              borderRadius: 50,
            }}
          />
          <Text style={styles.titleStore}>{title}</Text>
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
            {alamat}
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
          <TouchableOpacity
            onPress={toggleModal}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: Colors.gold}}>
              Lihat ulasan
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={toggleModalProduk}
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleModalJam}
            style={{
              backgroundColor: Colors.box2,
              flex: 1,
              marginLeft: 5,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 5,
            }}>
            <Icon name="alarm" size={20} color={Colors.hijau} />
            <Text
              style={{color: Colors.hijau, fontSize: 12, fontWeight: 'bold'}}>
              Jam paling recomended
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingVertical: 10,
          flex: 1,
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
            <Image
              source={require('../../assets/images/go.png')}
              style={{width: 22, height: 13, resizeMode: 'stretch'}}
            />
            <Text style={{marginLeft: 10}}>Jadi pengguna app kami yuk</Text>
          </View>
          <Icon name="chevron-right" size={23} color={Colors.line} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: '20%'}}>
          <ButtonPrimary
            text="Keluar"
            style={styles.btnSignOut}
            onPress={() =>
              props.navigation.navigate('LoginScreen', {
                bahasa: 'Bahasa Indonesia',
              })
            }
            styleText={styles.textSignOut}
          />
        </TouchableOpacity>
      </View>
      <Modal
        useNativeDriver={true}
        animationIn="slideInUp"
        isVisible={isModalVisible}>
        <StatusBar backgroundColor="rgba(1,1,1,0.7)" />
        <View style={styles.modalWrapper}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginBottom: 20,
            }}>
            Ulasan
          </Text>
          {ulasanLoop.map(() => {
            return (
              <View key={Math.random().toString()} style={{marginBottom: 20}}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/images/ulasan.png')}
                      style={{width: 50, height: 50, borderRadius: 30}}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text>Saraswati Putri</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="star" color={Colors.gold} size={16} />
                        <Icon name="star" color={Colors.gold} size={16} />
                        <Icon name="star" color={Colors.gold} size={16} />
                        <Icon name="star" color={Colors.gold} size={16} />
                        <Icon name="star" color={Colors.gold} size={16} />
                        <Text style={{color: Colors.desc, marginLeft: 5}}>
                          5.0
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: Colors.desc,
                        textAlign: 'right',
                        flex: 1,
                      }}>
                      1 hari yang lalu
                    </Text>
                  </View>
                  <Text
                    style={{color: Colors.desc, fontSize: 12, marginTop: 10}}>
                    Enak banget humbergernya, gila bikin nagih serius, makasih
                    banyak ya ...
                  </Text>
                </View>
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.closeBtn}
            title="Hide modal"
            onPress={toggleModal}>
            <Icon name="close" size={23} color={Colors.line} />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        useNativeDriver={true}
        animationIn="slideInUp"
        isVisible={produkModal}>
        <StatusBar backgroundColor="rgba(1,1,1,0.7)" />
        <View style={styles.modalWrapperProduk}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginBottom: 30,
            }}>
            Produk Terlaris
          </Text>
          {ulasanLoop.map(e => {
            return (
              <View
              key={Math.random().toString()}
                style={{
                  marginBottom: 10,
                  flexDirection: 'row',
                  borderBottomColor: '#E7E7E7',
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                }}>
                <View style={{paddingRight: 10, justifyContent: 'center'}}>
                  <Text
                    style={{
                      position: 'absolute',
                      zIndex: 1000,
                      color: 'white',
                      fontWeight: 'bold',
                      left: '35%',
                    }}>
                    {e}
                  </Text>
                  <Image
                    source={
                      e === 1
                        ? require('../../assets/images/Star1.png')
                        : require('../../assets/images/Star.png')
                    }
                    style={{width: 30, height: 30, resizeMode: 'stretch'}}
                  />
                </View>
                <Image
                  source={require('../../assets/images/saladMoiProduk.png')}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontWeight: 'bold'}}>
                    Salad Moi Regular Size
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: Colors.desc,
                        textDecorationLine: 'line-through',
                      }}>
                      Rp12.000
                    </Text>
                    <Text style={{fontWeight: 'bold', color: Colors.hijau}}>
                      Rp9.000
                    </Text>
                    <Text style={{fontSize: 12, color: Colors.desc}}>
                      (30%)
                    </Text>
                  </View>
                  <View style={{justifyContent: 'flex-end', flex: 1}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          backgroundColor: Colors.btnBg,
                          flex: 1,
                          marginRight: 5,
                          borderRadius: 3,
                          height: 25,
                          justifyContent: 'center',
                        }}>
                        {e === 1 ? (
                          <Text
                            style={{
                              color: Colors.desc,
                              textAlign: 'center',
                              fontSize: 12,
                            }}>
                            24 Terjual
                          </Text>
                        ) : e === 2 ? (
                          <Text
                            style={{
                              color: Colors.desc,
                              textAlign: 'center',
                              fontSize: 12,
                            }}>
                            18 Terjual
                          </Text>
                        ) : (
                          <Text
                            style={{
                              color: Colors.desc,
                              textAlign: 'center',
                              fontSize: 12,
                            }}>
                            12 Terjual
                          </Text>
                        )}
                      </View>
                      <TouchableOpacity
                        style={{
                          backgroundColor: Colors.primary,
                          flex: 1,
                          marginLeft: 5,
                          borderRadius: 3,
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 12,
                            fontWeight: 'bold',
                          }}>
                          Jual lagi
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.closeBtn}
            title="Hide modal"
            onPress={toggleModalProduk}>
            <Icon name="close" size={23} color={Colors.line} />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        useNativeDriver={true}
        animationIn="slideInUp"
        isVisible={jamModal}>
        <StatusBar backgroundColor="rgba(1,1,1,0.7)" />
        <View style={styles.modalWrapperProduk}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginBottom: 30,
            }}>
            Jam Recommended
          </Text>
          {jamLoop.map(e => {
            return (
              <View
              key={Math.random().toString()}
                style={{
                  marginBottom: 20,
                  flexDirection: 'row',
                  borderBottomColor: '#E7E7E7',
                  borderBottomWidth: 1,
                  paddingBottom: 20,
                }}>
                <View
                  style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                  <Image source={e.image} />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: Colors.desc,
                      marginLeft: 10,
                      flex: 1,
                    }}>
                    {e.jam}
                  </Text>
                  <View
                    style={{
                      backgroundColor: Colors.btnBg,
                      justifyContent: 'center',
                      paddingTop: 5,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        textAlign: 'right',
                        flex: 1,
                        color: Colors.desc,
                        paddingHorizontal: 10,
                      }}>
                      {e.terjual} Terjual
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.closeBtn}
            title="Hide modal"
            onPress={toggleModalJam}>
            <Icon name="close" size={23} color={Colors.line} />
          </TouchableOpacity>
        </View>
      </Modal>
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
  textSignOut: {
    color: Colors.signout,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  modalWrapper: {
    backgroundColor: 'white',
    width: '112%',
    height: '70%',
    position: 'absolute',
    bottom: -20,
    marginLeft: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeBtn: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  modalWrapperProduk: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
