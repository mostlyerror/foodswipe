import "react-native-gesture-handler";
// this has to be the first import:
// https://reactnavigation.org/docs/getting-started/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SwipeScreen from "./screens/SwipeScreen";
import YelpScreen from "./screens/YelpScreen";
import GeoScreen from "./screens/GeoScreen";
import GeoRestaurantsScreen from "./screens/GeoRestaurantsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Swipe" component={SwipeScreen} />
        <Stack.Screen name="Yelp" component={YelpScreen} />
        <Stack.Screen name="Geo" component={GeoScreen} />
        <Stack.Screen name="GeoRestaurants" component={GeoRestaurantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
