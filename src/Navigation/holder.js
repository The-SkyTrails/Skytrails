import {useEffect} from 'react';
import 'react-native';
import {StyleSheet, StatusBar, View, Dimensions} from 'react-native';
import TabNavigator from '../Navigation/bottomTAb';
import React from 'react';
const {height, width} = Dimensions.get('window');

const Holder = ({navigation, route}) => {
  // const data = route.params;

  //console.log('TokenId', data);

  // useEffect(() => {
  //   navigation.navigate("Home", { data: data });
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        height: height,
        width: width,
        borderRadius: 20,

        // marginTop: 10,
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00796A"
      />
      <TabNavigator></TabNavigator>
    </View>
  );
};

export default Holder;
const styles = StyleSheet.create({});
