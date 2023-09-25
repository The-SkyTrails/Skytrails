import React from 'react';
import {View, StyleSheet, } from 'react-native';
import { Text } from 'react-native-paper';

const Footer = function (props) {
  return (
    <View style={styles.footerContainer}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: '10%',
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;
