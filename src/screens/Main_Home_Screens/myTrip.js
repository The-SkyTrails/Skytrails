import React, { useState, useEffect } from "react";
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
} from "react-native";
const { width, height } = Dimensions.get("window");
const MyTrip = ({ navigation }) => {
    return (
        <View
            style={{
                height: height,
                width: width,
            }}
        >
            <ImageBackground
                source={require("../../../assets/image/bg.jpg")}
                style={{ height: height, width: width }}
            >

                <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 60,
                            alignContent: "center",
                            color: "white"
                        }}
                    >
                        My trips
                    </Text>
                </View>

                <View style={{ backgroundColor: '#F2F3F4', height: '100%', marginTop: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <View style={{ padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#F5B041", flexGrow: 1, alignItems: "center",
                            justifyContent: "center", height: 40, borderRadius: 10, 
                        }}>
                            <Text style={{ color: "#2E86C1" }}>Upcoming</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            backgroundColor: "blue", marginHorizontal: 10, flexGrow: 1, alignItems: "center",
                            justifyContent: "center", height: 40, borderRadius: 10, backgroundColor: "white"
                        }}>
                            <Text style={{ color: "#2E86C1" }}>Cancelled</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            backgroundColor: "blue", flexGrow: 1, alignItems: "center",
                            justifyContent: "center", height: 40, borderRadius: 10, backgroundColor: "white"
                        }}>
                            <Text style={{ color: "#2E86C1" }}>Complete</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: 60, justifyContent: "center", alignItems: "center", }}>
                        <Image source={require('../../../assets/logo/checkinbag.png')} style={{ height: 100, width: 100 }} />

                        <Text style={{ fontSize: 17 }}>You have no Pending Bookings</Text>
                        <Text style={{ fontSize: 12 }}>Here are some amazing offers to kickstart your trip planning</Text>

                    </View>

                    <View style={{ height: 50, borderBottomWidth: 1, borderColor: "#5DADE2", marginHorizontal: 20 }}></View>

                    <View style={{ marginTop: 40, padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image source={require('../../../assets/logo/ofr.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ marginLeft: 10, color: "#2E86C1", fontSize: 17 }}>Offer For You</Text>
                            <TouchableOpacity style={{ flexGrow: 1, justifyContent: "center", alignItems: 'flex-end' }}>
                                <Text style={{ color: "#2E86C1" }}>View All >></Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ScrollView horizontal>
                                <View>
                                    <View style={{ height: 170, width: 130, backgroundColor: "white" ,alignItems:"center",borderRadius:10,marginTop:10,justifyContent:"center"}}>
                                        <Image source={require('../../../assets/image/df.png')} style={{height:100,width:100,marginTop:10  }} />
                                        <Text style={{fontSize:12}}>More flight book the flight</Text>

                                        <TouchableOpacity style={{backgroundColor:'#2E86C1',width:"70%",alignItems:'center',justifyContent:'center',borderRadius:20}}>
                                            <Text style={{color:"white"}}>Book Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{marginHorizontal:10}}>
                                    <View style={{ height: 170, width: 130, backgroundColor: "white" ,alignItems:"center",borderRadius:10,marginTop:10,justifyContent:"center"}}>
                                        <Image source={require('../../../assets/image/dff.png')} style={{height:100,width:100,marginTop:10  }} />
                                        <Text style={{fontSize:12}}>More flight book the flight</Text>

                                        <TouchableOpacity style={{backgroundColor:'#2E86C1',width:"70%",alignItems:'center',justifyContent:'center',borderRadius:20}}>
                                            <Text style={{color:"white"}}>Book Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                                <View>
                                    <View style={{ height: 170, width: 130, backgroundColor: "white" ,alignItems:"center",borderRadius:10,marginTop:10,justifyContent:"center"}}>
                                        <Image source={require('../../../assets/image/dfd.png')} style={{height:100,width:100,marginTop:10  }} />
                                        <Text style={{fontSize:12}}>More flight book the flight</Text>

                                        <TouchableOpacity style={{backgroundColor:'#2E86C1',width:"70%",alignItems:'center',justifyContent:'center',borderRadius:20}}>
                                            <Text style={{color:"white"}}>Book Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                </View>

            </ImageBackground>
        </View>
    );
};

export default MyTrip;

const style = StyleSheet.create({});
