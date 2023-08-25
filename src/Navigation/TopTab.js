import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from '../screens/Main_Home_Screens/Upcoming';
import Cancelled from '../screens/Main_Home_Screens/Cancelled';


const TopTab = () => {
    const Tab = createMaterialTopTabNavigator();
    return (

        <Tab.Navigator
            tabBarOptions={{
                scrollEnabled: true, // Enable horizontal scrolling
                tabStyle: { width: 150 }, // Set the width of each tab
            }}>
            <Tab.Screen name="Upcoming" component={Upcoming} />
            <Tab.Screen name="Cancelled" component={Cancelled} />

        </Tab.Navigator>

    )
}

export default TopTab

const styles = StyleSheet.create({})