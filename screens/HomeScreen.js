import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "black", fontSize: 32 }}>Test all the things!</Text>
        <TouchableOpacity
          style={{ backgroundColor: "goldenrod", padding: 10 }}
          onPress={() => navigation.navigate("Swipe")}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Swipe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: "red", padding: 10 }}
          onPress={() => navigation.navigate("Yelp")}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Yelp API
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
