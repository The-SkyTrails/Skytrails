import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageRequireSource,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MHome from '../screens/Main_Home_Screens/home';
import MyTrip from '../screens/Main_Home_Screens/myTrip';
import Destination from '../screens/Main_Home_Screens/destination';
import TripMoney from '../screens/Main_Home_Screens/tripMoney';
import BeHost from '../screens/Main_Home_Screens/beahost';
const Tab = createBottomTabNavigator();
import {Ionicons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

const TabNavigator = navigation => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "#ddd",
        borderRadius: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent
        backgroundColor="transparent"
      />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false,
          // tabBarInactiveTintColor: "grey",
          // tabBarActiveTintColor: "black",
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#fff',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={MHome}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#FF8900' : color, fontSize: 10}}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/logo/hoac.png')}
                  style={{height: 29, width: 29}}
                />
              ) : (
                <Image
                  source={require('../../assets/logo/hoinac.png')}
                  style={{height: 25, width: 25}}
                />
              ),
          }}
        />
        <Tab.Screen
          name="MyTrip"
          component={MyTrip}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#FF8900' : color, fontSize: 10}}>
                My Trip
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/logo/mtac.png')}
                  style={{height: 29, width: 29}}
                />
              ) : (
                <Image
                  source={require('../../assets/logo/mtinac.png')}
                  style={{height: 25, width: 25}}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Destination"
          component={Destination}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#FF8900' : color, fontSize: 10}}>
                Destination
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/logo/desac.png')}
                  style={{height: 29, width: 29}}
                />
              ) : (
                <Image
                  source={require('../../assets/logo/desinac.png')}
                  style={{height: 25, width: 25}}
                />
              ),
          }}
        />

        <Tab.Screen
          name="TripMoney"
          component={TripMoney}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#FF8900' : color, fontSize: 10}}>
                Trip Money
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/logo/tmac.png')}
                  style={{height: 29, width: 29}}
                />
              ) : (
                <Image
                  source={require('../../assets/logo/tminac.png')}
                  style={{height: 25, width: 25}}
                />
              ),
          }}
        />
        <Tab.Screen
          name="BeHost"
          component={BeHost}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#FF8900' : color, fontSize: 10}}>
                Be Host
              </Text>
            ),
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={require('../../assets/logo/hostac.png')}
                  style={{height: 29, width: 29}}
                />
              ) : (
                <Image
                  source={require('../../assets/logo/hostinac.png')}
                  style={{height: 25, width: 25}}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
