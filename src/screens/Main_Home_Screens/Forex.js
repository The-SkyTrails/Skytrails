import React from "react";
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
import HomeScreen from "../../component/slider";
const { width, height } = Dimensions.get("window");

const Forex = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/image/bg.jpg")}
        style={{ height: height, width: width }}
      >
        <ScrollView>
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
              Forex
            </Text>
          </View>

          {/* Header */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Our Offerings
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Our Offerings One Stop solution for all your travel requirements
            </Text>
          </View>
          {/* inr card */}
          <TouchableOpacity>
            <View
              elevation={10}
              style={{
                flexDirection: "row",
                height: 125,
                backgroundColor: "#fff",
                margin: 12,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/logo/glcc.png")}
                style={{
                  height: 62,
                  width: 62,
                  marginTop: 19,
                  marginLeft: 0,
                  marginRight: 7,
                  marginBottom: 26,
                }}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#006FFF",
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Global INR Card
                </Text>
                <Text
                  style={{
                    color: "black",
                    marginTop: 5,
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  - No Forex mark-up{"\n"}- Load in INR & Spend in any currency
                  {"\n"}- Pan India Delivery within 10 Days{"\n"}- Fully Digital
                  Order Placement & Card Management
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* forex currency & card */}
          <TouchableOpacity>
            <View
              elevation={10}
              style={{
                flexDirection: "row",
                height: 125,
                backgroundColor: "#fff",
                margin: 12,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/logo/crrnc.png")}
                style={{
                  height: 62,
                  width: 62,
                  marginTop: 19,
                  marginLeft: -100,
                  marginRight: 7,
                  marginBottom: 26,
                }}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#006FFF",
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Forex Currency/Cash
                </Text>
                <Text
                  style={{
                    color: "black",
                    marginTop: 5,
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  -Lowest Exchange Rate in India {"\n"}- Same/ Next Day Delivery
                  {"\n"}- Fully Digital Order Placement {"\n"}- Best in class
                  service
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Forex Travel Card */}
          <TouchableOpacity>
            <View
              elevation={10}
              style={{
                flexDirection: "row",
                height: 125,
                backgroundColor: "#fff",
                margin: 12,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/logo/frocc.png")}
                style={{
                  height: 62,
                  width: 62,
                  marginTop: 19,
                  marginLeft: -40,
                  marginRight: 7,
                  marginBottom: 26,
                }}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#006FFF",
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  Forex Travel Card
                </Text>
                <Text
                  style={{
                    color: "black",
                    marginTop: 5,
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  - 0% Forex Mark-up (IBR Rates Applicable) {"\n"}- Load in 14
                  Currencies {"\n"}- Same/Next Day Delivery {"\n"}- Fully
                  Digital Order Placement
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* International Money Transfer */}
          <TouchableOpacity>
            <View
              elevation={10}
              style={{
                flexDirection: "row",
                height: 125,
                backgroundColor: "#fff",
                margin: 12,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/logo/intrmny.png")}
                style={{
                  height: 62,
                  width: 62,
                  marginTop: 19,
                  marginLeft: -60,
                  marginRight: 7,
                  marginBottom: 26,
                }}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#006FFF",
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  International Money Transfer
                </Text>
                <Text
                  style={{
                    color: "black",
                    marginTop: 5,
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  -5 minutes fully digital online process.{"\n"}-Lowest fees and
                  best forex rates. {"\n"}- Receive funds abroad in 12-48 hours.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Testimonial Header */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",

              marginTop: 10,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
              }}
            >
              Testimonial
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 0,
                fontWeight: "500",
                color: "#FF951A",
              }}
            >
              Here is what our customer say about our services
            </Text>
          </View>

          {/* compliment view */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              elevation={10}
              style={{
                height: 187,
                width: 233,
                backgroundColor: "#F5F8FC",
                margin: 20,
                borderRadius: 10,
                flexDirection: "column",
              }}
            >
              <Image
                source={require("../../../assets/logo/quot.png")}
                style={{
                  height: 32,
                  width: 32,
                  marginTop: 15,
                  marginLeft: 10,
                  marginRight: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 15,
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                Very Prompt & Proactive. Got a Card delivered for my brother at
                my doorstep the next day morning itself. Wire Transfer services
                work so well in a limited period of time. Extra- ordinary
                Services and Highly Recommendable.
              </Text>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../../assets/logo/mny.png")}
                  style={{
                    height: 24,
                    width: 24,
                    marginTop: 15,
                    marginLeft: 20,
                    marginRight: 7,
                  }}
                />

                <Text
                  style={{
                    color: "#FF951A",
                    marginTop: 15,
                    fontWeight: "500",
                  }}
                >
                  Shivam
                </Text>
              </View>
            </View>
            <View
              elevation={10}
              style={{
                height: 187,
                width: 233,
                backgroundColor: "#F5F8FC",
                margin: 20,
                borderRadius: 10,
                flexDirection: "column",
              }}
            >
              <Image
                source={require("../../../assets/logo/quot.png")}
                style={{
                  height: 32,
                  width: 32,
                  marginTop: 15,
                  marginLeft: 10,
                  marginRight: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 15,
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                Very Prompt & Proactive. Got a Card delivered for my brother at
                my doorstep the next day morning itself. Wire Transfer services
                work so well in a limited period of time. Extra- ordinary
                Services and Highly Recommendable.
              </Text>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../../assets/logo/mny.png")}
                  style={{
                    height: 24,
                    width: 24,
                    marginTop: 15,
                    marginLeft: 20,
                    marginRight: 7,
                  }}
                />

                <Text
                  style={{
                    color: "#FF951A",
                    marginTop: 15,
                    fontWeight: "500",
                  }}
                >
                  Armaan
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* spacing */}
          <View
            style={{
              marginTop: 30,
            }}
          ></View>
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
export default Forex;
