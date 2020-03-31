import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const YelpScreen = () => {
  const [clientId, setClientId] = React.useState("JcZOq46lhmKSoEp2uoeqZQ");
  const [apiKey, setApiKey] = React.useState(
    "dItE7R4KtrNGfggTFABAx85wA1JaRD4EeSmEfDdqpp6YvWderZXxRjlv9i9yUM19Qbp3HT-aNxQEI-WWVQCRy38Wa1RJ37U7ZbYMhkK0_7edFwdhi9ICn07mtrf3WXYx"
  );
  const [apiResponse, setApiResponse] = React.useState(null);

  const testYelpApi = async event => {
    let lat = null;
    let lng = null;
    const url =
      "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then(res => res.json())
      .then(data => setApiResponse(data));
  };

  const clearResponse = async event => {
    console.log('hi')
    setApiResponse(null);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: Constants.statusBarHeight,
        padding: 10,
        backgroundColor: "aliceblue"
      }}
    >
      <View
        style={{
          height: 60,
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Yelp API Test</Text>
        <TouchableOpacity
          style={{ backgroundColor: "red", padding: 10, borderRadius: 5 }}
          onPress={testYelpApi}
        >
          <Text style={{ color: "white" }}>Test</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text style={{ fontWeight: "600" }}>Client ID</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => console.log(text)}
            placeholder={clientId}
            placeholderTextColor="gray"
            editable={false}
            backgroundColor="white"
          />
        </View>
        <View>
          <Text style={{ fontWeight: "600" }}>Api Key</Text>
          <TextInput
            style={{
              height: 100,
              borderColor: "gray",
              borderWidth: 1,
              overflow: "scroll"
            }}
            onChangeText={text => console.log(text)}
            placeholder={apiKey}
            placeholderTextColor="gray"
            backgroundColor="white"
            multiline={true}
            editable={false}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "600" }}>API Response</Text>
          <View
            style={{
              flex: 1,
              borderColor: "gray",
              borderWidth: "1",
              backgroundColor: "white"
            }}
          >

            {apiResponse && (
              <View style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
                <TouchableOpacity style={{backgroundColor: 'red', padding: 10, }}
                onPress={clearResponse}>
                  <Text style={{color: 'white'}}>Clear</Text>
                </TouchableOpacity>
              </View>
            )}

            <Text>{apiResponse ? JSON.stringify(apiResponse, null, 2) : 'press test button to execute api call'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default YelpScreen;
