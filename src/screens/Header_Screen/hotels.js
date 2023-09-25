import {Roboto_100Thin} from '@expo-google-fonts/roboto';
import React, {useState} from 'react';
import {
  StyleSheet,

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
import DatePicker from 'react-native-neat-date-picker';
import { Text } from 'react-native-paper';
import SearchableDropdown from 'react-native-searchable-dropdown';
import HomeScreen from '../../component/slider';
import items from './NewCityListHotel.json';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const Hotels = ({navigation, route}) => {
//   const data = route.params;
//   const TokenIdd = data?.data;
//   const userIp = data.ip;
//   console.log(userIp + ' userIp');
//   console.log('TokenIdd');
//   console.log(TokenIdd);
  const [visible, setVisible] = useState(false);

  const searchHotel = async () => {
    setVisible(true);

    // let EndUserIp = EndUserIp;
    let TokenId = TokenIdd;
    let Origin = selectedItemCode;
    console.log(Origin);
    //let Destination = selectdItmId;

    let PreferredDepartureTime = selectedDat;
    //let PreferredArrivalTime = selectedDat;

    let payload = {
      CheckInDate: selectedDat,
      NoOfNights: '1',
      CountryCode: 'IN',
      CityId: selectedItemCode,
      ResultCount: null,
      PreferredCurrency: 'INR',
      GuestNationality: 'IN',
      NoOfRooms: '1',
      RoomGuests: [
        {
          NoOfAdults: 1,
          NoOfChild: 0,
          ChildAge: null,
        },
      ],
      MaxRating: 5,
      MinRating: 0,
      ReviewScore: null,
      IsNearBySearchAllowed: false,
      EndUserIp: '103.154.247.7',
      TokenId: TokenIdd,
    };

    try {
      await axios({
        method: 'post',
        url: 'https://api.travvolt.com/travvolt/hotel/search',
        data: payload,
        config: {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      }).then(res => {
        setVisible(false);
        const response1 = res?.data;
        const response2 = response1?.data?.HotelSearchResult;
        console.log('HotelSearchResult');
        console.log(response2);

        // const response3 = response2?.Results;
        ToastAndroid.show('Results', ToastAndroid.SHORT);
        navigation.navigate('SearchHotel', {
          data: response2,
          price: response2.Price,
          tokenId: TokenIdd,
          userIp: userIp,
          CheckInDate: response2.CheckInDate,
          CheckOutDate: response2.CheckOutDate,
        });
      });
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
    console.log(date);

    let Demo = `${date.dateString}`;
    console.log(Demo);

    setSelectedDat(Demo);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}>
        <ScrollView>
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Holder')}>
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
              Hotels & HomeStays
            </Text>
          </View>

          {/* for Tabs */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 284,
                backgroundColor: '#fff',
                height: 29,
                borderRadius: 20,
              }}>
              <View
                style={{
                  backgroundColor: '#FF951A',
                  height: 29,
                  width: 142,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: '500',
                  }}>
                  Domestic
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('HotelInternational')}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    height: 29,
                    width: 142,

                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#026BDE',
                      fontWeight: '500',
                    }}>
                    International
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* hotel search */}
          <View
            style={{
              width: '85%',
              marginTop: 20,
              marginLeft: 28,
              marginRight: 28,
              marginBottom: 25,
              height: 66,
              borderRadius: 10,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/logo/htl.png')}
              style={{
                width: 25,
                height: 30,
                marginLeft: 0,
              }}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    marginLeft: 9,
                    marginTop: 3,
                    fontWeight: '500',
                  }}>
                  From
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 270,
                    backgroundColor: '#fff',
                    fontSize: 16,
                    borderRadius: 10,
                    marginLeft: 9,
                    flexDirection: 'column',
                  }}>
                  {selectedValue && (
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 15,
                        marginLeft: 5,
                      }}>
                      {`${selectedValue.id} - ${selectedValue.name}`}
                    </Text>
                  )}
                  {selectedValue && (
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 13,
                        marginLeft: 5,
                        color: '#4A4747',
                      }}>
                      {`${selectedValue.code}`}
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* date picker */}
          <View
            style={{
              width: '85%',
              marginLeft: 28,
              marginRight: 28,
              marginTop: -12,
              height: 66,
              borderRadius: 10,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/logo/clndr.png')}
              style={{
                width: 25,
                height: 25,
                marginLeft: -140,
              }}
            />

            <TouchableOpacity onPress={openDatePicker}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    marginLeft: 9,
                    color: '#4A4747',
                    fontWeight: '500',
                  }}>
                  Check In / Check out
                </Text>

                <Text
                  style={{
                    marginLeft: 9,
                    color: 'black',
                    fontWeight: '500',
                  }}>
                  {selectedDat}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Room & guest */}
          <View
            style={{
              width: '85%',
              marginLeft: 28,
              marginRight: 28,
              marginTop: 15,
              height: 51,
              borderRadius: 10,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/logo/guest.png')}
              style={{
                width: 25,
                height: 20,
                marginLeft: 0,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  marginLeft: 9,
                  color: '#4A4747',
                  fontWeight: '500',
                }}>
                Rooms & Guests
              </Text>
              <TextInput
                style={{
                  height: 30,
                  width: 270,
                  backgroundColor: '#fff',
                  fontSize: 15,
                  borderRadius: 10,
                  marginLeft: 9,
                }}
                placeholder="choose date..."
              />
            </View>
          </View>

          {/* Improve your search */}
          <View
            style={{
              flexDirection: 'column',
              height: 70,
              marginTop: 16,
            }}>
            <Text
              style={{
                color: '#4A4747',
                fontSize: 15,
                fontWeight: '600',
                marginLeft: 28,
              }}>
              Improve Your Search
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    height: 32,
                    marginTop: 10,
                    marginLeft: 12,
                    width: 140,
                    backgroundColor: '#FF951A',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#fff',
                      fontWeight: '500',
                    }}>
                    Hotel & Resorts
                  </Text>
                </View>
                <View
                  style={{
                    height: 32,
                    marginTop: 10,
                    marginLeft: 12,
                    width: 140,
                    backgroundColor: '#FF951A',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#fff',
                      fontWeight: '500',
                    }}>
                    HomeStays
                  </Text>
                </View>
                <View
                  style={{
                    height: 32,
                    marginTop: 10,
                    marginLeft: 12,
                    width: 140,
                    backgroundColor: '#FF951A',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#fff',
                      fontWeight: '500',
                    }}>
                    BreakFast Includes
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* button */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={searchHotel}>
              <View
                style={{
                  height: 40,
                  width: 284,
                  backgroundColor: '#006FFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                }}>
                {visible ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: '500',
                    }}>
                    Search Hotel
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>

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
            dateStringFormat="dd/mm/yyyy"
          />
        </ScrollView>
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
                items={items}
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C7E5F0',
    height: height,
    width: width,
  },
});
export default Hotels;
