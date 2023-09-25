import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ToastAndroid,
} from "react-native";
import { Text } from 'react-native-paper';
const { width, height } = Dimensions.get("window");
const BeHost = ({ navigation }) => {
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
        <Text
          style={{
            fontSize: 30,
            marginTop: 80,
            alignContent: "center",
          }}
        >
          Host COMING SOON
        </Text>
      </ImageBackground>
    </View>
  );
};

export default BeHost;

const style = StyleSheet.create({});
