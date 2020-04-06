import React, { useEffect } from "react";
import { View, Text, Platform } from "react-native";
import Constants from 'expo-constants'
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const GeoScreen = ({ navigation }) => {
  const [errMsg, setErrMsg] = React.useState(null);
  const [location, setLocation] = React.useState(null);

  const _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrMsg("Permission to access location was denied");
    }

    setLocation(await Location.getCurrentPositionAsync({}))
  };

  let text = "Waiting...";
  if (errMsg) {
    text = errMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  useEffect(() => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
          errMsg('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
      } else {
          _getLocationAsync();
      }
  }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{text}</Text>
    </View>
  );
};

export default GeoScreen;
