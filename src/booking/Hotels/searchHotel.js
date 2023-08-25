import React from 'react';
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
const {width, height} = Dimensions.get('window');

let HotelCard = function (props) {
  return (
    <View elevation={8} style={styles.card}>
      <TouchableOpacity onPress={() => props.moveDataToDetailPage()}>
        <View style={styles.cardImageBox}>
          <Image style={styles.image} source={{uri: props.imageCover}} />
        </View>
        <View
          style={{
            padding: 6,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '50%'}}>
            <Text style={styles.cardText} numberOfLines={1}>
              {props.hotelName}
            </Text>
            <Text style={styles.cardText} numberOfLines={1}>
              {props.hotelAddress}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.cardIconBox}>
                <Image
                  style={styles.cardIcon}
                  source={require('../../../assets/logo/rate.png')}
                />
              </View>
              <Text style={styles.cardText} numberOfLines={1}>
                {props.StarRating}/5
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.cardIconBox}>
                <Image
                  style={styles.cardIcon}
                  source={require('../../../assets/logo/fre.png')}
                />
              </View>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#ff8900'}}
                numberOfLines={1}>
                Free Cancellation Included
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.cardIconBox}>
                <Image
                  style={styles.cardIcon}
                  source={require('../../../assets/logo/brkfst.png')}
                />
              </View>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#ff8900'}}
                numberOfLines={1}>
                Free Breakfast Included
              </Text>
            </View>
          </View>
          <View style={{width: '40%', alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'red',
              }}
              numberOfLines={1}>
              {props.discount}%OFF
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
                textDecorationLine: 'line-through',
              }}
              numberOfLines={1}>
              ₹{props.publishedPriceRoundedOff}
            </Text>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: '#ff8900'}}
              // numberOfLines={2}
            >
              ₹{props.roomPrice}
            </Text>
            <Text style={styles.cardText} numberOfLines={2}>
              ₹{props.taxableAmount} Taxes & Fees Per Night
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SearchHotel = ({navigation, route}) => {
  const paramsData = route.params;
  const data = paramsData.data ? paramsData.data : [];
  const rawData = {
    CheckInDate: paramsData.CheckInDate,
    CheckOutDate: paramsData.CheckOutDate,
  };

  const traceId = data.TraceId;

  const UserIp = paramsData.userIp;
  const tokenId = paramsData.tokenId ? paramsData.tokenId : null;

  const moveDataToDetailPage = function (resultIndex, hotelCode, priceDetail) {
    const payLoad = {
      ResultIndex: resultIndex,
      HotelCode: hotelCode,
      EndUserId: UserIp,
      TokenId: tokenId,
      TraceId: traceId,
    };

    return navigation.navigate('SelectedHotelDetails', {
      payLoad: payLoad,
      hotelPriceDetail: priceDetail,
    });
  };

  return (
    <View
      style={{
        height: height,
        width: width,
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('../../../assets/image/bg.jpg')}
        style={{
          height: height,
          width: width,
        }}>
        <ScrollView>
          {/* "Header" */}
          <View style={{borderColor: 'red', borderWidth: 1}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                }}>
                <View style={{width: 25, height: 25}}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                      source={require('../../../assets/logo/back.png')}
                      style={{
                        width: 25,
                        height: 25,
                        marginHorizontal: 6,
                        paddingHorizontal: 6,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#fff',
                      margin: 6,
                      padding: 6,
                      marginLeft: 10,
                      fontSize: 20,
                      fontWeight: '700',
                    }}>
                    Destination
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width,
                alignItems: 'center',
              }}>
              {data &&
                data.HotelResults &&
                data.HotelResults.map((val, index) => {
                  return (
                    <HotelCard
                      key={index}
                      moveDataToDetailPage={() =>
                        moveDataToDetailPage(
                          val.ResultIndex,
                          val.HotelCode,
                          val.Price,
                        )
                      }
                      imageCover={
                        val.HotelPicture
                          ? val.HotelPicture
                          : 'https://unsplash.com/photos/n_IKQDCyrG0='
                      }
                      hotelName={val.HotelName ? val.HotelName : 'HotelName'}
                      hotelAddress={
                        val.HotelAddress ? val.HotelAddress : 'HotelAddress'
                      }
                      StarRating={val.StarRating ? val.StarRating : 0}
                      discount={
                        val.Price && val.Price.Discount ? val.Price.Discount : 0
                      }
                      publishedPriceRoundedOff={
                        val.Price && val.Price.PublishedPriceRoundedOff
                          ? val.Price.PublishedPriceRoundedOff
                          : null
                      }
                      roomPrice={
                        val.Price && val.Price.RoomPrice
                          ? val.Price.RoomPrice
                          : 'room price'
                      }
                      taxableAmount={
                        val.Price &&
                        val.Price.GST &&
                        val.Price.GST.TaxableAmount
                          ? val.Price.GST.TaxableAmount
                          : null
                      }
                    />
                  );
                })}
            </View>
          </View>

          {/* Hotel details */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SearchHotel;

const styles = StyleSheet.create({
  card: {
    margin: 8,
    width: '90%',
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#ffff',
  },
  cardImageBox: {
    width: '100%',
    height: 142,
    borderRadius: 8,
  },
  image: {width: '100%', height: '100%', borderRadius: 8},
  cardIconBox: {
    width: 15,
    margin: 4,
    marginRight: 6,
    height: 15,
    marginLeft: 0,
  },
  cardIcon: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});
