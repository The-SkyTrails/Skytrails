import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    ImageBackground,
    ToastAndroid,
    ScrollView
} from 'react-native';
import { Text } from 'react-native-paper';
const { width, height } = Dimensions.get('window');
const TripMoney = ({ navigation }) => {
    return (
        <View
            style={{
                height: height,
                width: width,
            }}>
            <ImageBackground
                source={require('../../../assets/image/bg.jpg')}
                style={{ height: height, width: width }}>
                <View>
                    <View style={{ marginTop: 30, justifyContent: "center", alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 18,

                                alignContent: 'center',
                                color: "white"
                            }}>
                            Trip Money
                        </Text>
                    </View>
                    <View style={{ backgroundColor: "#103060", borderTopRightRadius: 10, borderTopLeftRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderRightWidth: 1, marginHorizontal: 20, alignItems: "center", padding: 5, borderColor: 'skyblue' }}>
                                <Text style={{ color: "white", fontSize: 20 }}>  Rs. 10 lakh +</Text>
                                <Text style={{ color: "#C57D2B" }}>Travel Credit Lines Given     </Text>
                            </View>
                            <View style={{ padding: 5 }}>
                                <Text style={{ color: "white", fontSize: 20 }}>1 Lakhs +</Text>
                                <Text style={{ color: "#C57D2B" }}>Customers Insured</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>

                            <View style={{ flexDirection: 'row', alignItems: "center", width: 120, }}>
                                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                                    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 5, height: 90, alignItems: "center", width: 110 }}>
                                        <Text style={{ fontSize: 12, color: "skyblue" }}>Travel Credit Lane</Text>
                                        <Image source={require('../../../assets/logo/mtac.png')} style={{ height: 50, width: 50, marginTop: 5 }} />
                                    </View>

                                    <Text style={{ color: "white" }}>Upto Rs. 1 Lakh Lifetime Limit</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: "center", width: 120, }}>
                                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                                    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 5, height: 90, alignItems: "center", width: 110 }}>
                                        <Text style={{ fontSize: 12, color: "skyblue" }}>Free Forex Card </Text>
                                        <Image source={require('../../../assets/logo/visa.png')} style={{ height: 50, width: 50, marginTop: 5 }} />
                                    </View>

                                    <Text style={{ color: "white" }}>0% forex </Text>
                                    <Text style={{ color: "white" }}>mark-up</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: "center", width: 120, height: '100%' }}>
                                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                                    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 5, height: 90, alignItems: "center", width: 110 }}>
                                        <Text style={{ fontSize: 12, color: "skyblue" }}>Travel Credit Lane</Text>
                                        <Image source={require('../../../assets/logo/fstatus.png')} style={{ height: 50, width: 50, marginTop: 5 }} />
                                    </View>

                                    <Text style={{ color: "white" }}>Starting at    </Text>
                                    <Text style={{ color: "white" }}>Rs 33/day   </Text>
                                </View>

                            </View>
                        </View>

                        <View style={{ alignItems: "center", marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: "center", width: 120, }}>
                                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                                    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 5, height: 90, alignItems: "center", width: 110 }}>
                                        <Text style={{ fontSize: 12, color: "skyblue" }}>Pay Later</Text>
                                        <Image source={require('../../../assets/logo/flight.png')} style={{ height: 50, width: 50, marginTop: 5 }} />
                                    </View>

                                    <Text style={{ color: "white" }}>Book now & pay later</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Text style={{ fontSize: 20, color: "black" }}>Testimonials</Text>
                        <Text style={{ fontSize: 15, color: "#C57D2B" }}>Here is what our customer say about our services</Text>
                    </View>
                    <View>
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
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
};

export default TripMoney;

const style = StyleSheet.create({});
