import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {
  getAlamatAction,
  getJadwalBukaAction,
  getProfileAction,
  getSampulAction,
  getTitleAction,
} from '../../redux/actions';
import ButtonPrimary from '../../components/ButtonPrimary';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';

export default function AkunEdit(props) {
  console.log('props', props);
  const {
    profile,
    sampul,
    title,
    alamat,
    deskripsi,
    jabatan,
    jamAwal,
    jamAkhir,
    jadwalBuka,
  } = useSelector(state => state.allReducers);
  const dispatch = useDispatch();
  const [profilePhoto, setProfilePhoto] = useState(props.route.params.profile);
  const [bgProfile, setBgProfile] = useState(props.route.params.sampul);
  const [namaToko, setNamaToko] = useState(props.route.params.title);
  const [alamatToko, setAlamatToko] = useState(props.route.params.alamat);
  const [hariBuka, setHariBuka] = useState('');

  const [namaTokoModal, setNamaTokoModal] = useState(false);
  const [alamatTokoModal, setAlamatTokoModal] = useState(false);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({})
      .then(images => {
        setProfilePhoto(images.path);
      })
      .catch(e => alert(e));
  };
  const chooseBgFromLibrary = () => {
    ImagePicker.openPicker({})
      .then(images => {
        setBgProfile(images.path);
      })
      .catch(e => alert(e));
  };

  const jadwalHariBuka = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];

  const jadwalHandler = item => {
    const mockJadwal = [];
    if (hariBuka.includes(item)) {
      const a = hariBuka.filter(e => e !== item);
      setHariBuka(a);
    } else {
      mockJadwal.push(...hariBuka, item);
      setHariBuka(mockJadwal);
    }
  };
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={{uri: bgProfile}}
        style={{
          width: '100%',
          height: 220,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={{uri: profilePhoto}}
            style={{width: 70, height: 70, borderRadius: 50}}
          />
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={{
              backgroundColor: 'rgba(1,1,1,0.5)',
              width: 70,
              height: 70,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}>
            <Icon name="camera" color="white" size={25} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(1,1,1,0.5)',
            borderRadius: 10,
            position: 'absolute',
            right: 20,
            bottom: 20,
          }}
          onPress={chooseBgFromLibrary}>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              paddingHorizontal: 10,
              paddingVertical: 3,
            }}>
            Ganti foto sampul
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.editList}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: Colors.btnBg,
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}>
          <Text style={{flex: 1}}>Nama Toko</Text>
          <TouchableOpacity
            onPress={() => setNamaTokoModal(!namaTokoModal)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text numberOfLines={1}>{namaToko}</Text>
            <Icon name="chevron-right" size={24} color={Colors.desc} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: Colors.btnBg,
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <Text style={{flex: 1}}>Alamat toko</Text>
          <TouchableOpacity
            onPress={() => setAlamatTokoModal(!alamatTokoModal)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text numberOfLines={1}>{alamatToko}</Text>
            <Icon name="chevron-right" size={24} color={Colors.desc} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: Colors.btnBg,
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <Text style={{flex: 1}}>Deskripsi toko</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text numberOfLines={1}>{deskripsi}</Text>
            <Icon name="chevron-right" size={24} color={Colors.desc} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: Colors.btnBg,
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <Text style={{flex: 1}}>Jabatan</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text numberOfLines={1}>{jabatan}</Text>
            <Icon name="chevron-right" size={24} color={Colors.desc} />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{fontWeight: 'bold', marginVertical: 10, marginHorizontal: 20}}>
        Edit jam operasional
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setJamAwalModal(!jamAwalModal)}
          style={{borderWidth: 1, borderColor: Colors.line, borderRadius: 3}}>
          <Text
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              fontWeight: 'bold',
            }}>
            {jamAwal}
          </Text>
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginHorizontal: 10}}>
          {' '}
          -{' '}
        </Text>
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: Colors.line, borderRadius: 3}}>
          <Text
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              fontWeight: 'bold',
            }}>
            {jamAkhir}
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{fontWeight: 'bold', marginVertical: 10, marginHorizontal: 20}}>
        Edit jadwal hari buka
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 10,
          marginBottom: 30,
        }}>
        <FlatList
          data={jadwalHariBuka}
          keyExtractor={item => item.id}
          numColumns={4}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'stretch',
            marginHorizontal: 20,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            marginBottom: 10,
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => jadwalHandler(item)}
                style={{
                  backgroundColor: jadwalBuka?.includes(item)
                    ? Colors.primary
                    : Colors.hariUnactive,
                  borderRadius: 7,
                }}>
                <Text
                  style={{
                    color: jadwalBuka?.includes(item) ? 'white' : Colors.desc,
                    width: 70,
                    textAlign: 'center',
                    paddingVertical: 10,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{backgroundColor: 'white', paddingVertical: 10}}>
        <ButtonPrimary
          text="Simpan"
          style={styles.btnSimpan}
          styleText={styles.textSimpan}
          onPress={async () => {
            await dispatch(getProfileAction(profilePhoto));
            await dispatch(getSampulAction(bgProfile));
            await dispatch(getTitleAction(namaToko));
            await dispatch(getAlamatAction(alamatToko));
            await props.navigation.goBack();
          }}
        />
      </View>

      <Modal
        useNativeDriver={true}
        animationIn="slideInUp"
        isVisible={namaTokoModal}>
        <StatusBar backgroundColor="rgba(1,1,1,0.7)" />
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontWeight: 'bold', width: '90%'}}>
            Ubah nama toko :{' '}
          </Text>
          <TextInput
            value={namaToko}
            onChangeText={setNamaToko}
            style={styles.editToko}
          />
          <TouchableOpacity
            onPress={() => setNamaTokoModal(!namaTokoModal)}
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 5,
              marginTop: 20,
              width: '90%',
            }}>
            <Text
              style={{
                paddingVertical: 10,
                color: 'white',
                textAlign: 'center',
              }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        useNativeDriver={true}
        animationIn="slideInUp"
        isVisible={alamatTokoModal}>
        <StatusBar backgroundColor="rgba(1,1,1,0.7)" />
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontWeight: 'bold', width: '90%'}}>
            Ubah alamat toko :{' '}
          </Text>
          <TextInput
            value={alamatToko}
            onChangeText={setAlamatToko}
            style={styles.editToko}
          />
          <TouchableOpacity
            onPress={() => setAlamatTokoModal(!alamatTokoModal)}
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 5,
              marginTop: 20,
              width: '90%',
            }}>
            <Text
              style={{
                paddingVertical: 10,
                color: 'white',
                textAlign: 'center',
              }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  editList: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'center',
    paddingTop: 10,
  },
  btnSimpan: {
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    borderRadius: 3,
  },
  textSimpan: {
    textAlign: 'center',
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  editToko: {
    borderBottomColor: Colors.desc,
    borderBottomWidth: 1,
    width: '90%',
  },
});
