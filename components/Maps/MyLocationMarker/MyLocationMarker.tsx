import React from "react";
import { Image, View, StyleSheet } from "react-native";
import LocationOn from "../../../assets/icons/icon-location-on.png";

const MyLocationMarker = ({ source, size, tintColor }) => {
  return (
    <View style={[styles.imageContainer, { width: size, height: size }]}>
      <Image
        source={LocationOn}
        style={[styles.image, { tintColor: "#ff0000" }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    // 컨테이너 스타일
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    // tintColor: "#ff0000",
  },
});

export default MyLocationMarker;

// // 사용하는 곳:
// <CustomImage source={require('png경로')} size={50} tintColor="#ff0000" />
