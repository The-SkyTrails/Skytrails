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
  ActivityIndicator,
} from "react-native";
import Navigation from "./Navigation";


const { width, height } = Dimensions.get("window");


const App = ({}) => {
  return (
   <Navigation /> 
  );
};

const styles = StyleSheet.create({
  
});
export default App;
