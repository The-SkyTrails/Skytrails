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
} from 'react-native';
import {useSelector} from 'react-redux';
const {width, height} = Dimensions.get('window');
import RNFS from 'react-native-fs';

const BusDetails = ({navigation, route}) => {
  <TouchableOpacity>
    <View
      //  key={itemNo}
      elevation={7}
      style={{
        height: 95,
        // width: 351,
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
      }}>
      {/* for img and name of flight */}
      <View
        style={{
          flexDirection: 'row',
          height: 16,
          marginTop: 10,
          //  backgroundColor: "#ddd",
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 12,
              fontWeight: '500',
            }}>
            name?.Airline?.AirlineName
          </Text>
        </View>
      </View>

      {/* for flight details */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 6,
          //backgroundColor: "#ddd",
          justifyContent: 'space-around',
        }}>
        {/* origin name & time  */}
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text>name?.Origin?.Airport?.AirportCode</Text>
          <Text>time</Text>
        </View>
        {/* duration */}
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text>hourse</Text>
          <Text
            style={{
              color: '#FF8900',
              fontWeight: '500',
            }}>
            N-s/D
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text>"name?.Destination?.Airport?.AirportCode"</Text>
          <Text>time</Text>
        </View>
        {/* price */}
        <Text
          style={{
            color: '#2D70FF',
            fontWeight: '600',
          }}>
          ₹
        </Text>
      </View>

      {/* for coupon  */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          elevation={3}
          style={{
            height: 15,
            marginTop: 3,
            width: 271,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '500',
              color: '#2D70FF',
            }}>
            Use <Text style={{color: '#FF8900'}}>TRAVV23</Text> and get Flat RS.
            445 instant discount on this flight
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>;
  //     );
  //   });
  // });

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
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OneWayFlight')}>
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

            <TouchableOpacity
            //   onPress={() => navigation.navigate("SelectedFlightDetails")}
            >
              <Text
                style={{
                  color: '#fff',
                  marginTop: 35,
                  marginLeft: 16,
                  fontSize: 17,
                  fontWeight: '500',
                }}>
                from - to
              </Text>
            </TouchableOpacity>
          </View>
          {/* tabs */}
          <TouchableOpacity>
            <View
              //  key={itemNo}
              elevation={7}
              style={{
                height: 95,
                // width: 351,
                marginLeft: 15,
                marginTop: 15,
                marginRight: 15,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              {/* for img and name of flight */}
              <View
                style={{
                  flexDirection: 'row',
                  height: 16,
                  marginTop: 10,
                  //  backgroundColor: "#ddd",
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginLeft: 5,
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    AirlineName
                  </Text>
                </View>
              </View>

              {/* for flight details */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 6,
                  //backgroundColor: "#ddd",
                  justifyContent: 'space-around',
                }}>
                {/* origin name & time  */}
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text>AirportCode</Text>
                  <Text>time</Text>
                </View>
                {/* duration */}
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text>hourse</Text>
                  <Text
                    style={{
                      color: '#FF8900',
                      fontWeight: '500',
                    }}>
                    N-s/D
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text>AirportCode</Text>
                  <Text>time</Text>
                </View>
                {/* price */}
                <Text
                  style={{
                    color: '#2D70FF',
                    fontWeight: '600',
                  }}>
                  ₹
                </Text>
              </View>

              {/* for coupon  */}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  elevation={3}
                  style={{
                    height: 15,
                    marginTop: 3,
                    width: 271,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '500',
                      color: '#2D70FF',
                    }}>
                    Use <Text style={{color: '#FF8900'}}>TRAVV23</Text> and get
                    Flat RS. 445 instant discount on this flight
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default BusDetails;

const style = StyleSheet.create({});
