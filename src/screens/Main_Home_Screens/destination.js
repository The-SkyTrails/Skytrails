import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
    StyleSheet,
    StatusBar,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    ImageBackground,
    ToastAndroid,
    TextInput,
    ScrollView,
    Button,
    Modal, Animated, PanResponder
} from "react-native";
import { Text } from 'react-native-paper';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
const { width, height } = Dimensions.get("window");
const Destination = ({ navigation }) => {

    const [pan] = useState(new Animated.ValueXY());

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dy: pan.y }], {
            useNativeDriver: false,
        }),
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dy > 50) {
                // Close the modal
                Animated.timing(pan, {
                    toValue: { x: 0, y: 500 }, // Off the screen
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            } else {
                // Return to the original position
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            }
        },
    });
    const [modalVisible, setModalVisible] = useState(false);
    let [ShowComment, setShowModelComment] = useState(false);
    let [animateModal, setanimateModal] = useState(false);

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
                <View>
                    <View style={{ marginTop: 30, justifyContent: "center", alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 22,
                                alignContent: "center",
                                color: "black"
                            }}
                        >Where will you find joy ?
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            placeholder="Search Destination"
                            style={{ backgroundColor: "white", marginHorizontal: 25, borderRadius: 20, padding: 8 }}
                        />
                    </View>

                    <View style={{ padding: 10, marginTop: 10 }}>
                        <ScrollView horizontal>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/image/italy.jpg')}
                                    style={{ height: 150, width: 120, borderRadius: 10 }}
                                />
                                <Text style={{ color: "#3498DB", fontSize: 18 }}>Italy</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                                <Image
                                    source={require('../../../assets/image/bali.jpg')}
                                    style={{ height: 150, width: 120, borderRadius: 10 }}
                                />
                                <Text style={{ color: "#3498DB", fontSize: 18 }}>Bali</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/image/japan.jpg')}
                                    style={{ height: 150, width: 120, borderRadius: 10 }}
                                />
                                <Text style={{ color: "#3498DB", fontSize: 18 }}>Japan</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10, marginHorizontal: 10 }}>
                        <ScrollView horizontal>
                            <TouchableOpacity>
                                <Text style={{ color: "#C57D2B", fontSize: 20, fontWeight: 'bold' }}>Asia</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Text style={{ color: "#C57D2B", fontSize: 20, fontWeight: 'bold' }}>Europe</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Text style={{ color: "#C57D2B", fontSize: 20, fontWeight: 'bold' }}>Dubai</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Text style={{ color: "#C57D2B", fontSize: 20, fontWeight: 'bold' }}>Australlia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Text style={{ color: "#C57D2B", fontSize: 20, fontWeight: 'bold' }}>Paris</Text>
                            </TouchableOpacity>
                        </ScrollView>


                    </View>

                    <Animated.View
                        style={[
                            { transform: [{ translateY: pan.y }] },
                            { height: '100%', width: '100%', backgroundColor: 'white' },
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <View>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 150, marginHorizontal: 17 }}>
                                    <Image
                                        source={require('../../../assets/image/japan.jpg')}
                                        style={{ height: 150, width: 150, borderRadius: 10 }}
                                    />
                                    <Text style={{ color: "#3498DB", fontSize: 18 }}>Japan</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 150, marginHorizontal: 10 }}>
                                    <Image
                                        source={require('../../../assets/image/bali.jpg')}
                                        style={{ height: 150, width: 150, borderRadius: 10 }}
                                    />
                                    <Text style={{ color: "#3498DB", fontSize: 18 }}>Bali</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 150, marginHorizontal: 17 }}>
                                    <Image
                                        source={require('../../../assets/image/dubai.jpg')}
                                        style={{ height: 150, width: 150, borderRadius: 10 }}
                                    />
                                    <Text style={{ color: "#3498DB", fontSize: 18 }}>Dubai</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 150, marginHorizontal: 10 }}>
                                    <Image
                                        source={require('../../../assets/image/italy.jpg')}
                                        style={{ height: 150, width: 150, borderRadius: 10 }}
                                    />
                                    <Text style={{ color: "#3498DB", fontSize: 18 }}>Italy</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 150, marginHorizontal: 17 }}>
                                    <Image
                                        source={require('../../../assets/image/japan.jpg')}
                                        style={{ height: 150, width: 150, borderRadius: 10 }}
                                    />
                                    <Text style={{ color: "#3498DB", fontSize: 18 }}>Japan</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: 150, marginHorizontal: 10 }}>
                                    <Image
                                        source={require('../../../assets/image/japan.jpg')}
                                        style={{ height: 150, width: 150, borderRadius: 10 }}
                                    />
                                    <Text style={{ color: "#3498DB", fontSize: 18 }}>Japan</Text>
                                </View>
                            </View>

                        </View>
                    </Animated.View>

                </View>

            </ImageBackground>
        </View>
    );
};

export default Destination;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    containerContent: { flex: 1, marginTop: 40 },
    containerHeader: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#F1F1F1',
    },
    headerContent: {
        marginTop: 0,
    },
    Modal: {
        backgroundColor: '#005252',
        marginTop: 0,
    }
});
