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
  ToastAndroid,
  TextInput,
} from 'react-native';
import HomeScreen from '../../component/slider';
import publicIP from 'react-native-public-ip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserData } from '../../../redux-toolkit/slice'
import { useSelector } from 'react-redux';

import axios from 'axios';

const {width, height} = Dimensions.get('window');

const MHome = ({navigation}) => {
    const { accessToken, userData } = useSelector(state => state.auth);
  const [visible, setVisible] = useState(false);
  const [ip, setIp] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const[checkk,setchek]=useState(2)

  useEffect(() => {
    setUserData(2)
    
    console.log('access',accessToken)
    publicIP()
      .then(ip => {
        //     console.log(ip);
        setIp(ip);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  console.log('data',userData)

  // flight api
  console.log(ip);
  // const flightsearchapi = async () => {
  //   setVisible(true);

  //   let payload = {
  //     EndUserIp: ip,
  //   };
  //   try {
  //     await axios({
  //       method: 'post',
  //       url: 'https://api.travvolt.com/travvolt/token',
  //       data: payload,
  //       config: {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     }).then(res => {
  //       // console.log(res.data);
  //       const response1 = res.data;
  //       const response = response1.data.TokenId;
  //       let setData = await AsyncStorage.setItem('token', response);

  //       const getToken = await AsyncStorage.getItem('token');
  //       console.log('token : ');
  //       ToastAndroid.show('FlightSearch', ToastAndroid.SHORT);
  //       navigation.navigate('OneWayFlight', {data: response});
  //     });
  //   } catch (error) {
  //     setVisible(false);
  //     ToastAndroid.show(
  //       'check your Internet connection',
  //       //  error?.response?.data?.message + "!",
  //       ToastAndroid.SHORT,
  //     );
  //   }
  // };

  // hotel api

  // const flightsearchapi = async () => {
  //   setVisible(true);
  //   let payload = {
  //     EndUserIp: ip,
  //   };
  //   try {
  //     const res = await axios({
  //       method: 'post',
  //       url: 'https://api.travvolt.com/travvolt/token',
  //       data: payload,
  //       config: {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     });
  //     const response1 = res.data;
  //     const response = response1.data.TokenId;
  //     let setData = await AsyncStorage.setItem('token', response);
  //     const getToken = await AsyncStorage.getItem('token');
  //     console.log('token : ');
  //     ToastAndroid.show('FlightSearch', ToastAndroid.SHORT);
  //     navigation.navigate('OneWayFlight', {data: response});
  //   } catch (error) {
  //     setVisible(false);
  //     ToastAndroid.show('check your Internet connection', ToastAndroid.SHORT);
  //   }
  // };

  const flightsearchapi = async () => {
    setVisible(true);
    let payload = {
      EndUserIp: ip,
    };
    try {
      const res = await axios({
        method: 'post',
        url: 'https://api.travvolt.com/travvolt/token',
        data: payload,
        config: {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      });
      const response1 = res.data;
      const response = response1.data.TokenId;

      try {
        // await AsyncStorage.setItem('token', response);
        // const getToken = await AsyncStorage.getItem('token');
        console.log('token : ', getToken);
        ToastAndroid.show('FlightSearch', ToastAndroid.SHORT);
        navigation.navigate('OneWayFlight', {data: response});
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      setVisible(false);
      ToastAndroid.show('check your Internet connection', ToastAndroid.SHORT);
    }
  };

  const hotelsearchapi = async () => {
    setVisible(true);

    let payload = {
      EndUserIp: ip,
    };
    try {
      await axios({
        method: 'post',
        url: 'https://api.travvolt.com/travvolt/token',
        data: payload,
        config: {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      }).then(res => {
        const response1 = res.data;
        const response = response1.data.TokenId;

        ToastAndroid.show('HotelSearch', ToastAndroid.SHORT);
        navigation.navigate('Hotels', {data: response, ip: ip});
      });
    } catch (error) {
      setVisible(false);
      ToastAndroid.show(
        'check your Internet connection',
        //  error?.response?.data?.message + "!",
        ToastAndroid.SHORT,
      );
    }
  };

  const navigateToModule = async function (moduleName, pageName) {
    setVisible(true);

    let payload = {
      EndUserIp: ip,
    };
    try {
      await axios({
        method: 'post',
        url: 'https://api.travvolt.com/travvolt/token',
        data: payload,
        config: {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      }).then(res => {
        const response1 = res.data;
        const response = response1.data.TokenId;

        ToastAndroid.show(moduleName, ToastAndroid.SHORT);
        navigation.navigate(pageName, {data: response, ip: ip});
      });
    } catch (error) {
      setVisible(false);
      ToastAndroid.show(
        'check your Internet connection',
        //  error?.response?.data?.message + "!",
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <View style={{height: height, width: width}}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        {/* for hearder */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              // flexDirection: "row",
              height: 30,
              width: 70,
              //backgroundColor: "#fff",
              marginTop: 30,
              marginLeft: 14,
              justifyContent: 'center',
              borderRadius: 6,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                  alignContent: 'center',
                  color: 'white',
                  fontWeight: '500',
                }}>
                SignIN
              </Text>
            </TouchableOpacity>
          </View>

          {/* for hotel & flight */}
          <View
            style={{
              flex: 1,
              marginTop: 35,
              backgroundColor: '#fff',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: -10,
              }}>
              {/* flights */}

              <TouchableOpacity
                 onPress={() => navigation.navigate('OneWayFlight')}
                // onPress={flightsearchapi}
                >
                <View
                  elevation={10}
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/flight.png')}
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/* hotel */}
              <TouchableOpacity
                 onPress={() => navigation.navigate('Hotels')}
                // onPress={hotelsea 
                >
                <View
                  elevation={10}
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/hotel.png')}
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/*  buses */}
              <TouchableOpacity onPress={() => navigation.navigate('BusHome')}>
                <View
                  elevation={10}
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/tnb.png')}
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/* Holidays And packages */}
              <TouchableOpacity
                onPress={() =>
                //   navigateToModule('HolidayPackage', 'SearchHoliday')
                navigation.navigate('HolidayPackages')
                }>
                <View
                  elevation={10}
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/hp.png')}
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {/* for title */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              {/* flights */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Flights
                </Text>
              </View>
              {/* hotel */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 10,
                  }}>
                  Hotels
                </Text>
              </View>
              {/* Trains and buses */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 15,
                    // marginLeft: -14,
                  }}>
                  Bus
                </Text>
              </View>
              {/* Holidays And packages */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 12.5,
                    marginLeft: 3,
                  }}>
                  Holiday{'\n'}packages
                </Text>
              </View>
            </View>

            {/* for another services */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: -10,
              }}>
              {/* taxi */}
              <TouchableOpacity onPress={() => navigation.navigate('Taxi')}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 50,
                  }}>
                  <Image
                    source={require('../../../assets/logo/taxi.png')}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </View>
              </TouchableOpacity>

              {/* forex */}
              <TouchableOpacity onPress={() => navigation.navigate('Forex')}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 50,
                  }}>
                  <Image
                    source={require('../../../assets/logo/forex.png')}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </View>
              </TouchableOpacity>
              {/* train pnr */}
              <TouchableOpacity onPress={() => navigation.navigate('TrainPnr')}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 50,
                  }}>
                  <Image
                    source={require('../../../assets/logo/train.png')}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </View>
              </TouchableOpacity>
              {/* activity */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Activities')}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 50,
                  }}>
                  <Image
                    source={require('../../../assets/logo/activity.png')}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {/* naming */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              {/* taxi */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 15,
                  }}>
                  Taxi
                </Text>
              </View>

              {/* forex */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    marginLeft: 16,
                    // marginLeft: -14,
                  }}>
                  Forex
                </Text>
              </View>
              {/* train pnr */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 12.5,
                    marginLeft: 16,
                  }}>
                  Train{'\n'} PNR
                </Text>
              </View>
              {/* activity */}
              <View
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 5,
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    fontSize: 12.5,
                    marginLeft: 5,
                  }}>
                  Activities
                </Text>
              </View>
            </View>

            {/* image slider */}
            <View
              style={{
                height: 110,
                marginTop: -12,
                marginRight: 12,
                marginLeft: 12,
                borderRadius: 10,
                //backgroundColor: "black",
              }}>
              <HomeScreen />
            </View>

            {/* coupon offers tab */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: -4,
                height: 42,
                width: '100%',
                //backgroundColor: "#ddd",
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {/* coupon */}
                <TouchableOpacity onPress={() => navigation.navigate('Dummy')}>
                  <View
                    elevation={10}
                    style={{
                      flexDirection: 'row',
                      height: 24,
                      backgroundColor: '#fff',
                      marginTop: 4,
                      marginLeft: 12,
                      borderRadius: 5,
                      shadowColor: '#000000',
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      shadowOffset: {
                        height: 1,
                        width: 1,
                      },
                    }}>
                    <Image
                      source={require('../../../assets/logo/cpn.png')}
                      style={{
                        height: 22,
                        width: 22,
                        marginTop: 2,
                        marginLeft: 8,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        margin: 3,
                        marginRight: 8,
                      }}>
                      Coupon Lounge
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* offers */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('PassengerFlightDetails')}>
                  <View
                    elevation={10}
                    style={{
                      flexDirection: 'row',
                      height: 24,
                      backgroundColor: '#fff',
                      marginTop: 4,
                      marginLeft: 12,
                      borderRadius: 5,
                      shadowColor: '#000000',
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      shadowOffset: {
                        height: 1,
                        width: 1,
                      },
                    }}>
                    <Image
                      source={require('../../../assets/logo/offers.png')}
                      style={{
                        height: 17,
                        width: 20,
                        marginTop: 2,
                        marginLeft: 8,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        margin: 3,
                        marginRight: 8,
                      }}>
                      Offers
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* reffer earn */}
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'row',
                    height: 24,
                    backgroundColor: '#fff',
                    marginTop: 4,
                    marginLeft: 12,
                    borderRadius: 5,
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/rne.png')}
                    style={{
                      height: 17,
                      width: 20,
                      marginTop: 2,
                      marginLeft: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      margin: 3,
                      marginRight: 8,
                    }}>
                    Reffer & Earn
                  </Text>
                </View>
                {/* events fest */}
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'row',
                    height: 24,
                    backgroundColor: '#fff',
                    marginTop: 4,
                    marginLeft: 12,
                    borderRadius: 5,
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/enf.png')}
                    style={{
                      height: 17,
                      width: 20,
                      marginTop: 2,
                      marginLeft: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      margin: 3,
                      marginRight: 8,
                    }}>
                    Events & Festivals
                  </Text>
                </View>
                {/* flight status */}
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'row',
                    height: 24,
                    backgroundColor: '#fff',
                    marginTop: 4,
                    marginLeft: 12,
                    borderRadius: 5,
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/fstatus.png')}
                    style={{
                      height: 17,
                      width: 20,
                      marginTop: 2,
                      marginLeft: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      margin: 3,
                      marginRight: 8,
                    }}>
                    Flights Status
                  </Text>
                </View>
                {/* self drive */}
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'row',
                    height: 24,
                    backgroundColor: '#fff',
                    marginTop: 4,
                    marginLeft: 12,
                    borderRadius: 5,
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/sd.png')}
                    style={{
                      height: 17,
                      width: 20,
                      marginTop: 2,
                      marginLeft: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      margin: 3,
                      marginRight: 8,
                    }}>
                    Self Drive
                  </Text>
                </View>
                {/* visa service */}
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'row',
                    height: 24,
                    backgroundColor: '#fff',
                    marginTop: 4,
                    marginLeft: 12,
                    borderRadius: 5,
                    shadowColor: '#000000',
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Image
                    source={require('../../../assets/logo/visa.png')}
                    style={{
                      height: 17,
                      width: 20,
                      marginTop: 2,
                      marginLeft: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      margin: 3,
                      marginRight: 8,
                    }}>
                    Visa Service
                  </Text>
                </View>
              </ScrollView>
            </View>

            {/* Book now pay later */}
            <View
              style={{
                flexDirection: 'row',
                height: 109,
                backgroundColor: '#031B36',
                margin: 12,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Image
                source={require('../../../assets/logo/mny.png')}
                style={{
                  height: 64,
                  width: 64,
                  marginTop: 19,
                  marginLeft: 18,
                  marginBottom: 26,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 23,
                    marginLeft: 9,
                    marginTop: 11,
                  }}>
                  Book Now Pay Later !
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 13,
                    marginLeft: 9,
                  }}>
                  Book your trip and pay back later
                </Text>
                {/* for eligibiliy section */}
                <View
                  style={{
                    flexDirection: 'row',
                    width: 240,
                    height: 36,
                    marginTop: 3,
                    marginLeft: 9,
                    marginRight: 9,
                    backgroundColor: '#fff',
                    marginBottom: 11,
                    borderRadius: 11,
                  }}>
                  <TextInput
                    style={{
                      height: 36,
                      backgroundColor: '#fff',
                      fontSize: 14,
                      borderRadius: 10,
                      marginLeft: 6,
                      width: '50%',
                    }}
                    placeholder="Enter mobile no.."
                  />
                  <TouchableOpacity>
                    <View
                      style={{
                        height: 27,
                        margin: 4.8,
                        width: 100,
                        borderRadius: 20,
                        backgroundColor: '#026BDE',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: '400',
                        }}>
                        Check Eligibity
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* heading offers packages */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/logo/ofr.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 2,
                  marginLeft: 13,
                  //marginBottom: 26,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: '#026BDE',
                  marginLeft: 8,
                }}>
                Offer For You
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: '#026BDE',
                    marginLeft: 170,
                    marginTop: 5,
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            {/* fetching packages */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 250,
                  backgroundColor: '#fff',
                }}>
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'column',
                    marginLeft: 12,
                    marginTop: 8,
                    borderRadius: 12,
                    height: 215,
                    width: 160,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.9,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      margin: 6,
                      fontWeight: '500',
                    }}>
                    Domestic Fligths
                  </Text>
                  <Image
                    source={require('../../../assets/image/df.png')}
                    style={{
                      height: 105,
                      width: 127,

                      borderRadius: 10,

                      //marginBottom: 26,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      marginTop: 4,
                      fontWeight: '500',
                    }}>
                    Wow Flight Deals with AirAsia's{'\n'}
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      marginTop: -10,
                      marginBottom: 3,
                      fontWeight: '500',
                      borderBottomWidth: 1,
                      borderBottomColor: '#026BDE',
                    }}>
                    Season Sale:
                  </Text>
                  <Text style={{fontSize: 7, marginTop: 0, fontWeight: '500'}}>
                    Get Domestic flights starting @ JUST
                  </Text>
                  <Text style={{fontSize: 7, marginTop: 0, fontWeight: '500'}}>
                    ₹1250
                  </Text>
                  <TouchableOpacity>
                    <View
                      style={{
                        height: 26,
                        marginTop: 1,
                        width: 100,
                        borderRadius: 20,
                        backgroundColor: '#026BDE',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: '400',
                        }}>
                        Book Now
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'column',
                    marginLeft: 12,
                    marginTop: 8,
                    borderRadius: 12,
                    height: 215,
                    width: 160,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.9,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      margin: 6,
                      fontWeight: '500',
                    }}>
                    Domestic Fligths
                  </Text>
                  <Image
                    source={require('../../../assets/image/dff.png')}
                    style={{
                      height: 105,
                      width: 127,

                      borderRadius: 10,

                      //marginBottom: 26,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      marginTop: 4,
                      fontWeight: '500',
                    }}>
                    Wow Flight Deals with AirAsia's{'\n'}
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      marginTop: -10,
                      marginBottom: 3,
                      fontWeight: '500',
                      borderBottomWidth: 1,
                      borderBottomColor: '#026BDE',
                    }}>
                    Season Sale:
                  </Text>
                  <Text style={{fontSize: 7, marginTop: 0, fontWeight: '500'}}>
                    Get Domestic flights starting @ JUST
                  </Text>
                  <Text style={{fontSize: 7, marginTop: 0, fontWeight: '500'}}>
                    ₹1250
                  </Text>
                  <TouchableOpacity>
                    <View
                      style={{
                        height: 26,
                        marginTop: 1,
                        width: 100,
                        borderRadius: 20,
                        backgroundColor: '#026BDE',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: '400',
                        }}>
                        Book Now
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  elevation={10}
                  style={{
                    flexDirection: 'column',
                    marginLeft: 12,
                    marginTop: 8,
                    borderRadius: 12,
                    height: 215,
                    width: 160,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    shadowColor: '#000000',
                    shadowOpacity: 0.9,
                    shadowRadius: 2,
                    shadowOffset: {
                      height: 1,
                      width: 1,
                    },
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      margin: 6,
                      fontWeight: '500',
                    }}>
                    Domestic Fligths
                  </Text>
                  <Image
                    source={require('../../../assets/image/dfd.png')}
                    style={{
                      height: 105,
                      width: 127,

                      borderRadius: 10,

                      //marginBottom: 26,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      marginTop: 4,
                      fontWeight: '500',
                    }}>
                    Wow Flight Deals with AirAsia's{'\n'}
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      marginTop: -10,
                      marginBottom: 3,
                      fontWeight: '500',
                      borderBottomWidth: 1,
                      borderBottomColor: '#026BDE',
                    }}>
                    Season Sale:
                  </Text>
                  <Text style={{fontSize: 7, marginTop: 0, fontWeight: '500'}}>
                    Get Domestic flights starting @ JUST
                  </Text>
                  <Text style={{fontSize: 7, marginTop: 0, fontWeight: '500'}}>
                    ₹1250
                  </Text>
                  <TouchableOpacity>
                    <View
                      style={{
                        height: 26,
                        marginTop: 1,
                        width: 100,
                        borderRadius: 20,
                        backgroundColor: '#026BDE',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: '400',
                        }}>
                        Book Now
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>

            {/* more to explore  */}
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                marginLeft: 13,
                color: 'black',
              }}>
              More to Explore
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: 218,
                width: width,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}>
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
                    height: 195,
                    width: 161,
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
                    height: 195,
                    width: 161,
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
            </View>
            <View>
              <Text>navigation</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MHome;

const style = StyleSheet.create({});
