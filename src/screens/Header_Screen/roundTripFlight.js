import React, { useState } from "react";
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
} from "react-native";
import DatePicker from "react-native-neat-date-picker";
import HomeScreen from "../../component/slider";
import { Roboto_100Thin } from "@expo-google-fonts/roboto";
const { width, height } = Dimensions.get("window");

const RoundTripFlight = ({ navigation }) => {
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

  const onConfirm = (date) => {
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
        source={require("../../../assets/image/bg.jpg")}
        style={{ height: height, width: width }}
      >
        <ScrollView>
          {/* header */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Holder")}>
              <Image
                source={require("../../../assets/logo/back.png")}
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
                color: "#fff",
                marginTop: 35,
                marginLeft: 16,
                fontSize: 17,
                fontWeight: "500",
              }}
            >
              Flight Search
            </Text>
          </View>

          {/* for Tabs */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: 284,
                backgroundColor: "#fff",
                height: 29,
                borderRadius: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("OneWayFlight")}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    height: 29,
                    width: 90,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#026BDE",
                      fontWeight: "500",
                    }}
                  >
                    One Way
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  backgroundColor: "#FF951A",
                  height: 29,
                  width: 90,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Round Trip
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("MultiCityFlight")}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    height: 29,
                    width: 90,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#026BDE",
                      fontWeight: "500",
                    }}
                  >
                    Multi-City
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* flight from  */}
          <View
            style={{
              width: "85%",
              marginTop: 15,
              marginLeft: 28,
              marginRight: 28,
              marginBottom: 25,
              height: 66,
              borderRadius: 10,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/logo/tkoff.png")}
              style={{
                width: 25,
                height: 30,
                marginLeft: 0,
              }}
            />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  marginLeft: 9,
                  marginTop: 5,
                  fontWeight: "500",
                }}
              >
                From
              </Text>
              <TextInput
                style={{
                  height: 40,
                  width: 270,
                  backgroundColor: "#fff",
                  fontSize: 16,
                  borderRadius: 10,
                  marginLeft: 9,
                }}
                placeholder="search flight.."
              />
            </View>
          </View>

          {/* flight to  */}
          <View
            style={{
              width: "85%",
              marginLeft: 28,
              marginRight: 28,
              marginTop: -12,
              height: 66,
              borderRadius: 10,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/logo/lf.png")}
              style={{
                width: 25,
                height: 30,
                marginLeft: 0,
              }}
            />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  marginLeft: 9,
                  fontWeight: "500",
                }}
              >
                To
              </Text>
              <TextInput
                style={{
                  height: 40,
                  width: 270,
                  backgroundColor: "#fff",
                  fontSize: 16,
                  borderRadius: 10,
                  marginLeft: 9,
                }}
                placeholder="Destination..."
              />
            </View>
          </View>

          {/* date */}
          <View
            style={{
              flexDirection: "row",
              width: "85%",
              marginLeft: 38,
              marginRight: 28,
              marginTop: 12,
              //  justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: 153,
                height: 66,
                marginLeft: -10,
                borderRadius: 10,
                backgroundColor: "#fff",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../../../assets/logo/clndr.png")}
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
                    flexDirection: "column",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 9,
                      color: "#4A4747",
                      fontWeight: "500",
                    }}
                  >
                    Date
                  </Text>

                  <Text
                    style={{
                      marginLeft: 9,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    {selectedDat}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 153,
                height: 66,
                marginLeft: 25,
                borderRadius: 10,
                backgroundColor: "#fff",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../../../assets/logo/clndr.png")}
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
                    flexDirection: "column",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 9,
                      color: "#4A4747",
                      fontWeight: "500",
                    }}
                  >
                    Return Date
                  </Text>

                  <Text
                    style={{
                      marginLeft: 9,
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    {selectedDat}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity>
              <View
                style={{
                  width: 153,
                  marginLeft: 25,
                  height: 66,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 20,
                  }}
                >
                  <Text
                    style={{
                      marginLeft: -15,
                      color: "#2D70FF",
                      fontWeight: "500",
                    }}
                  >
                    +Add Return Date
                  </Text>

                  <Text
                    style={{
                      marginLeft: -15,
                      color: "#707070",
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    Save more on Round trip
                  </Text>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>

          {/* travellers & class  */}
          <View
            style={{
              width: "85%",
              marginLeft: 28,
              marginRight: 28,
              marginTop: 15,
              height: 51,
              borderRadius: 10,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/logo/guest.png")}
              style={{
                width: 25,
                height: 20,
                marginLeft: 0,
              }}
            />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  marginLeft: 9,
                  color: "#4A4747",
                  fontWeight: "500",
                }}
              >
                Travellers & Class
              </Text>
              <TextInput
                style={{
                  height: 30,
                  width: 270,
                  backgroundColor: "#fff",
                  fontSize: 15,
                  borderRadius: 10,
                  marginLeft: 9,
                }}
                placeholder="adults.."
              />
            </View>
          </View>

          {/* Special option */}
          <View
            style={{
              flexDirection: "column",
              height: 70,
              marginTop: 16,
            }}
          >
            <Text
              style={{
                color: "#4A4747",
                fontSize: 15,
                fontWeight: "600",
                marginLeft: 28,
              }}
            >
              Special option
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    height: 32,
                    marginTop: 10,
                    marginLeft: 12,
                    width: 140,
                    backgroundColor: "#FF951A",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#fff",
                      fontWeight: "500",
                    }}
                  >
                    Regular Fare
                  </Text>
                </View>
                <View
                  style={{
                    height: 32,
                    marginTop: 10,
                    marginLeft: 12,
                    width: 140,
                    backgroundColor: "#FF951A",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#fff",
                      fontWeight: "500",
                    }}
                  >
                    Armed Forces Fare
                  </Text>
                </View>
                <View
                  style={{
                    height: 32,
                    marginTop: 10,
                    marginLeft: 12,
                    width: 140,
                    backgroundColor: "#FF951A",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#fff",
                      fontWeight: "500",
                    }}
                  >
                    BreakFast Includes
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* button */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  height: 40,
                  width: 284,
                  backgroundColor: "#006FFF",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Search Flight
                </Text>
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
            }}
          >
            <HomeScreen />
          </View>

          {/* FIND YOUR WONDERLAND */}
          <View>
            <Text
              style={{
                fontSize: 18,
                marginTop: 15,
                fontWeight: "700",
                marginLeft: 100,
                color: "#026BDE",
              }}
            >
              Find Your WonderLand
            </Text>
            <View
              style={{
                flexDirection: "row",
                height: 228,
                width: width,
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: -30,
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../../assets/image/df.png")}
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
                      fontWeight: "500",
                    }}
                  >
                    Bali
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 10,
                    marginRight: 10,
                  }}
                >
                  <Image
                    source={require("../../../assets/image/dfd.png")}
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
                      fontWeight: "500",
                    }}
                  >
                    Bali
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../../assets/image/df.png")}
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
                      fontWeight: "500",
                    }}
                  >
                    Bali
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <DatePicker
            isVisible={showDatePicker}
            mode={"single"}
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C7E5F0",
    height: height,
    width: width,
  },
});
export default RoundTripFlight;
