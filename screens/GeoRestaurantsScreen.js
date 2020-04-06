import React, { useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Platform,
  ActivityIndicator
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const GeoRestaurantsScreen = ({ navigation }) => {
  const [errMsg, setErrMsg] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const clientId = "JcZOq46lhmKSoEp2uoeqZQ";
  const apiKey =
    "dItE7R4KtrNGfggTFABAx85wA1JaRD4EeSmEfDdqpp6YvWderZXxRjlv9i9yUM19Qbp3HT-aNxQEI-WWVQCRy38Wa1RJ37U7ZbYMhkK0_7edFwdhi9ICn07mtrf3WXYx";
  const [apiResponse, setApiResponse] = React.useState(null);
  const [businesses, setBusinesses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const _getLocationAsync = async () => {
    console.log("_getLocationAsync()");
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrMsg("Permission to access location was denied");
    }

    setLocation(await Location.getCurrentPositionAsync({}));
  };

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      errMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      _getLocationAsync();
    }
  }, []);

  const _getRestaurantsAsync = async () => {
    setIsLoading(true);
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${lat}&longitude=${lng}`;
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setApiResponse(data);
        setBusinesses(data.businesses);
        setIsLoading(false);
      });
  };

  const bizList = businesses.map(biz => (
    <View style={{marginVertical: 10}}>
      <Text>name: {biz.name}</Text>
      <Text>phone: {biz.display_phone}</Text>
      <Text>price: {biz.price}</Text>
      <Text>rating: {biz.rating}</Text>
      <Text>review_count: {biz.review_count}</Text>
      <Text>address: {`${biz.location.address1}, ${biz.location.city} ${biz.location.zip_code}`}</Text>
      <Text>distance: {biz.distance}</Text>
    </View>
  ));

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: Constants.statusBarHeight
      }}
    >
      <Text style={{ fontSize: 48, fontWeight: "700" }}>
        Restaurants Nearby
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 10,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 10,
          marginVertical: 5
        }}
        onPress={_getRestaurantsAsync}
      >
        <Text style={{ fontSize: 24 }}>Find</Text>
      </TouchableOpacity>
      {isLoading && <ActivityIndicator animating={true} size="large" />}
      {apiResponse && (
        <View style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
          <TouchableOpacity
            style={{ backgroundColor: "red", padding: 10 }}
            onPress={() => {
              setApiResponse(null);
              setBusinesses([]);
            }}
          >
            <Text style={{ color: "white" }}>Clear</Text>
          </TouchableOpacity>
        </View>
      )}
      {bizList}
    </View>
  );
};

export default GeoRestaurantsScreen;
