import { StyleSheet,  View, ScrollView, Image } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper';


const CheckScreen = () => {
    return (
        <View style={{ flex: 1 ,marginTop:40}}>
            <ScrollView stickyHeaderIndices={[0]}>
                <View>
                    <Image source={require('../../../assets/image/df.png')} style={{height:300}} />
                </View>

                <View>
                <Image source={require('../../../assets/image/df.png')} style={{height:300}} />

                </View>

                <View>
                <Image source={require('../../../assets/image/df.png')} style={{height:300}} />
                </View>
            </ScrollView>
        </View>
    )
}

export default CheckScreen

const styles = StyleSheet.create({})