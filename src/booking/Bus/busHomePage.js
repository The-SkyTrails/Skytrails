/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  SafeAreaView,
  Modal,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import publicIP from 'react-native-public-ip';
import DatePicker from 'react-native-neat-date-picker';
import HomeScreen from '../../component/slider';
import {Roboto_100Thin} from '@expo-google-fonts/roboto';
import SearchableDropdown from 'react-native-searchable-dropdown';
// import items from './city.json';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

const {width, height} = Dimensions.get('window');

const Bus = ({route, navigation}) => {
  const data = route.params;
  const TokenIdd = data?.data;

  console.log(TokenIdd);
  console.log('TokenIdd');

  const [visible, setVisible] = useState(false);

  const [ip, setIp] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    publicIP()
      .then(ip => {
        console.log(ip);
        setIp(ip);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const searchflight = async () => {
    setVisible(true);

    // let EndUserIp = EndUserIp;
    let TokenId = TokenIdd;
    let Origin = selectedItemId;
    let Destination = selectdItmId;

    let PreferredDepartureTime = selectedDat;
    let PreferredArrivalTime = selectedDat;
    let FlightCabinClass = selectedClass;

    let payload = {
      EndUserIp: ip,
      TokenId: TokenIdd,
      AdultCount: '1',
      ChildCount: '0',
      InfantCount: '0',
      DirectFlight: 'false',
      OneStopFlight: 'false',
      JourneyType: '1',
      PreferredAirlines: null,
      Segments: [
        {
          Origin: selectedItemId,
          Destination: selectdItmId,
          FlightCabinClass: selectedClass,
          PreferredDepartureTime: selectedDat,
          PreferredArrivalTime: selectedDat,
        },
      ],
      Sources: null,
    };
    try {
      const res = await axios({
        method: 'post',
        url: 'https://api.travvolt.com/travvolt/flight/search/oneway',
        data: payload,
        config: {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      });

      const response1 = res?.data;
      const response2 = response1?.data?.Response;
      const response3 = response2?.Results;
      const TraceId = response2?.TraceId;
      console.log(TraceId);
      // console.log('TraceId', JSON.stringify(response2?.TraceId));

      //  console.log('data===', response3);
      try {
        await AsyncStorage.setItem('trace', TraceId);
        const getTrace = await AsyncStorage.getItem('trace');
        console.log('trace : ', getTrace);
        ToastAndroid.show('Results', ToastAndroid.SHORT);
        navigation.navigate('SearchFlights', {data: response3});
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      setVisible(false);
      ToastAndroid.show(
        error?.response?.data?.message + '!',
        ToastAndroid.SHORT,
      );
    }
  };

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [selectedItemCode, setSelectedItemCode] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onItemSelect = item => {
    setSelectedValue(item);
    setModalVisible(false);
    setSelectedItemId(item.id);
    setSelectedItemName(item.name);
    setSelectedItemCode(item.code);
  };
  //  for to
  const [selectdItmId, setSelectdItmId] = useState(null);
  const [selectdItmName, setSelectdItmName] = useState(null);
  const [selectdItmCode, setSelectdItmCode] = useState(null);
  const [selectdValue, setSelectdValue] = useState(null);
  const [modlVisible, setModlVisible] = useState(false);

  const onItemSelectt = itm => {
    setSelectdValue(itm);
    setModlVisible(false);
    setSelectdItmId(itm.id);
    setSelectdItmName(itm.name);
    setSelectdItmCode(itm.code);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDat, setSelectedDat] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };

  const onConfirm = date => {
    // You should close the modal in here
    setShowDatePicker(false);

    // Set the selected date
    setSelectedDate(date); // The parameter 'date' is a Date object so that you can use any Date prototype method.
    //  console.log(date);

    let Demo = `${date.dateString}`;
    //console.log(Demo);

    setSelectedDat(Demo);
  };
  const [selectedClass, setSelectedClass] = useState('');
  // console.log(selectedClass);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}
        resizeMode="stretch">
        <ScrollView>
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Holder")}> */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/logo/back.png')}
                style={{
                  width: 19,
                  height: 19,
                  marginTop: 38,
                  marginLeft: 14,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                marginTop: 35,
                marginLeft: 16,
                fontSize: 17,
                fontWeight: '500',
              }}>
              Bus
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('BusSearch')}>
            <View
              elevation={5}
              style={{
                margin: 10,
                borderRadius: 6,
                padding: 6,
                backgroundColor: '#ffff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{margin: 6, width: 25, height: 25}}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={require('../../../assets/logo/bus.png')}
                  />
                </View>
                <View>
                  <Text
                    style={{fontSize: 18, color: '#252525', fontWeight: 700}}>
                    Book Bus Tickets
                  </Text>
                </View>
              </View>
              <View style={{margin: 6, width: 25, height: 25}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../../assets/logo/frwrd.png')}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* slider */}
          <View
            style={{
              height: 110,
              marginTop: 15,
              marginRight: 12,
              marginLeft: 12,
              borderRadius: 10,
              //backgroundColor: "black",
            }}>
            <HomeScreen />
          </View>

          {/* FIND YOUR WONDERLAND */}
          <View>
            <Text
              style={{
                fontSize: 18,
                marginTop: 15,
                fontWeight: '700',
                marginLeft: 100,
                color: '#026BDE',
              }}>
              Find Your WonderLand
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: 228,
                width: width,
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: -30,
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                  }}>
                  <Image
                    source={require('../../../assets/image/df.png')}
                    style={{
                      height: 124,
                      width: 144,
                      marginTop: 2,
                      marginLeft: 13,
                      borderRadius: 10,
                      //marginBottom: 26,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    Bali
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                    marginRight: 10,
                  }}>
                  <Image
                    source={require('../../../assets/image/dfd.png')}
                    style={{
                      height: 124,
                      width: 144,
                      marginTop: 2,
                      marginLeft: 13,
                      borderRadius: 10,
                      //marginBottom: 26,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    Bali
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                  }}>
                  <Image
                    source={require('../../../assets/image/df.png')}
                    style={{
                      height: 124,
                      width: 144,
                      marginTop: 2,
                      marginLeft: 13,
                      borderRadius: 10,
                      //marginBottom: 26,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                    }}>
                    Bali
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <DatePicker
            isVisible={showDatePicker}
            mode={'single'}
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        </ScrollView>

        {/* for from */}
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <ImageBackground
            source={require('../../../assets/image/bg.jpg')}
            style={{flex: 1}}
            resizeMode="cover">
            <View style={{height: '90%', marginTop: 100}}>
              {/* Render searchable component here */}
              <SearchableDropdown
                onTextChange={text => {}}
                onItemSelect={onItemSelect}
                containerStyle={{padding: 5}}
                listProps={{
                  nestedScrollEnabled: true,
                }}
                textInputStyle={{
                  padding: 1,
                  borderWidth: 1,
                  borderColor: '#ddd',
                  backgroundColor: '#fff',
                }}
                itemStyle={{
                  padding: 5,
                  marginTop: 2,
                  backgroundColor: '#fff',
                  borderColor: '#ddd',
                  borderWidth: 1,
                }}
                itemTextStyle={{
                  color: 'black',
                }}
                itemsContainerStyle={{
                  maxHeight: '50%',
                }}
                // items={items}
                defaultIndex={2}
                placeholder={
                  selectedItemId && selectedItemName
                    ? `${selectedItemId} - ${selectedItemName} - ${selectedItemCode}`
                    : 'placeholder'
                }
                resPtValue={false}
                underlineColorAndroid="transparent"
              />
            </View>
          </ImageBackground>
        </Modal>

        {/* for to */}
        <Modal
          visible={modlVisible}
          onRequestClose={() => setModlVisible(false)}>
          <ImageBackground
            source={require('../../../assets/image/bg.jpg')}
            style={{flex: 1}}
            resizeMode="cover">
            <View style={{height: '90%', marginTop: 100}}>
              {/* Render searchable component here */}
              <SearchableDropdown
                onTextChange={text => {}}
                onItemSelect={onItemSelectt}
                containerStyle={{padding: 5}}
                listProps={{
                  nestedScrollEnabled: true,
                }}
                textInputStyle={{
                  padding: 1,
                  borderWidth: 1,
                  borderColor: '#ddd',
                  backgroundColor: '#fff',
                }}
                itemStyle={{
                  padding: 5,
                  marginTop: 2,
                  backgroundColor: '#fff',
                  borderColor: '#ddd',
                  borderWidth: 1,
                }}
                itemTextStyle={{
                  color: 'black',
                }}
                itemsContainerStyle={{
                  maxHeight: '50%',
                }}
                // items={items}
                defaultIndex={2}
                placeholder={
                  selectdItmId && selectdItmName
                    ? `${selectdItmId} - ${selectdItmName} - ${selectdItmCode}`
                    : 'placeholder'
                }
                resPtValue={false}
                underlineColorAndroid="transparent"
              />
            </View>
          </ImageBackground>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: height,
    width: width,
    flex: 1,
  },
});

export default Bus;
