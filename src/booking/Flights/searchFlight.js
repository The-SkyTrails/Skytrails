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

const SearchFlights = ({navigation, route}) => {
  const data = route?.params?.data;

  const tabData = data.map(innerArray => {
    return innerArray.map(index => {
      const jsonData = {};

      const ResultIndex = index.id || index?.ResultIndex;

      //    console.log(ResultIndex);

      return (
        <TouchableOpacity
          key={ResultIndex}
          onPress={() =>
            navigation.navigate('SelectedFlightDetails', {
              ResultIndex: ResultIndex,
              item: index,
            })
          }>
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
              {index?.Segments.map(airline => {
                return airline.map((name, id) => {
                  {
                    {
                      /* const imagePath = `${RNFS.MainBundlePath}/assets/FlightImages/${name.Airline.AirlineCode}.png`; */
                    }
                    // console.log(`${name.Airline.AirlineCode}.png`);
                    return (
                      <View key={id} style={{flexDirection: 'row'}}>
                        {/* <Image
                          // source={{uri: imagePath}}
                          style={{
                            width: 15,
                            height: 15,
                            marginLeft: 15,
                            // marginTop: 10,
                          }}
                        /> */}
                        <Text
                          style={{
                            marginLeft: 5,
                            fontSize: 12,
                            fontWeight: '500',
                          }}>
                          {name?.Airline?.AirlineName}
                        </Text>
                      </View>
                    );
                  }
                });
              })}
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
              {index?.Segments.map(airline => {
                return airline.map((name, id) => {
                  {
                    const date = new Date(name?.Origin?.DepTime);
                    const time = date.toTimeString().slice(0, 5);
                    return (
                      <View
                        key={id}
                        style={{
                          flexDirection: 'column',
                        }}>
                        <Text>{name?.Origin?.Airport?.AirportCode}</Text>
                        <Text>{time}</Text>
                      </View>
                    );
                  }
                });
              })}

              {/* duration */}

              {index?.Segments.map(airline => {
                return airline.map((name, id) => {
                  {
                    const minutes = name.Duration;
                    const hours = Math.floor(minutes / 60);
                    const remainingMinutes = minutes % 60;
                    return (
                      <View
                        key={id}
                        style={{
                          flexDirection: 'column',
                        }}>
                        <Text>
                          {hours}h {remainingMinutes}m
                        </Text>
                        <Text
                          style={{
                            color: '#FF8900',
                            fontWeight: '500',
                          }}>
                          N-s/D
                        </Text>
                      </View>
                    );
                  }
                });
              })}

              {/* destination name & time */}
              {index?.Segments.map(airline => {
                return airline.map((name, id) => {
                  {
                    const date = new Date(name?.Destination?.ArrTime);
                    const time = date.toTimeString().slice(0, 5);

                    //  console.log("time", time);
                    return (
                      <View
                        key={id}
                        style={{
                          flexDirection: 'column',
                        }}>
                        <Text>{name?.Destination?.Airport?.AirportCode}</Text>
                        <Text>{time}</Text>
                      </View>
                    );
                  }
                });
              })}

              {/* price */}
              <Text
                style={{
                  color: '#2D70FF',
                  fontWeight: '600',
                }}>
                ₹ {index?.Fare?.BaseFare}
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
      );
    });
  });

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
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              height: 29,
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                height: 26,
                width: '40%',
                backgroundColor: '#FF951A',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                //  marginLeft: 10,
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  color: '#fff',
                }}>
                Non Stop
              </Text>
            </View>

            <View
              style={{
                height: 26,
                width: '40%',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -50,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  color: '#026BDE',
                }}>
                Non Stop
              </Text>
            </View>
          </View>

          {/* flight details */}

          {tabData}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

//onPress={() => navigation.navigate("SelectedFlightDetails")}
//  data={jsonData}

export default SearchFlights;

const style = StyleSheet.create({});
