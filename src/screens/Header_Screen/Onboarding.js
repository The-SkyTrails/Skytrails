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
  ActivityIndicator,
} from 'react-native';
import publicIP from 'react-native-public-ip';
const {width, height} = Dimensions.get('window');

//import axios from "axios";

const Onboarding = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [ip, setIp] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    publicIP()
      .then(ip => {
        console.log(ip);
        setIp(ip);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  // const onsubmit = async () => {
  //   setVisible(true);

  //   let payload = {
  //     EndUserIp: ip,
  //   };
  //   try {
  //     await axios({
  //       method: "post",
  //       url: "http://35.154.173.27:8000/travvolt/token",
  //       data: payload,
  //       confif: {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     }).then((res) => {
  //       const response1 = res.data;
  //       const response = response1.data.TokenId;
  //       //   console.log("TokenId", response);

  //       ToastAndroid.show("Wellcome", ToastAndroid.SHORT);
  //       navigation.navigate("Holder", { data: response });
  //     });
  //   } catch (error) {
  //     setVisible(false);
  //     ToastAndroid.show(
  //       "check your Internet connection",
  //       //  error?.response?.data?.message + "!",
  //       ToastAndroid.SHORT
  //     );
  //   }
  // };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <View
        style={{
          flexDirection: 'column',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../../assets/logo/tra.png')}
          style={{
            padding: 10,
            marginTop: 76,
            height: 86,
            width: 86,
            resizeMode: 'stretch',
            alignItems: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 38,
            fontWeight: '700',
            marginBottom: 500,
            marginTop: 9,
            color: '#1B6FB6',
          }}>
          TRAVVOLT
        </Text>
      </View>
      <View style={{width: width, alignItems: 'center', marginTop: -500}}>
        <Image
          source={require('../../../assets/logo/hello.gif')}
          style={{
            width: width,
            height: 700,
            //height:"50%",
            resizeMode: 'cover',
          }}
        />
        <Text style={{}}>{ip}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Holder')}
          //  onPress={onsubmit}
        >
          <View
            style={{
              height: 56,
              marginTop: -240,
              marginBottom: 40,
              width: 256,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              // position: "absolute",
            }}>
            {/* {visible ? (
              <ActivityIndicator color="#005CFF" />
            ) : ( */}
            <Text
              style={{
                fontSize: 20,
              }}>
              Let's Start
            </Text>
            {/* )} */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    backgroundColor: '#C7E5F0',
    // backgroundColor: "#fff",
    height: height,
    width: width,
  },
});
export default Onboarding;
