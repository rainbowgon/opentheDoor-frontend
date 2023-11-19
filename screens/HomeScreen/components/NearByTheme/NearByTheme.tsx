import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
// import Input from "../../../../components/Input/Input";
import Geolocation from "@react-native-community/geolocation";
import CustomMap from "../../../../components/Maps/Map";
import { useNavigation } from "@react-navigation/native";
import CustomFab from "../../../../components/Fab/Fab";
import Zoomicon from "../../../../assets/icons/icon-zoom.png";
import SearchScreen from "../../../SearchScreen/SearchScreen";

import { PermissionsAndroid } from "react-native";
import { Region, Marker } from "react-native-maps";

// apis
import getThemeSearch from "../../../../recoil/theme/themeFeature";
import { useRecoilState } from "recoil";
import {
  themeListState,
  themeNearByList,
} from "../../../../recoil/theme/theme";
import { HomeScreenTitle, HomeScreenTitleView } from "../../HomeScreenStyle";
import { locationState } from "../../../../recoil/map/map";

const NearByTheme = () => {
  // const [markers, setMarkers] = useRecoilState(themeNearByList);
  const [themeList, setThemeList] = useRecoilState(themeListState);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleMarkerPress = markerData => {
    setSelectedMarker(markerData);
    setModalVisible(true);
  };

  const [region, setRegion] = useRecoilState(locationState);

  useEffect(() => {
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            // NOTE 사실 이게 왜 필요한지 모르겠습니다. / device측에서 권한을 받아오는데요
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
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 30000 },
    );
  }, []);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HomeScreenTitleView>
        <HomeScreenTitle>내 주변</HomeScreenTitle>
      </HomeScreenTitleView>
      <View style={styles.mapContainer}>
        <CustomMap
          region={region}
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}>
          {region && <Marker coordinate={region} title="내 위치" />}
          {themeList.map((markerData, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: markerData.latitude,
                longitude: markerData.longitude,
              }}
              title={markerData.title}
              onPress={() => handleMarkerPress(markerData)}
            />
          ))}
        </CustomMap>
        <CustomFab
          icon={Zoomicon}
          style={styles.buttonContainer}
          onPress={() => {
            // 현재 위치를 가져와서 데이터 갱신
            Geolocation.getCurrentPosition(
              position => {
                const newRegion = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                };
                setRegion(newRegion);
              },
              error => {
                console.error("위치 정보를 받아오는데 실패했습니다.", error);
              },
              { enableHighAccuracy: true, timeout: 300000, maximumAge: 300000 },
            );

            // 이 상태로 searchScreen으로 이동해요
            navigation.navigate("searchBottomTab");
          }}
        />
      </View>
    </View>
  );
};

// 레이아웃을 보기 위한 임시 css입니다
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
  map: {
    minHeight: 200,
    minWidth: 400,
  },
  buttonContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
});

export default NearByTheme;
