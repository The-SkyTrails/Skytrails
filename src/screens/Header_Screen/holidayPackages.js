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
  TextInput,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import DatePicker from 'react-native-neat-date-picker';

const HolidayPackages = ({navigation}) => {
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
              Holiday Packages
            </Text>
          </View>

          {/* Tabs */}
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
              // onPress={() => navigation.navigate("HotelInternational")}
              >
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

          {/* from */}
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
                Starting From
              </Text>
              <TextInput
                style={{
                  height: 46,
                  width: 270,
                  backgroundColor: '#fff',
                  fontSize: 16,
                  borderRadius: 10,
                  marginLeft: 9,
                }}
                placeholder="search city.."
              />
            </View>
          </View>

          {/* To */}
          <View
            style={{
              width: '85%',
              marginTop: -10,
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
                Travelling To
              </Text>
              <TextInput
                style={{
                  height: 46,
                  width: 270,
                  backgroundColor: '#fff',
                  fontSize: 16,
                  borderRadius: 10,
                  marginLeft: 9,
                }}
                placeholder="Destination...."
              />
            </View>
          </View>

          {/* Date */}
          <View
            style={{
              flexDirection: 'row',
              // width: "85%",
              marginLeft: 38,
              marginRight: 28,
              marginTop: -10,
            }}>
            <View
              style={{
                width: 150,
                height: 66,
                marginLeft: -10,
                borderRadius: 10,
                backgroundColor: '#fff',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/logo/clndr.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 15,
                  marginTop: 20,
                }}
              />

              <TouchableOpacity onPress={openDatePicker}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 10,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      marginLeft: 9,
                      color: '#4A4747',
                      fontWeight: '500',
                    }}>
                    Date
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

            <View
              style={{
                width: 150,
                marginTop: 0,
                marginLeft: 10,
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
                  width: 20,
                  height: 24,
                  marginLeft: 5,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 5,
                    color: '#4A4747',
                    fontWeight: '500',
                  }}>
                  Room & Guests
                </Text>
                <TextInput
                  style={{
                    height: 36,
                    width: 80,
                    backgroundColor: '#fff',
                    fontSize: 16,
                    borderRadius: 10,
                    marginLeft: 9,
                  }}
                  placeholder="adults"
                />
              </View>
            </View>
          </View>

          {/* choose filter */}
          <View
            style={{
              flexDirection: 'column',
              height: 70,
              marginTop: 0,
            }}>
            <Text
              style={{
                color: '#4A4747',
                fontSize: 15,
                fontWeight: '600',
                marginLeft: 28,
              }}>
              Choose Filter (Optional)
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 32,
                      marginTop: 10,
                      marginLeft: 12,
                      width: 140,
                      borderColor: '#8D8985',
                      borderWidth: 1.8,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        //  color: "#8D8985",
                        fontWeight: '400',
                      }}>
                      Budget Per Person
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 32,
                      marginTop: 10,
                      marginLeft: 12,
                      width: 140,
                      borderColor: '#8D8985',
                      borderWidth: 1.8,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        //  color: "#8D8985",
                        fontWeight: '400',
                      }}>
                      Duration
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 32,
                      marginTop: 10,
                      marginLeft: 12,
                      width: 140,
                      borderColor: '#8D8985',
                      borderWidth: 1.8,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        //  color: "#8D8985",
                        fontWeight: '400',
                      }}>
                      Hotel choise
                    </Text>
                  </View>
                </TouchableOpacity>
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
            <TouchableOpacity>
              <View
                style={{
                  height: 40,
                  width: 284,
                  backgroundColor: '#006FFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  Search
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/*  offers tab */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 12,
              height: 42,
              width: '100%',
              //backgroundColor: "#ddd",
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {/* Destinantion */}
              <View
                elevation={5}
                style={{
                  height: 34,
                  backgroundColor: '#fff',
                  marginLeft: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: '#ddd',
                  borderWidth: 0.5,
                  shadowColor: '#000000',
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    margin: 3,
                    // marginRight: 8,
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                  Destinantion
                </Text>
              </View>
              {/* Super Deals */}
              <View
                elevation={5}
                style={{
                  height: 34,
                  backgroundColor: '#fff',
                  marginLeft: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: '#ddd',
                  borderWidth: 0.5,
                  shadowColor: '#000000',
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    margin: 3,
                    // marginRight: 8,
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                  Super Deals
                </Text>
              </View>
              {/* Featured */}
              <View
                elevation={5}
                style={{
                  height: 34,
                  backgroundColor: '#fff',
                  marginLeft: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: '#ddd',
                  borderWidth: 0.5,
                  shadowColor: '#000000',
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    margin: 3,
                    // marginRight: 8,
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                  Featured
                </Text>
              </View>
              {/* Travel Guide */}
              <View
                elevation={5}
                style={{
                  height: 34,
                  backgroundColor: '#fff',
                  marginLeft: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: '#ddd',
                  borderWidth: 0.5,
                  shadowColor: '#000000',
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    margin: 3,
                    marginRight: 15,
                    marginLeft: 15,
                  }}>
                  Travel Guide
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* best destination */}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
              }}>
              Best Destination
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 0,
                fontWeight: '500',
                color: '#006FFF',
              }}>
              Best Time to Book your Travel is Now
            </Text>
          </View>

          {/* packages */}

          <View
            style={{
              flexDirection: 'row',
              width: width,
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 10,
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
                    height: 103,
                    width: 119,
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
                    height: 103,
                    width: 119,
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
                    height: 103,
                    width: 119,
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

          {/* International Destination */}
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 20,
              marginTop: 15,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
              }}>
              International Destination
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 0,
                fontWeight: '500',
                color: '#FF951A',
              }}>
              Now Travel The World Without any Hassle
            </Text>
          </View>

          {/* fetching packages */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                height: 250,
                // backgroundColor: "#fff",
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

          {/* HoliDay By Theme*/}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              marginTop: 10,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
              }}>
              HoliDay By Theme
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 0,
                fontWeight: '500',
                color: '#FF951A',
              }}>
              Pick From Our Special Curated Packages
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                height: 250,
                //  backgroundColor: "#fff",
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

          <DatePicker
            isVisible={showDatePicker}
            mode={'single'}
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default HolidayPackages;

const style = StyleSheet.create({});
