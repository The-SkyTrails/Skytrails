import React from "react";
import {
    StyleSheet,
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
import { Text } from 'react-native-paper';
const { width, height } = Dimensions.get("window");

const Activities = ({ navigation }) => {
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
                            Activities
                        </Text>
                    </View>

                    <View styl={{ backgroundColor: "white" }}>
                        <TextInput style={{
                            backgroundColor: 'white',
                            marginHorizontal: 40, borderRadius: 20, paddingHorizontal: 10,
                            height: 40, marginTop: 10
                        }} placeholder="search"/>
                    </View>

                    <View style={{ backgroundColor: "white", marginTop: 25, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <Text style={{ color: "#EB984E",fontSize:16  }}>Top Indian Destination</Text>
                        </View>

                        <View style={{ padding: 5,   }}>
                            <ScrollView horizontal>
                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Delhi</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Shimla</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/nainital.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Nainital</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>shimla</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                

                            </ScrollView>
                        </View>

                        

                    </View>

                    <View style={{ backgroundColor: "white", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <Text style={{ color: "#EB984E" ,fontSize:16 }}>Top International Destination</Text>
                        </View>

                        <View style={{ padding: 5,marginTop:10   }}>
                            <ScrollView horizontal>
                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/dubai.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Dubai</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/italy.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Italy</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/bali.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Bali</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/japan.jpg')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Japan</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                

                            </ScrollView>
                        </View>

                        

                    </View>

                    <View style={{ backgroundColor: "white", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <Text style={{ color: "black",fontSize:16 }}>Top Activities across the world</Text>
                        </View>

                        <View style={{ padding: 5,marginTop:10   }}>
                            <ScrollView horizontal>
                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Safari world</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                    <Text style={{fontSize:14,color:'#2980B9', }}>₹5409</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>jungle safari</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                    <Text style={{fontSize:14,color:'#2980B9', }}>₹5409</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/nainital.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Disney Lank</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                    <Text style={{fontSize:14,color:'#2980B9', }}>₹5409</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Bali</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                    <Text style={{fontSize:14,color:'#2980B9', }}>₹5409</Text>
                                </View>

                                

                            </ScrollView>
                        </View>

                        

                    </View>

                    <View style={{ backgroundColor: "white", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <Text style={{ color: "black",fontSize:16 }}>Top Activities across the India</Text>
                        </View>

                        <View style={{ padding: 5,marginTop:10   }}>
                            <ScrollView horizontal>
                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Delhi</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Shimla</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/nainital.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>Nainital</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                <View style={{alignItems:"center",marginHorizontal:15}}>
                                    <Image source={require('../../../assets//image/shimla.png')} style={{ height: 60, width: 60, borderRadius: 10 }} />
                                    <Text style={{fontSize:15,color:'black',marginTop:7 }}>shimla</Text>
                                    <Text style={{fontSize:10,color:'black', }}>211 Activities</Text>
                                </View>

                                

                            </ScrollView>
                        </View>

                        

                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};      

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C7E5F0",
        height: "100%",
        width: width,
    },
});
export default Activities;
