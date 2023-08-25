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
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const BookBus = ({navigation}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}
        resizeMode="stretch">
        <ScrollView>
          {/* header */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Holder")}> */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
              Bus Search
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default BookBus;

const style = StyleSheet.create({});
