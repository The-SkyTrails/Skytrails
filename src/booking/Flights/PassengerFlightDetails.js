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
  ToastAndroid,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const PassengerFlightDetails = ({navigation, route}) => {
  // const response=route.params.response
  const responseData = route.params.data;
  return (
    <View
      style={{
        height: height,
        width: width,
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}>
        <ScrollView>
          {/* header */}
          {/* <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate("OneWayFlight")}
              //onPress={() => navigation.navigate("SearchFlights")}
              onPress={() => navigation.goBack()}>
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
              From => TO
            </Text>
          </View> */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate("OneWayFlight")}
              //onPress={() => navigation.navigate("SearchFlights")}
              onPress={() => navigation.goBack()}>
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
            {responseData?.map(data1 => {
              return data1?.map(data2 => {
                //  console.log(data2?.Origin?.Airport?.AirportCode);
                return (
                  <View>
                    <Text
                      style={{
                        marginTop: 40,
                        marginLeft: 20,
                        color: '#fff',
                      }}>
                      {data2?.Origin?.Airport?.AirportCode} →
                      {data2?.Destination?.Airport?.AirportCode}
                    </Text>
                  </View>
                );
              });
            })}
          </View>

          {/* details */}
          <View
            style={{
              marginTop: 20,
              flex: 1,
              height: height,
              width: width,
              backgroundColor: '#EFF5FF',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            {/* title */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 18,
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Flight details
              </Text>
            </View>
            {/* ori - desti */}
            {responseData?.map(data1 => {
              return data1?.map(data2 => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 24,
                    }}>
                    <Text
                      style={{
                        color: '#005CFF',
                        fontSize: 16,
                        fontWeight: '500',
                        marginRight: 20,
                      }}>
                      {data2?.Origin?.Airport?.AirportCode}
                    </Text>
                    <Image
                      source={require('../../../assets/logo/airplane.png')}
                      style={{
                        width: 35,
                        height: 25,
                      }}
                    />
                    <Text
                      style={{
                        color: '#005CFF',
                        fontSize: 16,
                        fontWeight: '500',
                        marginLeft: 20,
                      }}>
                      {data2?.Destination?.Airport?.AirportCode}
                    </Text>
                  </View>
                );
              });
            })}

            {/* N-S / DURATION / CLASS */}
            {responseData?.map(data1 => {
              return data1?.map(data2 => {
                return (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        marginRight: 5,
                      }}>
                      N-S |
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        marginRight: 5,
                      }}>
                      {data2?.Duration} Min
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                      }}>
                      | CLASS
                    </Text>
                  </View>
                );
              });
            })}

            {/* DTAILS */}
            {responseData?.map(data1 => {
              return data1?.map(data2 => {
                const depTime = new Date(data2?.Origin?.DepTime);
                const formattedDepTime = depTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                });
                const formatedDepTime = depTime.toLocaleDateString('default', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                });
                const arrTime = new Date(data2?.Destination?.ArrTime);
                const formattedArrTime = arrTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                });
                const formatedArrTime = arrTime.toLocaleDateString('default', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                });

                return (
                  <View
                    style={{
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      marginTop: 22,
                    }}>
                    {/* origin details */}
                    <View
                      style={{
                        flexDirection: 'column',
                        marginLeft: 1,
                      }}>
                      <Text>{data2?.Origin?.Airport?.AirportCode}</Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#005CFF',
                          fontWeight: '500',
                        }}>
                        {/* {data2?.Origin?.DepTime} */}
                        {formattedDepTime}
                      </Text>
                      <Text>{formatedDepTime}</Text>
                      <Text>{data2?.Origin?.Airport?.CityName}</Text>
                      <Text>{data2?.Origin?.Airport?.AirportName}</Text>
                      <Text>Terminal {data2?.Origin?.Airport?.Terminal}</Text>
                    </View>

                    {/* duration details */}
                    <View
                      style={{
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                      }}>
                      <Text> {data2?.Duration} Min</Text>
                      <Text> n-s</Text>
                    </View>

                    {/* destination Details */}
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        marginRight: 4,
                      }}>
                      <Text>{data2?.Destination?.Airport?.AirportCode}</Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#005CFF',
                          fontWeight: '500',
                        }}>
                        {formattedArrTime}
                      </Text>
                      <Text>{formatedArrTime}</Text>
                      <Text>{data2?.Destination?.Airport?.CityName}</Text>
                      <Text>{data2?.Destination?.Airport?.AirportName}</Text>
                      <Text>
                        Terminal {data2?.Destination?.Airport?.Terminal}
                      </Text>
                    </View>
                  </View>
                );
              });
            })}
          </View>

          {/* details */}
          <View
            style={{
              marginTop: 20,
              flex: 1,
              height: height,
              width: width,
              backgroundColor: '#EFF5FF',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            {/* title */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 18,
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Flight details
              </Text>
            </View>
            {/* ori - desti */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 24,
              }}>
              <Text
                style={{
                  color: '#005CFF',
                  fontSize: 16,
                  fontWeight: '500',
                  marginRight: 20,
                }}>
                ORI
              </Text>
              <Image
                source={require('../../../assets/logo/airplane.png')}
                style={{
                  width: 35,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: '#005CFF',
                  fontSize: 16,
                  fontWeight: '500',
                  marginLeft: 20,
                }}>
                DES
              </Text>
            </View>

            {/* N-S / DURATION / CLASS */}

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  marginRight: 5,
                }}>
                N-S |
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  marginRight: 5,
                }}>
                DURATION
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                | CLASS
              </Text>
            </View>

            {/* DTAILS */}
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginTop: 22,
              }}>
              {/* origin details */}
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 1,
                }}>
                <Text>ORI-CODE</Text>
                <Text
                  style={{fontSize: 18, color: '#005CFF', fontWeight: '500'}}>
                  TIME
                </Text>
                <Text>DAY/YYYY</Text>
                <Text>ORI</Text>
                <Text>AIRPORT-NAME</Text>
                <Text>TERMINAL</Text>
              </View>

              {/* duration details */}
              <View
                style={{
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                }}>
                <Text>duration</Text>
                <Text> n-s</Text>
              </View>

              {/* destination Details */}
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  marginRight: 4,
                }}>
                <Text>DES-CODE</Text>
                <Text
                  style={{fontSize: 18, color: '#005CFF', fontWeight: '500'}}>
                  TIME
                </Text>
                <Text>DAY/YYYY</Text>
                <Text>DEST-NAME</Text>
                <Text>AIRPORT-NAME</Text>
                <Text>TERMINAL</Text>
              </View>
            </View>
            <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
              <Text>Red</Text>
            </View>
            {/* bag container */}

            <View
              elevation={10}
              style={{
                // height: 91,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 18,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              {/*  details check-in bags */}
              <View
                //elevation={5}
                style={{
                  flexDirection: 'row',
                  // height: 91,
                  width: 280,
                  backgroundColor: '#fff',
                  //    justifyContent: "space-around",
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 13,
                }}>
                <Image
                  source={require('../../../assets/logo/cabinbag.png')}
                  style={{
                    // width: 16,
                    height: 20,
                    width: 20,
                    marginLeft: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  Cabin Bag
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                    marginLeft: 42,
                  }}>
                  7 Kg
                </Text>
              </View>
              {/*  details check-in bags */}
              <View
                //elevation={5}
                style={{
                  flexDirection: 'row',
                  //  height: 26,
                  width: 280,
                  backgroundColor: '#fff',
                  //    justifyContent: "space-around",
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/checkinbag.png')}
                  style={{
                    // width: 16,
                    height: 20,
                    width: 20,
                    marginLeft: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: 'black',
                    fontWeight: '500',
                    marginLeft: 10,
                  }}>
                  Check-In Bags
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                    marginLeft: 42,
                  }}>
                  15 Kg
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#005CFF',
                  marginTop: 10,
                  marginLeft: 15,
                  marginBottom: 8,
                }}>
                Baggage & Cancellation Policy
              </Text>
            </View>

            {/* promo offer container */}

            <View
              elevation={10}
              style={{
                // height: 91,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 18,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 280,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/offerpromo.png')}
                  style={{
                    // width: 16,
                    height: 26,
                    width: 26,
                    marginLeft: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  Offers & Promo Codes{'\n'}
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      marginLeft: 10,
                      color: 'black',
                    }}>
                    To Help you save more
                  </Text>
                </Text>
              </View>
              {/* promocode */}
              <View
                elevation={5}
                style={{
                  flexDirection: 'row',
                  width: 320,
                  height: 36,
                  marginTop: 3,
                  marginLeft: 16,
                  marginRight: 16,
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
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  placeholder="Enter promo code..."
                />
                <TouchableOpacity>
                  <View
                    style={{
                      height: 27,
                      margin: 4.8,
                      width: 100,
                      borderRadius: 20,
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Text
                      style={{
                        color: '#026BDE',
                        fontWeight: '500',
                        // marginTop: -5,
                        fontSize: 15,
                      }}>
                      Apply
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PassengerFlightDetails;

const style = StyleSheet.create({});
