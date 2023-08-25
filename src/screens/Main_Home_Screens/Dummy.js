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
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
const Dummy = ({navigation}) => {
  // const ResultIndex = route?.params?.ResultIndex;
  const [responseData, setResponseData] = useState(null);
  const [response, setResponse] = useState(null);

  // const [token, setToken] = useState(null);
  // const [traceId, setTraceId] = useState(null);
  // console.log(ResultIndex);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // const storedToken = await AsyncStorage.getItem('token');
  //         // setToken(storedToken);
  //         // console.log(storedToken);
  //         // const trace = await AsyncStorage.getItem('trace');
  //         // setTraceId(trace);
  //         // console.log(trace);

  //         const requestBody = {
  //           EndUserIp: '116.206.156.58',
  //           TokenId: 'b8a66507-43e0-4010-aef4-72dd2f8af608',
  //           TraceId: '317bdb64-532a-40c8-9880-aab7ff89c70f',
  //           ResultIndex: '0B11',
  //         };
  //         console.log(requestBody);
  //         axios
  //           .post(
  //             'https://api.travvolt.com/travvolt/flight/farequote',
  //             requestBody,
  //           )
  //           .then(res => {
  //             const response = res?.data.data.Response.Results;
  //             const response2 = response?.Segments;
  //             setResponseData(response2);
  //             console.log(response2);
  //           })
  //           .catch(error => console.log(error));
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  useEffect(() => {
    const requestBody = {
      EndUserIp: '103.154.247.218',
      TokenId: '93e860e8-c8d0-47f5-86a1-0b5fd1f02b94',
      TraceId: '657acb13-cbef-4383-a357-7e5a2a85f313',
      ResultIndex: 'OB10',
    };
    axios
      .post('https://api.travvolt.com/travvolt/flight/farequote', requestBody)
      .then(res => {
        const response = res?.data.data.Response.Results;
        setResponse(response);
        const response2 = response?.Segments;
        setResponseData(response2);
        console.log(response2);
      })
      .catch(error => console.log(error));
  }, []);

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

            {/* container */}

            <View
              elevation={10}
              style={{
                height: 273,
                // width:327,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 18,
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              {/* categories heading */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 14,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  {response?.AirlineRemark}
                </Text>
                <Text
                  style={{color: '#FF951A', fontWeight: '500', fontSize: 16}}>
                  ₹ {response?.Fare?.PublishedFare}
                </Text>
              </View>
              {/* cabin bag */}
              {responseData?.map(data1 => {
                return data1?.map(data2 => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        elevation={5}
                        style={{
                          flexDirection: 'row',
                          height: 26,
                          width: 140,
                          backgroundColor: '#DAF2FC',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          borderRadius: 20,
                          margin: 10,
                        }}>
                        <Image
                          source={require('../../../assets/logo/airplane.png')}
                          style={{
                            width: 16,
                            height: 11,
                            marginLeft: 5,
                          }}
                        />
                        <Text style={{fontSize: 11, fontWeight: '500'}}>
                          Cabin Bags
                        </Text>
                        <Text
                          style={{
                            fontSize: 11,
                            fontWeight: '500',
                            color: '#005CFF',
                          }}>
                          {data2?.CabinBaggage}
                        </Text>
                      </View>
                      <View
                        elevation={5}
                        style={{
                          flexDirection: 'row',
                          height: 26,
                          width: 139,
                          backgroundColor: '#DAF2FC',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          borderRadius: 20,
                          margin: 10,
                        }}>
                        <Image
                          source={require('../../../assets/logo/airplane.png')}
                          style={{
                            width: 16,
                            height: 11,
                          }}
                        />
                        <Text style={{fontSize: 11, fontWeight: '500'}}>
                          Check-In Bags
                        </Text>
                        <Text
                          style={{
                            fontSize: 11,
                            fontWeight: '500',
                            color: '#005CFF',
                          }}>
                          {data2?.Baggage}
                        </Text>
                      </View>
                    </View>
                  );
                });
              })}

              {/* cancellation */}
              {response?.MiniFareRules?.map(data1 => {
                return data1?.map((data2, key) => {
                  return (
                    <>
                      {key == 3 ? (
                        <View
                          key={key}
                          elevation={5}
                          style={{
                            flexDirection: 'row',
                            height: 26,
                            width: 280,
                            backgroundColor: '#DAF2FC',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            borderRadius: 20,
                            marginLeft: 10,
                          }}>
                          <Image
                            source={require('../../../assets/logo/airplane.png')}
                            style={{
                              width: 16,
                              height: 11,
                              marginLeft: 5,
                            }}
                          />
                          <Text style={{fontSize: 11, fontWeight: '500'}}>
                            Cancellation
                          </Text>

                          <Text
                            style={{
                              fontSize: 11,
                              fontWeight: '500',
                              color: '#005CFF',
                              marginRight: 5,
                            }}>
                            Cancellation Fee Starting {data2?.Details}
                          </Text>
                        </View>
                      ) : null}
                    </>
                  );
                });
              })}

              {/* date change */}

              {response?.MiniFareRules?.map(data1 => {
                return data1?.map((data2, key) => {
                  return (
                    <>
                      {key == 1 ? (
                        <View
                          key={key}
                          elevation={5}
                          style={{
                            flexDirection: 'row',
                            height: 26,
                            width: 288,
                            backgroundColor: '#DAF2FC',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            borderRadius: 20,
                            marginLeft: 10,
                            marginTop: 10,
                          }}>
                          <Image
                            source={require('../../../assets/logo/airplane.png')}
                            style={{
                              width: 16,
                              height: 11,
                              marginLeft: 5,
                            }}
                          />
                          <Text style={{fontSize: 11, fontWeight: '500'}}>
                            Date Change
                          </Text>
                          <Text
                            style={{
                              fontSize: 11,
                              fontWeight: '500',
                              color: '#005CFF',
                              marginRight: 5,
                            }}>
                            Cancellation Fee Starting {data2?.Details}
                          </Text>
                        </View>
                      ) : null}
                    </>
                  );
                });
              })}
              {/* seat */}
              <View
                elevation={5}
                style={{
                  flexDirection: 'row',
                  height: 26,
                  width: 188,
                  backgroundColor: '#DAF2FC',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text style={{fontSize: 11, fontWeight: '500'}}>Seat</Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                  }}>
                  Free Seat Available
                </Text>
              </View>
              {/* meal */}
              <View
                elevation={5}
                style={{
                  flexDirection: 'row',
                  height: 26,
                  width: 216,
                  backgroundColor: '#DAF2FC',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../assets/logo/airplane.png')}
                  style={{
                    width: 16,
                    height: 11,
                    marginLeft: 5,
                  }}
                />
                <Text style={{fontSize: 11, fontWeight: '500'}}>Meal</Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: '#005CFF',
                    marginRight: 5,
                  }}>
                  Get Complimentary Meals
                </Text>
              </View>

              {/* button */}
              <View style={{alignItems: 'center', marginTop: 15}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PassengerFlightDetails')}>
                  <View
                    style={{
                      width: 140,
                      height: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#006FFF',
                      borderRadius: 30,
                    }}>
                    <Text
                      style={{fontSize: 11, color: '#fff', fontWeight: '500'}}>
                      Book Now
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

export default Dummy;

const style = StyleSheet.create({});
