import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from './header';
const {width, height} = Dimensions.get('window');

let RoomGuestsModal = function (props) {
  return (
    <View style={{height: height, width: width}}>
      <Header />
      <View>
        <View>
          <Text>container</Text>
        </View>
      </View>
      <View style={style.doneButton}>
        <Text style={{color: '000000'}}>Done</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  doneButton: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe6d38',
  },
});

export default RoomGuestsModal;
