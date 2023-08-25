/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';

import Header from '../../component/header';
import RazorpayCheckout from 'react-native-razorpay';
const {width, height} = Dimensions.get('window');

const ReviewBooking = function ({navigation, route}) {
  const payLoad = route.params.payLoad;
  const roomPrice = route.params.roomPrices;
  console.log(roomPrice);
  console.log('roomPrice Review Booking');

  const HotelName = route.params.HotelName;
  const Address = route.params.Address;
  const StarRating = route.params.StarRating;
  const HotelFacilities = route.params.HotelFacilities;
  const [donate, setDonate] = React.useState(false);
  const [genderOptions, setGenderOptions] = React.useState(false);
  const [dotRadio, setDotRadio] = React.useState(false);

  const [selectGender, setSelectGender] = React.useState('Mr');
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('Second Name');
  const [email, setEmail] = React.useState('Enter Your Email');
  const [phoneNumber, setPhoneNumber] = React.useState(9999999999);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://api.travvolt.com/travvolt/hotel/blockroom',
          data: payLoad,
          config: {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [payLoad]);

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: '#ffff',
      }}>
      <Header
        onPress={() => navigation.goBack()}
        headerLabel={'Review Booking'}
      />

      <View style={{height: '95%', width: width}}>
        <ScrollView
          style={{
            height: '100%',
            flex: 1,
          }}>
          <View>
            <View style={styles.coverPicBox}>
              <Image
                style={styles.coverPic}
                source={require('../../../assets/image/sld3.png')}
              />
            </View>
            <View style={styles.textBox}>
              <Text style={{fontSize: 24, fontWeight: '800', color: '#000000'}}>
                {HotelName ? HotelName : 'HotelNam...'}
              </Text>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>
                Rating {StarRating ? StarRating : '3'}/5
              </Text>
              <View style={{width: '60%'}}>
                <Text
                  numberOfLines={2}
                  style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>
                  {Address}
                </Text>
              </View>
            </View>
            <View>
              <View
                elevation={7}
                style={{
                  margin: 10,
                  borderRadius: 6,
                  padding: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                }}>
                <View>
                  <Text
                    style={{fontSize: 15, color: '#666666', fontWeight: '600'}}>
                    Check-in:12pm
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#252525', fontWeight: '700'}}>
                    18 Jan,2023
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#666666', fontWeight: '600'}}>
                    Wednesday
                  </Text>
                </View>
                <View
                  elevation={5}
                  style={{
                    width: 70,
                    margin: 6,
                    borderRadius: 20,
                    padding: 6,
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: '#006fff'}}>
                    1 Night
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text
                    style={{fontSize: 15, color: '#666666', fontWeight: '600'}}>
                    Check-out:12pm
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#252525', fontWeight: '700'}}>
                    18 Jan,2023
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#666666', fontWeight: '600'}}>
                    Thursday
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                elevation={7}
                style={{
                  margin: 10,
                  borderRadius: 6,
                  padding: 6,
                  backgroundColor: '#ffff',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#666666',
                  }}>
                  Guest & Rooms
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#252525',
                  }}>
                  2 Adult | 1 Room
                </Text>
              </View>
            </View>
            <View>
              <View style={{marginTop: 8, margin: 10, padding: 6}}>
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#252525'}}>
                  Executive Room free wifi- Welcome Drink
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#252525',
                  }}>
                  HotelFacilities
                </Text>
                <View
                  style={{marginLeft: 10, marginTop: 0, margin: 8, padding: 6}}>
                  {HotelFacilities ? (
                    HotelFacilities.map((val, index) => {
                      return (
                        <Text
                          key={index}
                          style={{
                            fontSize: 15,
                            fontWeight: '600',
                            color: '#252525',
                            padding: 4,
                          }}>
                          {`\u25CF ${val}`}
                        </Text>
                      );
                    })
                  ) : (
                    <Text>Data is Loading</Text>
                  )}
                </View>
              </View>
            </View>
            {/* <View>
              <View
                elevation={7}
                style={{
                  borderRadius: 8,
                  marginTop: 8,
                  margin: 10,
                  padding: 6,
                  backgroundColor: '#ffff',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#ff9010',
                  }}>
                  Important information
                </Text>
                <View
                  style={{marginLeft: 10, margin: 8, marginTop: 0, padding: 6}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#666666',
                    }}>{`\u25CF ${'Room Only'}`}</Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#666666',
                    }}>{`\u25CF ${'Room Only'}`}</Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#666666',
                    }}>{`\u25CF ${'Room Only'}`}</Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#666666',
                    }}>{`\u25CF ${'Room Only'}`}</Text>
                </View>
              </View>
            </View> */}
            <View>
              <View
                elevation={7}
                style={{
                  borderRadius: 8,
                  marginTop: 8,
                  margin: 10,
                  padding: 6,
                  backgroundColor: '#ffff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '600',
                        color: '#404040',
                      }}>
                      1 Room × 1 Night
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: '#000000',
                      }}>
                      Base Price
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: '#404040',
                    }}>
                    ₹{roomPrice.RoomPrice}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#ff8900',
                    }}>
                    Total Discount
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#ff8900',
                    }}>
                    -₹{roomPrice.Discount}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#006fff',
                    }}>
                    Price after discount
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#006fff',
                    }}>
                    ₹{roomPrice.RoomPrice - roomPrice.Discount}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#000000',
                    }}>
                    Taxes & serVice Fees
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#000000',
                    }}>
                    ₹
                    {roomPrice.RoomPrice -
                      roomPrice.Discount +
                      roomPrice.GST.TaxableAmount}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      padding: 4,
                      width: '70%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 20,
                        marginHorizontal: 4,
                        height: 20,
                        padding: 2,
                        borderWidth: 2,
                        borderRadius: 4,
                        borderColor: '#979797',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => setDonate(donate ? false : true)}
                        style={
                          donate
                            ? {
                                width: '80%',
                                height: '80%',
                                backgroundColor: '#979797',
                              }
                            : {
                                width: '80%',
                                height: '80%',
                                backgroundColor: '#fffff',
                              }
                        }></TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#000000',
                      }}>
                      Donate ₹10 to support responsible tourism initiatives.
                      T&Cs
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#000000',
                    }}>
                    ₹10
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#ff8900',
                    }}>
                    Total Amount to paid
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: '#ff8900',
                    }}>
                    ₹
                    {roomPrice.RoomPrice -
                      roomPrice.Discount +
                      roomPrice.GST.TaxableAmount}
                  </Text>
                </View>
              </View>
            </View>
            {/* <View>
              <View
                elevation={7}
                style={{
                  borderRadius: 8,
                  marginTop: 8,
                  margin: 10,
                  padding: 6,
                  backgroundColor: '#e6fdff',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                      color: '#006fff',
                    }}>
                    Coupon Code
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: 20,
                        marginHorizontal: 4,
                        height: 20,
                        padding: 2,
                        borderWidth: 2,
                        borderRadius: 8,
                        borderColor: '#ff8900',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => setDotRadio(dotRadio ? false : true)}
                        style={
                          dotRadio
                            ? {
                                width: '80%',
                                height: '80%',
                                borderRadius: 8,
                                backgroundColor: '#ff8900',
                              }
                            : {
                                width: '80%',
                                height: '80%',
                                backgroundColor: '#fffff',
                              }
                        }></TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        padding: 2,
                        fontWeight: '700',
                        color: '#ff8900',
                      }}>
                      WELCOMETVT
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginLeft: 26,
                      fontSize: 15,
                      padding: 2,
                      fontWeight: '600',
                      color: '#000000',
                    }}>
                    Congratulations! instant discount of INR 1385 applied
                    exclusively for your 1st hotel booking on Travvolt
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: 20,
                        marginHorizontal: 4,
                        height: 20,
                        padding: 2,
                        borderWidth: 2,
                        borderRadius: 8,
                        borderColor: '#ff8900',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => setDotRadio(dotRadio ? false : true)}
                        style={
                          dotRadio
                            ? {
                                width: '80%',
                                height: '80%',
                                borderRadius: 8,
                                backgroundColor: '#ff8900',
                              }
                            : {
                                width: '80%',
                                height: '80%',
                                backgroundColor: '#fffff',
                              }
                        }></TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        padding: 2,
                        fontWeight: '700',
                        color: '#ff8900',
                      }}>
                      WELCOMETVT
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginLeft: 26,
                      fontSize: 15,
                      padding: 2,
                      fontWeight: '600',
                      color: '#000000',
                    }}>
                    Congratulations! instant discount of INR 1385 applied
                    exclusively for your 1st hotel booking on Travvolt
                  </Text>
                </View>
              </View>
            </View> */}
            <View>
              <View
                elevation={7}
                style={{
                  borderRadius: 8,
                  marginTop: 8,
                  margin: 10,
                  padding: 6,
                  backgroundColor: '#ffff',
                }}>
                <View style={{margin: 6}}>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 2,
                      fontWeight: '700',
                      color: '#000000',
                    }}>
                    I am booking for
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          width: 20,
                          marginHorizontal: 4,
                          height: 20,
                          padding: 2,
                          borderWidth: 2,
                          borderRadius: 8,
                          borderColor: '#666666',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => setDotRadio(dotRadio ? false : true)}
                          style={
                            dotRadio
                              ? {
                                  width: '80%',
                                  height: '80%',
                                  borderRadius: 8,
                                  backgroundColor: '#666666',
                                }
                              : {
                                  width: '80%',
                                  height: '80%',
                                  backgroundColor: '#fffff',
                                }
                          }></TouchableOpacity>
                      </View>
                      <Text
                        style={{
                          fontSize: 16,
                          padding: 2,
                          fontWeight: '700',
                          color: '#666666',
                        }}>
                        Myself
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginLeft: 10,
                      }}>
                      <View
                        style={{
                          width: 20,
                          marginHorizontal: 4,
                          height: 20,
                          padding: 2,
                          borderWidth: 2,
                          borderRadius: 8,
                          borderColor: '#666666',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => setDotRadio(dotRadio ? false : true)}
                          style={
                            dotRadio
                              ? {
                                  width: '80%',
                                  height: '80%',
                                  borderRadius: 8,
                                  backgroundColor: '#666666',
                                }
                              : {
                                  width: '80%',
                                  height: '80%',
                                  backgroundColor: '#fffff',
                                }
                          }></TouchableOpacity>
                      </View>
                      <Text
                        style={{
                          fontSize: 16,
                          padding: 2,
                          fontWeight: '700',
                          color: '#666666',
                        }}>
                        Someone Else
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{padding: 6}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        padding: 2,
                        fontWeight: '700',
                        color: '#000000',
                      }}>
                      Name
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 6,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      elevation={7}
                      style={{
                        margin: 10,
                        borderRadius: 6,
                        padding: 6,
                        backgroundColor: '#ffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => setGenderOptions(true)}
                        style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontWeight: '600',
                            height: 20,
                            margin: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          {selectGender}
                        </Text>
                        <View style={{width: 20, height: 20}}>
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={require('../../../assets/icon/down-arrow.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      elevation={7}
                      style={{
                        // width: '15%',
                        margin: 10,
                        borderRadius: 6,
                        padding: 6,
                        backgroundColor: '#ffff',
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        maxLength={10}
                        value={firstName}
                        style={{
                          width: 90,
                          fontWeight: '600',
                          height: 20,
                          padding: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        placeholder="F Name"
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </View>
                    <View
                      elevation={7}
                      style={{
                        // width: '15%',
                        margin: 10,
                        borderRadius: 6,
                        padding: 6,
                        backgroundColor: '#ffff',
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        maxLength={10}
                        value={secondName}
                        style={{
                          width: 90,
                          fontWeight: '600',
                          height: 20,
                          padding: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        placeholder="S Name"
                        onChange={e => setSecondName(e.target.value)}
                      />
                    </View>
                  </View>
                </View>
                <View style={{padding: 6, zIndex: 0}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        padding: 2,
                        fontWeight: '700',
                        color: '#000000',
                      }}>
                      Email
                    </Text>
                  </View>
                  <View
                    elevation={7}
                    style={{
                      margin: 10,
                      borderRadius: 6,
                      padding: 6,
                      backgroundColor: '#ffff',
                      justifyContent: 'center',
                    }}>
                    <TextInput
                      maxLength={20}
                      value={email}
                      style={{
                        fontWeight: '600',
                        height: 20,
                        padding: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      placeholder="Enter Your Email"
                      onChange={e => setEmail(e.target.value)}
                    />
                  </View>
                </View>
                <View style={{padding: 6}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        padding: 2,
                        fontWeight: '700',
                        color: '#000000',
                      }}>
                      Mobile No.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      elevation={7}
                      style={{
                        width: '15%',
                        margin: 10,
                        borderRadius: 6,
                        padding: 6,
                        backgroundColor: '#ffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text>+91</Text>
                      <View style={{width: 20, height: 20, padding: 1}}>
                        <Image
                          style={{width: '100%', height: '100%'}}
                          source={require('../../../assets/icon/down-arrow.png')}
                        />
                      </View>
                    </View>
                    <View
                      elevation={7}
                      style={{
                        width: '73%',
                        margin: 10,
                        borderRadius: 6,
                        padding: 6,
                        backgroundColor: '#ffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <TextInput
                        value={phoneNumber}
                        style={{
                          height: 20,
                          fontWeight: '500',
                          padding: 2,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="Eg 9999999999"
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      padding: 4,
                      width: '70%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 20,
                        marginHorizontal: 4,
                        height: 20,
                        padding: 2,
                        borderWidth: 2,
                        borderRadius: 4,
                        borderColor: '#979797',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => setDonate(donate ? false : true)}
                        style={
                          donate
                            ? {
                                width: '80%',
                                height: '80%',
                                backgroundColor: '#979797',
                              }
                            : {
                                width: '80%',
                                height: '80%',
                                backgroundColor: '#fffff',
                              }
                        }></TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#666666',
                      }}>
                      I have a GST number
                    </Text>
                  </View>
                </View>
              </View>
              {genderOptions ? (
                <View
                  elevation={5}
                  style={{
                    position: 'absolute',
                    top: 118,
                    left: 15,
                    width: 70,
                    margin: 6,
                    borderRadius: 6,
                    padding: 6,
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    zIndex: 1,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setGenderOptions(!genderOptions);
                      setSelectGender('Mr');
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '666666',
                      width: '100%',
                    }}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>Mr</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setGenderOptions(!genderOptions);
                      setSelectGender('Ms');
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '666666',
                      width: '100%',
                    }}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>Ms</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setGenderOptions(!genderOptions);
                      setSelectGender('Mx');
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>Mx</Text>
                  </TouchableOpacity>
                </View>
              ) : null}

              <View>
                <View style={{paddingTop: 8, padding: 15}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        padding: 2,
                        fontWeight: '700',
                        color: '#000000',
                      }}>
                      Make a Special Request
                    </Text>
                  </View>
                  <View
                    elevation={7}
                    style={{
                      marginLeft: 4,
                      margin: 10,
                      borderRadius: 6,
                      padding: 6,
                      backgroundColor: '#ffff',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <TextInput
                      style={{
                        height: 40,
                        fontWeight: '500',
                        padding: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      placeholder="Enter Special request"
                    />
                  </View>
                </View>
              </View>
              {/* <View>
                <View
                  elevation={7}
                  style={{
                    borderRadius: 8,
                    marginTop: 8,
                    margin: 10,
                    padding: 6,
                    backgroundColor: '#ffff',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                      color: '#252525',
                    }}>
                    Travel Safe with Trip insurance
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      fontWeight: '700',
                      color: '#006fff',
                    }}>
                    Worry-Free Hotel Stay!
                  </Text>
                  <View
                    style={{
                      marginLeft: 10,
                      margin: 8,
                      marginBottom: 0,
                      marginTop: 0,
                      padding: 6,
                    }}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: '#666666',
                      }}>{`\u25CF ${'Room Only'}`}</Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: '#666666',
                      }}>{`\u25CF ${'Room Only'}`}</Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: '#666666',
                      }}>{`\u25CF ${'Room Only'}`}</Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: '#666666',
                      }}>{`\u25CF ${'Room Only'}`}</Text>
                  </View>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 18,
                      fontWeight: '700',
                      color: '#006fff',
                    }}>
                    View Benefits
                  </Text>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 24,
                            fontWeight: '700',
                            color: '#006fff',
                          }}>
                          ₹64
                        </Text>
                        <Text
                          style={{
                            marginTop: 7,
                            marginLeft: 6,
                            fontSize: 15,
                            fontWeight: '700',
                            color: '#666666',
                          }}>
                          per Person
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            marginLeft: 10,
                            fontSize: 15,
                            fontWeight: '700',
                            color: '#666666',
                          }}>
                          Non Refundable | 18% GST Include
                        </Text>
                      </View>
                    </View>
                    <View>
                      <View
                        elevation={5}
                        style={{
                          width: 70,
                          margin: 6,
                          borderRadius: 20,
                          padding: 6,
                          justifyContent: 'center',
                          backgroundColor: '#fff',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: '#006fff',
                          }}>
                          Add
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View> */}
              <View style={{padding: 4}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000000',
                  }}>
                  By processing,I agree to travvolt's User Agreement, Terms of
                  service and cancellation & property booking policies
                </Text>
                <View
                  style={{
                    margin: 8,
                    padding: 6,
                    backgroundColor: '#006fff',
                    marginBottom: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <TouchableOpacity
                    onPress={async () => {
                      console.log('asmdlasmdlasmdlakms');

                      const checkUser = await AsyncStorage.getItem('user');
                      if (!checkUser) {
                        console.log('asmdlasmdlasmdlakms');
                        // navigation.navigate('SignIn');
                      } else {
                        var options = {
                          description: 'Credits towards consultation',
                          image: 'https://i.imgur.com/3g7nmJC.jpg',
                          currency: 'INR',
                          key: 'rzp_test_czVP739sBN5blU',
                          amount: '5000',
                          name: 'Acme Corp',
                          order_id: 'order_DslnoIgkIDL8Zt',
                          prefill: {
                            email: email,
                            contact: phoneNumber,
                            name: `${firstName} ${secondName}`,
                          },
                          theme: {color: '#53a20e'},
                        };
                        RazorpayCheckout.open(options)
                          .then(data => {
                            alert(`Success: ${data.razorpay_payment_id}`);
                          })
                          .catch(error => {
                            alert(
                              `Error: ${error.code} | ${error.description}`,
                            );
                          });
                      }
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: '800',
                        color: '#ffffff',
                      }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPicBox: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    marginTop: 4,
  },
  coverPic: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
  },
  textBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: 8,
  },
});
export default ReviewBooking;
