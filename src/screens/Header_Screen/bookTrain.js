import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
  Modal,
} from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import items from "./city.json";
const { width, height } = Dimensions.get("window");

const BookTrain = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [selectedItemCode, setSelectedItemCode] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onItemSelect = (item) => {
    setSelectedItemId(item.id);
    setSelectedItemName(item.name);
    setSelectedItemCode(item.code);
    setSelectedValue(item);
    setModalVisible(false);
  };

  const handleValueSelection = (value) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("../../../assets/image/bg.jpg")}
      style={{ height: height, width: width }}
      resizeMode="stretch"
    >
      <ScrollView>
        <View
          style={{
            marginTop: 60,
          }}
        >
          {selectedValue && (
            <Text>
              {`${selectedValue.id} - ${selectedValue.name} - ${selectedValue.code}`}
            </Text>
          )}
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
              }}
            >
              <Text>click</Text>
            </View>
          </TouchableOpacity>
          {/* <Button buttonStyle={{ backgroundColor: "#fff" }} title="Open Modal" /> */}
        </View>
      </ScrollView>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageBackground
          source={require("../../../assets/image/bg.jpg")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <View style={{ height: 400 }}>
            {/* Render searchable component here */}
            <SearchableDropdown
              onTextChange={(text) => console.log(text)}
              onItemSelect={onItemSelect}
              containerStyle={{ padding: 5 }}
              listProps={{
                nestedScrollEnabled: false,
              }}
              textInputStyle={{
                padding: 1,
                borderWidth: 1,
                borderColor: "#ddd",
                backgroundColor: "#fff",
              }}
              itemStyle={{
                padding: 5,
                marginTop: 2,
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
              }}
              itemTextStyle={{
                color: "black",
              }}
              itemsContainerStyle={{
                maxHeight: "50%",
              }}
              items={items}
              defaultIndex={2}
              placeholder={
                selectedItemId && selectedItemName
                  ? `${selectedItemId} - ${selectedItemName} - ${selectedItemCode}`
                  : "placeholder"
              }
              resPtValue={false}
              underlineColorAndroid="transparent"
            />
          </View>
        </ImageBackground>
      </Modal>
    </ImageBackground>
  );
};

export default BookTrain;
