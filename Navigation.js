import React from 'react';
import { View, Text } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup, Login, Home, Services, Message } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createRef } from 'react';
import 'react-native-gesture-handler';
import Onboarding from './src/screens/Main_Home_Screens/onboarding';
import Holder from './src/Navigation/holder';
// import {Home} from './src/screens/main_home_Screen/home';
import OneWayFlight from './src/screens/Header_Screen/onewayFlight';
import RoundTripFlight from './src/screens/Header_Screen/roundTripFlight';
import MultiCityFlight from './src/screens/Header_Screen/multiCityFlight';
import Hotels from './src/screens/Header_Screen/hotels';
import HotelInternational from './src/screens/Header_Screen/hotelInternational';
import TnB from './src/screens/Header_Screen/tnb';
import BookTrain from './src/screens/Header_Screen/bookTrain';
import BookBus from './src/screens/Header_Screen/bookBus';
import HolidayPackages from './src/screens/Header_Screen/holidayPackages';
import Taxi from './src/screens/Main_Home_Screens/taxi';
import TrainPnr from './src/screens/Main_Home_Screens/TrainPnr';
import Forex from './src/screens/Main_Home_Screens/Forex';
import Activities from './src/screens/Main_Home_Screens/Activities';
import SearchFlights from './src/booking/Flights/searchFlight';
import SelectedFlightDetails from './src/booking/Flights/selectedFlightDetails';
import PassengerFlightDetails from './src/booking/Flights/PassengerFlightDetails';
import FlightPayMentMode from './src/booking/Flights/flightPayMentMode.js';

import SearchHotel from './src/booking/Hotels/searchHotel';
import SelectedHotelDetails from './src/booking/Hotels/selectedHotelDetails';
import SelectRoom from './src/booking/Hotels/selectRoom';
import ReviewBooking from './src/booking/Hotels/reviewBooking';
import SignIn from './src/screens/Main_Home_Screens/SignIn';
import SignUp from './src/screens/Main_Home_Screens/signUp';
import RoomGuestsModal from './src/component/rooms-guests';
import SearchHoliday from './src/booking/holidayPackages/searchHoliday';
import ResultHolidayPackages from './src/booking/holidayPackages/resultHolidayPackages';

import Bus from './src/booking/Bus/busHomePage';
import BusSearch from './src/booking/Bus/busSearch';
import BusDetails from './src/booking/Bus/busDetails';
import BusReviewBooking from './src/booking/Bus/busReviewBooking';

import MHome from './src/screens/Main_Home_Screens/home';
import Dummy from './src/screens/Main_Home_Screens/Dummy';
import { Provider } from 'react-redux';
import { persistor, Persistor ,store} from "./redux-toolkit/store";
import { PersistGate } from "redux-persist/integration/react";
import CheckScreen from './src/booking/Flights/CheckScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <Provider  store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer ref={createRef()}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Onboarding" component={Onboarding} />
                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen name="Holder" component={Holder} />
                        <Stack.Screen name="Home" component={MHome} />
                        <Stack.Screen name="OneWayFlight" component={OneWayFlight} />
                        <Stack.Screen name="RoundTripFlight" component={RoundTripFlight} />
                        <Stack.Screen name="MultiCityFlight" component={MultiCityFlight} />
                        <Stack.Screen name="Hotels" component={Hotels} />
                        <Stack.Screen
                            name="HotelInternational"
                            component={HotelInternational}
                        />
                        <Stack.Screen name="RoomGuestsModal" component={RoomGuestsModal} />
                        <Stack.Screen name="TnB" component={TnB} />
                        <Stack.Screen name="BookTrain" component={BookTrain} />
                        <Stack.Screen name="BookBus" component={BookBus} />
                        <Stack.Screen name="HolidayPackages" component={HolidayPackages} />
                        <Stack.Screen name="Taxi" component={Taxi} />
                        <Stack.Screen name="TrainPnr" component={TrainPnr} />
                        <Stack.Screen name="Forex" component={Forex} />
                        <Stack.Screen name="Activities" component={Activities} />
                        <Stack.Screen name="SearchFlights" component={SearchFlights} />
                        <Stack.Screen
                            name="SelectedFlightDetails"
                            component={SelectedFlightDetails}
                        />
                        <Stack.Screen
                            name="PassengerFlightDetails"
                            component={PassengerFlightDetails}
                        />
                        <Stack.Screen name="FlightPayMentMode" component={FlightPayMentMode} />

                        {/* <Stack.Screen name="SearchHotel" component={SearchHotel} />
        <Stack.Screen name="Dummy" component={Dummy} />
        <Stack.Screen
          name="SelectedHotelDetails"
          component={SelectedHotelDetails}
        />
        <Stack.Screen name="SelectRoom" component={SelectRoom} />
        <Stack.Screen name="ReviewBooking" component={ReviewBooking} /> */}
                        {/* Bus */}
                        <Stack.Screen name="BusHome" component={Bus} />
                        <Stack.Screen name="BusSearch" component={BusSearch} />
                        <Stack.Screen name="BusDetails" component={BusDetails} />
                        <Stack.Screen name="BusReviewBooking" component={BusReviewBooking} />
                        <Stack.Screen name="CheckScreen" component={CheckScreen} />
                        {/* holidayPackages */}
                        {/* <Stack.Screen name="SearchHoliday" component={SearchHoliday} />
        <Stack.Screen
          name="ResultHolidayPackages"
          component={ResultHolidayPackages}
        /> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default Navigation;
