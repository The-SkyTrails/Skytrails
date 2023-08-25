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
  Button,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const PayMentCard = function (props) {
  return (
    <View
      elevation={7}
      style={{
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 8,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 30, height: 30, margin: 6}}>
          <Image style={{width: '100%', height: '100%'}} source={props.icon} />
        </View>
        <View
          style={{
            padding: 6,
          }}>
          <Text style={{fontSize: 18, fontWeight: 800, color: '#252525'}}>
            {props.cardName}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{fontSize: 14, fontWeight: 600, color: '#252525'}}>
            {props.dec}
          </Text>
        </View>
      </View>

      <View
        style={{
          margin: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight: 600, color: '#357EFF'}}>
          {'>'}
        </Text>
      </View>
    </View>
  );
};

const FlightPayMentMode = ({navigation, route}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
            }}>
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
          </View>
          <View
            style={{
              marginTop: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#eff5ff',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    margin: 10,
                    fontSize: 21,
                    fontWeight: 700,
                    color: '#005CFF',
                  }}>
                  Delhi
                </Text>
                <View
                  style={{
                    width: 35,
                    height: 25,
                    margin: 10,
                  }}>
                  <Image
                    source={require('../../../assets/logo/airplane.png')}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </View>
                <Text
                  style={{
                    margin: 10,
                    fontSize: 21,
                    fontWeight: 700,
                    color: '#005CFF',
                  }}>
                  Goa
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#252525',
                }}>
                Non Stop | 2hr 15mins | Economy
              </Text>
            </View>
            <PayMentCard
              cardName={'UPI'}
              dec={'Pay Direct From Your Bank Account'}
              icon={require('../../../assets/icon/UPI.png')}
            />
            <PayMentCard
              cardName={'Credit/Direct/ATM Card'}
              dec={'Visa, Master Card, Amex, Rupay and more'}
              icon={require('../../../assets/icon/credit-card.png')}
            />
            <PayMentCard
              cardName={'Book Now Pay Later'}
              dec={'Tripmoney, Lazypay, Simpl, ZestMoney, ICICI, HDFC'}
              icon={require('../../../assets/icon/debit-card2.png')}
            />
            <PayMentCard
              cardName={'Net Banking'}
              dec={'All Major Banks Available'}
              icon={require('../../../assets/icon/debit-card.png')}
            />
            <PayMentCard
              cardName={'Gift Card, Wallets & More'}
              dec={'Gift cards, Mobikwik, Amazon Pay'}
              icon={require('../../../assets/icon/gift-card.png')}
            />
            <PayMentCard
              cardName={'EMI'}
              dec={'Credit/Debit Card EMI Available'}
              icon={require('../../../assets/icon/payment.png')}
            />
            <PayMentCard
              cardName={'Phone Pe'}
              dec={'Pay with PhonePe'}
              icon={require('../../../assets/icon/phonepe-logo-icon.png')}
            />
            <PayMentCard
              cardName={'Google Pay'}
              dec={'Pay with Google Pay'}
              icon={require('../../../assets/icon/google-pay.png')}
            />
            <View style={{padding: 10, marginBottom: 20}}>
              <Text style={{color: '#000000', fontSize: 15, fontWeight: 600}}>
                By continuing to pay, I understand and agree with the Privacy
                Policy, the User Agreement and Terms of Service of Travvolt
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default FlightPayMentMode;

const style = StyleSheet.create({});
