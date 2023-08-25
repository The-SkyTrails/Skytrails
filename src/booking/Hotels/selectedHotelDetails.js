import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Header from '../../component/header';
const {width, height} = Dimensions.get('window');

const InfoBox = function (props) {
  return (
    <View style={styles.infoBox}>
      <View
        style={{
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{width: 20, height: 20}} source={props.image} />
      </View>
      <Text style={{fontSize: 17, fontWeight: '600', padding: 4}}>
        {props.label} : {props.value}
      </Text>
    </View>
  );
};

const SelectedHotelDetails = ({navigation, route}) => {
  const PayLoad = route.params.payLoad;
  const {ResultIndex, HotelCode, TokenId, TraceId, EndUserId} = PayLoad;
  const hotelPriceDetail = route.params.hotelPriceDetail;
  const [printData, setPrintData] = React.useState(hotelPriceDetail);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://api.travvolt.com/travvolt/hotel/searchinfo',
          data: {
            ResultIndex,
            HotelCode,
            EndUserIp: EndUserId,
            TokenId,
            TraceId,
          },
          config: {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        });

        const responseData = response.data.data.HotelInfoResult.HotelDetails;
        const description =
          response.data.data.HotelInfoResult.HotelDetails.Description;

        var convertDescription = description.replace(/<[^>]+>/g, '');
        const representData = {
          Image: responseData.Images,
          HotelName: responseData.HotelName,
          Description: convertDescription,
          CountryName: responseData.CountryName,
          Address: responseData.Address,
          HotelContactNo: responseData.HotelContactNo,
          FaxNumber: responseData.FaxNumber,
          StarRating: responseData.StarRating,
          HotelFacilities: responseData.HotelFacilities,
          location: {
            Latitude: responseData.Latitude,
            Longitude: responseData.Longitude,
          },
        };

        const updatedData = {...printData, ...representData};
        setPrintData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [ResultIndex, HotelCode, TokenId, TraceId, EndUserId, printData]);
  return (
    <View
      style={{
        height: height,
        width: width,
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{height: height, width: width}}>
        <Header
          onPress={() => navigation.goBack()}
          headerLabel={'Hotel Detail Page'}
        />
        <View style={{height: '88%', width: width}}>
          <ScrollView
            style={{
              height: '100%',
              flex: 1,
            }}>
            <View>
              <View style={styles.coverPicBox}>
                <Image
                  style={styles.coverPic}
                  source={require('../../../assets/image/sld3.png')}
                />
              </View>
              <View style={styles.textBox}>
                <Text style={{fontSize: 23, fontWeight: '900'}}>
                  {printData && printData.HotelName
                    ? printData.HotelName
                    : 'Hotel Data'}
                </Text>
                <Text style={{fontSize: 17, fontWeight: '900', color: 'red'}}>
                  {hotelPriceDetail && hotelPriceDetail.Discount
                    ? hotelPriceDetail.Discount
                    : 0}
                  % OFF{/* Discount */}
                </Text>
              </View>

              <View elevation={5} style={styles.info}>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Contact
                </Text>
                <InfoBox
                  image={require('../../../assets/icon/country.png')}
                  label={'Country'}
                  value={
                    printData && printData.CountryName
                      ? printData.CountryName
                      : null
                  }
                />
                <InfoBox
                  image={require('../../../assets/icon/location.png')}
                  label={'Address'}
                  value={
                    printData && printData.Address ? printData.Address : null
                  }
                />
                <InfoBox
                  image={require('../../../assets/icon/location.png')}
                  label={'Hotel Contact'}
                  value={
                    printData && printData.HotelContactNo
                      ? printData.HotelContactNo
                      : null
                  }
                />
                <InfoBox
                  image={require('../../../assets/icon/fax.png')}
                  label={'Fax Number'}
                  value={
                    printData && printData.FaxNumber
                      ? printData.FaxNumber
                      : null
                  }
                />
              </View>
              <View style={styles.info}>
                <Text style={{fontSize: 17, fontWeight: '900', padding: 4}}>
                  Rating :
                  {printData && printData.StarRating ? printData.StarRating : 0}
                  /5
                </Text>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Location
                </Text>
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Facilities
                </Text>
                {/* <Text style={{fontSize: 15, fontWeight: '900', padding: 4}}> */}
                {printData && printData.HotelFacilities ? (
                  printData.HotelFacilities.map((val, index) => {
                    return (
                      <Text
                        style={{fontSize: 15, fontWeight: '900', padding: 4}}>
                        {`\u25CF ${val}`}
                      </Text>
                    );
                  })
                ) : (
                  <Text>Data is Loading</Text>
                )}
                <Text style={{fontSize: 20, fontWeight: '900', padding: 4}}>
                  Description
                </Text>
                <Text style={{fontSize: 15, fontWeight: '900', padding: 4}}>
                  {printData && printData.Description
                    ? printData.Description
                    : 'Description is loding'}
                </Text>
              </View>
            </View>
            {/* <Footer /> */}
          </ScrollView>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 50,
            backgroundColor: '#fffff',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 6,
          }}>
          <View style={{padding: 4, paddingTop: 2}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Text style={{fontSize: 26, color: '#ff8900', fontWeight: 900}}>
                  ₹
                  {hotelPriceDetail.RoomPrice
                    ? hotelPriceDetail.RoomPrice
                    : 'wait..'}
                </Text>
              </View>
              <View style={{marginLeft: 4, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    textDecorationLine: 'line-through',
                    color: '#666666',
                    fontWeight: 500,
                  }}>
                  ₹{hotelPriceDetail.PublishedPriceRoundedOff}
                </Text>
                <Text
                  style={{
                    marginLeft: 2,
                    fontSize: 15,
                    color: '#666666',
                    fontWeight: 500,
                  }}>
                  Per Night
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: '#666666',
                  fontWeight: 500,
                }}>
                +{hotelPriceDetail.GST.TaxableAmount} Taxes & Fees
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              margin: 4,
              backgroundColor: '#006fff',
              height: 42,
              borderRadius: 18,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SelectRoom', {
                  payLoad: PayLoad,
                  HotelName: printData.HotelName,
                  Address: printData.Address,
                  StarRating: printData.StarRating,
                  HotelFacilities: printData.HotelFacilities,
                })
              }>
              <Text style={{fontSize: 20, fontWeight: '500', color: '#ffff'}}>
                Select Room
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectedHotelDetails;

const styles = StyleSheet.create({
  coverPicBox: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    marginTop: 4,
  },
  coverPic: {width: '100%', height: '100%'},
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
  },
  info: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 8,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
