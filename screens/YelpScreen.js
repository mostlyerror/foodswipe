import React from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import Constants from "expo-constants";

const YelpScreen = () => {
  const [clientId, setClientId] = React.useState("JcZOq46lhmKSoEp2uoeqZQ");
  const [apiKey, setApiKey] = React.useState(
    "dItE7R4KtrNGfggTFABAx85wA1JaRD4EeSmEfDdqpp6YvWderZXxRjlv9i9yUM19Qbp3HT-aNxQEI-WWVQCRy38Wa1RJ37U7ZbYMhkK0_7edFwdhi9ICn07mtrf3WXYx"
  );
  const [apiResponse, setApiResponse] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const testYelpApi = async event => {
    setIsLoading(true);
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
      .then(data => {
        setApiResponse(data);
        setIsLoading(false);
      });
  };

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
            {isLoading && <ActivityIndicator animating={true} size="large" />}
            {apiResponse && <Text>{JSON.stringify(apiResponse, null, 2)}</Text>}
            {apiResponse && (
              <View
                style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "red", padding: 10 }}
                  onPress={() => { setApiResponse(null) }}
                >
                  <Text style={{ color: "white" }}>Clear</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default YelpScreen;
