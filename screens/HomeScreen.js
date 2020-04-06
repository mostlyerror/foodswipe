import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const TestScreenButton = props => (
  <TouchableOpacity
    style={{
      backgroundColor: "white",
      padding: 10,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 5
    }}
    onPress={() => props.navigation.navigate(props.screenName)}
  >
    <Text style={{ fontSize: 16, fontWeight: "600" }}>{props.buttonText}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "left",
        justifyContent: "center",
        paddingHorizontal: 10
      }}
    >
      <Text style={{ fontSize: 48, fontWeight: "700" }}>Debug</Text>
      <Text style={{ fontSize: 24, fontWeight: "200" }}>
        test all the things
      </Text>
      <TestScreenButton
        navigation={navigation}
        screenName="Swipe"
        buttonText="Tinder Swipe"
      />
      <TestScreenButton navigation={navigation} screenName="Yelp" buttonText="Yelp API" />
      <TestScreenButton navigation={navigation} screenName="Geo" buttonText="Geo" />
      <TestScreenButton navigation={navigation} screenName="GeoRestaurants" buttonText="Restaurants Nearby" />
    </View>
  );
};

export default HomeScreen;
