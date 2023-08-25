/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Header from '../../component/header';
const {width, height} = Dimensions.get('window');

let Cancellationinfo = function (props) {
  return (
    <View
      style={{
        borderRadius: 8,
        margin: 10,
        borderWidth: 1,
        borderColor: '666666',
        padding: 6,
        backgroundColor: '#fffff',
      }}>
      <View
        style={{
          padding: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            color: '#000000',
          }}>
          Cancellation Policy
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#000000',
          }}>{`\u25CF ${`Charge : ${
          props.CancellationPolicyCharge
            ? props.CancellationPolicyCharge
            : 'Charge'
        }`}`}</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#000000',
          }}>{`\u25CF ${`FromDate : ${
          props.CancellationPolicyFromDate
            ? props.CancellationPolicyFromDate
            : 'Null'
        }`}`}</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#000000',
          }}>{`\u25CF ${`ToDate : ${
          props.CancellationPolicyToDate
            ? props.CancellationPolicyToDate
            : 'Null'
        }`}`}</Text>
      </View>
    </View>
  );
};

function getDate(inputString) {
  return inputString.split('T')[0];
}

let DetailCard = function (props) {
  return (
    <View
      elevation={6}
      style={{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 8,
        padding: 6,
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <View style={{margin: 4}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: '#000000',
              }}>
              {props.RoomTypeName ? props.RoomTypeName : 'RoomTypeName'}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '65%',
              marginLeft: 10,
              padding: 4,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: 'red',
              }}>{`\u25CF ${
              props.RoomPromotion ? props.RoomPromotion : 'Amount'
            }`}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#000000',
              }}>{`\u25CF ${`Smoking : ${
              props.SmokingPreference ? props.SmokingPreference : 'No'
            }`}`}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#000000',
              }}>{`\u25CF ${`Last Cancellation Date : ${
              props.LastCancellationDate ? props.LastCancellationDate : 'null'
            }`}`}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#000000',
              }}>{`\u25CF ${`LastVoucherDate : ${
              props.LastVoucherDate ? props.LastVoucherDate : 'Null'
            }`}`}</Text>
            {props.CancellationPolicies.map((val, key) => {
              return (
                <Cancellationinfo
                  key={key}
                  CancellationPolicyCharge={val.Charge}
                  CancellationPolicyFromDate={getDate(val.FromDate)}
                  CancellationPolicyToDate={getDate(val.ToDate)}
                />
              );
            })}
          </View>
          <View
            style={{
              marginRight: 4,
              width: '30%',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#666666',
                textDecorationLine: 'line-through',
              }}>
              ₹
              {props.PublishedPriceRoundedOff
                ? props.PublishedPriceRoundedOff
                : 'RoomPrice'}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#006fff',
                fontWeight: '700',
              }}>
              ₹{props.RoomPrice ? props.RoomPrice : 'RoomPrice'}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#666666',
                fontWeight: '700',
              }}
              numberOfLines={2}>
              +{props.TaxableAmount ? props.TaxableAmount : 'TaxableAmount'}{' '}
              Taxes & serVice fees Per Night
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SelectRoom = function ({navigation, route}) {
  const [secondPayload, setSecondPayload] = React.useState({});
  const PayLoad = route.params.payLoad;

  function replaceSymbols(inputString, replacementChar) {
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
    for (const symbol of symbols) {
      inputString = inputString.split(symbol).join(replacementChar);
    }
    return inputString;
  }

  const HotelName = route.params.HotelName;
  const Address = route.params.Address;
  const StarRating = route.params.StarRating;
  const HotelFacilities = route.params.HotelFacilities;

  const {ResultIndex, HotelCode, TokenId, TraceId, EndUserId} = PayLoad;
  const [roomList, setRoomList] = React.useState([]);
  //Footer State
  const [footerRoomPrice, setFooterRoomPrice] = React.useState('');
  const [footerPriceRoundedOff, setFooterPriceRoundedOff] = React.useState('');
  const [footerTaxableAmount, setFooterTaxableAmount] = React.useState('');
  const [selectedRoomPrice, setSelectedRoomPrice] = React.useState({});

  const setFooterState = function (
    roomPrice,
    roundOffPrice,
    taxableAmount,
    RoomIndex,
    RoomTypeCode,
    RoomTypeName,
    RatePlanCode,
    SmokingPreference,
    Price,
  ) {
    setSelectedRoomPrice(Price);

    const secondPayloadObject = {
      ResultIndex: ResultIndex,
      HotelCode: HotelCode,
      HotelName: HotelName,
      GuestNationality: 'IN',
      NoOfRooms: '1',
      ClientReferenceNo: '0',
      IsVoucherBooking: 'true',
      HotelRoomsDetails: [
        {
          RoomIndex: RoomIndex,
          RoomTypeCode: RoomTypeCode,
          RoomTypeName: RoomTypeName,
          RatePlanCode: RatePlanCode,
          BedTypeCode: null,
          SmokingPreference: 0,
          Supplements: null,
          Price: {
            CurrencyCode: Price.CurrencyCode,
            RoomPrice: Price.RoomPrice,
            Tax: Price.Tax,
            ExtraGuestCharge: Price.ExtraGuestCharge,
            ChildCharge: Price.ChildCharge,
            OtherCharges: Price.OtherCharges,
            Discount: Price.Discount,
            PublishedPrice: Price.PublishedPrice,
            PublishedPriceRoundedOff: Price.PublishedPriceRoundedOff,
            OfferedPrice: Price.OfferedPrice,
            OfferedPriceRoundedOff: Price.OfferedPriceRoundedOff,
            AgentCommission: Price.AgentCommission,
            AgentMarkUp: Price.AgentMarkUp,
            TDS: Price.TDS,
          },
        },
      ],
      EndUserIp: EndUserId,
      TokenId: TokenId,
      TraceId: TraceId,
    };
    setSecondPayload(secondPayloadObject);
    setFooterRoomPrice(roomPrice);
    setFooterPriceRoundedOff(roundOffPrice);
    setFooterTaxableAmount(taxableAmount);
  };
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://api.travvolt.com/travvolt/hotel/room',
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
        setRoomList(response.data.data.GetHotelRoomResult.HotelRoomsDetails);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [EndUserId, HotelCode, ResultIndex, TokenId, TraceId]);
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: '#ffff',
      }}>
      <Header onPress={() => navigation.goBack()} headerLabel={'Select Room'} />

      <View style={{height: '85%', width: width}}>
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
              <Text style={{fontSize: 24, fontWeight: '800', color: '#000000'}}>
                {HotelName}
              </Text>
              <Text style={{fontSize: 17, fontWeight: '900', color: '#006fff'}}>
                Details
              </Text>
            </View>
            <View
              elevation={7}
              style={{
                marginHorizontal: 8,
                borderRadius: 6,
                padding: 4,
                justifyContent: 'center',
                backgroundColor: '#fff',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 17, fontWeight: '700', color: '#006fff'}}>
                Breakfast & Lunch / Dinner Included
              </Text>
            </View>
            <View
              style={{
                margin: 4,
                padding: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#00000'}}>
                Executive Room Free Wifi - Welcome Drink on Arrival Juice or
                Butter Milk (2 Aduits)
              </Text>
            </View>
            <View>
              {roomList
                ? roomList.map((val, key) => {
                    return (
                      <DetailCard
                        key={key}
                        onPress={() =>
                          setFooterState(
                            val.Price.RoomPrice,
                            val.Price.PublishedPriceRoundedOff,
                            val.Price.GST.TaxableAmount,
                            // Second PayLoad Data
                            val.RoomIndex,
                            val.RoomTypeCode,
                            val.RoomTypeName,
                            val.RatePlanCode,
                            val.SmokingPreference,
                            val.Price,
                          )
                        }
                        RoomTypeName={val.RoomTypeName}
                        RoomPromotion={replaceSymbols(val.RoomPromotion, ' ')}
                        SmokingPreference={val.SmokingPreference}
                        LastCancellationDate={getDate(val.LastCancellationDate)}
                        LastVoucherDate={getDate(val.LastVoucherDate)}
                        CancellationPolicies={val.CancellationPolicies}
                        PublishedPriceRoundedOff={
                          val.Price.PublishedPriceRoundedOff
                        }
                        RoomPrice={val.Price.RoomPrice}
                        TaxableAmount={val.Price.GST.TaxableAmount}
                      />
                    );
                  })
                : null}
            </View>
          </View>
        </ScrollView>
      </View>
      {footerRoomPrice ? (
        <View
          style={{
            position: 'relative',
            bottom: -6,
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
                  ₹{footerRoomPrice ? footerRoomPrice : 'loding...'}
                </Text>
              </View>
              <View style={{marginLeft: 4, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    textDecorationLine: 'line-through',
                    color: '#666666',
                    fontWeight: 500,
                  }}>
                  ₹{footerPriceRoundedOff ? footerPriceRoundedOff : 'loding...'}
                </Text>
                <Text
                  style={{
                    marginLeft: 2,
                    fontSize: 20,
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
                +{footerTaxableAmount ? footerTaxableAmount : 'loding...'} Taxes
                & Fees
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
                navigation.navigate('ReviewBooking', {
                  payLoad: secondPayload,
                  HotelName: HotelName,
                  Address: Address,
                  StarRating: StarRating,
                  HotelFacilities: HotelFacilities,
                  roomPrices: selectedRoomPrice,
                })
              }>
              <Text style={{fontSize: 20, fontWeight: '500', color: '#ffff'}}>
                Select Room
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  coverPicBox: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    marginTop: 4,
  },
  coverPic: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
  },
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
  },
});
export default SelectRoom;
