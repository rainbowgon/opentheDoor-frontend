import React, { useEffect, useState } from "react";
import { ScrollView, Button, View, Text, StyleSheet } from "react-native";
// import Input from "../../../../components/Input/Input";
import Geolocation from "@react-native-community/geolocation";
import CustomMap from "../../../../components/Maps/Map";

import { PermissionsAndroid } from "react-native";
import { Region } from "react-native-maps";

const NearByTheme = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "위치 정보 권한",
            message: "이 앱은 당신의 위치 정보가 필요합니다.",
            buttonNeutral: "나중에 묻기",
            buttonNegative: "취소",
            buttonPositive: "허용",
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("위치 정보 접근 권한 획득!");
        } else {
          console.log("위치 정보 접근 권한 거부됨");
        }
      } catch (err) {
        console.warn(err);
      }
    }

    requestLocationPermission();

    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      },
      error => {
        console.error(error);
      },
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 },
    );
  }, []);
  return (
    <View style={styles.container}>
      <Text>내 주변</Text>
      <View style={styles.mapContainer}>
        <CustomMap region={region} />
      </View>
    </View>
  );
};

// 레이아웃을 보기 위한 임시 css입니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginVertical: 8,
  },
  mapContainer: {
    flex: 1,
  },
});

export default NearByTheme;
