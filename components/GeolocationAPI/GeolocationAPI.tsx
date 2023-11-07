// GeoLocationAPI.js
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import CustomMap from "../Maps/Map";

const GeoLocationAPI = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          ...region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return (
    <View>
      <CustomMap region={region} />

      <TouchableOpacity
        onPress={geoLocation}
        style={{ backgroundColor: "#89B2E9" }}>
        <Text style={{ color: "white", textAlign: "center" }}>
          Get GeoLocation Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GeoLocationAPI;
