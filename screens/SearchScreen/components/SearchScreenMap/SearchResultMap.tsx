import React, { useEffect, useState } from "react";
import {
  Modal,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import CustomMap from "../../../../components/Maps/Map";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../../../../recoil/search/search";
import InfoCard from "../../../../components/InfoCard/InfoCard";
import CustomButton from "../../../../components/Button/CustomButton";

const SearchResultMap = () => {
  const searchResults = useRecoilValue(searchResultsState);
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [listModalVisible, setListModalVisible] = useState(false);
  const [region, setRegion] = useState({
    latitude: 37.5013,
    longitude: 127.0396781,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    async function requestLocationPermission() {
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
    }

    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (searchResults.length > 0) {
      // 모든 마커의 위치를 기준으로 중심 위치 계산
      let minLat = Number.MAX_VALUE;
      let maxLat = -Number.MAX_VALUE;
      let minLng = Number.MAX_VALUE;
      let maxLng = -Number.MAX_VALUE;

      searchResults.forEach(item => {
        minLat = Math.min(minLat, item.latitude);
        maxLat = Math.max(maxLat, item.latitude);
        minLng = Math.min(minLng, item.longitude);
        maxLng = Math.max(maxLng, item.longitude);
      });

      const midLat = (minLat + maxLat) / 2;
      const midLng = (minLng + maxLng) / 2;
      const latDelta = maxLat - minLat;
      const lngDelta = maxLng - minLng;

      setRegion({
        latitude: midLat,
        longitude: midLng,
        latitudeDelta: latDelta,
        longitudeDelta: lngDelta,
      });
    }
  }, [searchResults]);

  const handleMarkerPress = item => {
    setSelectedMarkerData(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {region && (
        <CustomMap region={region} style={styles.map}>
          {searchResults.map((item, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}
              pinColor="#BAB2FFFF"
              onPress={() => handleMarkerPress(item)}
            />
          ))}
        </CustomMap>
      )}

      {selectedMarkerData && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}>
            <View style={styles.modalView}>
              <InfoCard
                themeId={selectedMarkerData.themeId}
                title={selectedMarkerData.title}
                // 필요한 다른 props 추가
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      <View style={styles.listbutton}>
        <CustomButton
          mode="selected"
          value="리스트로 보기"
          onPress={() => setListModalVisible(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // backgroundColor: "white",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    padding: 20,
    height: 350,
    maxHeight: 400, // 또는 구체적인 높이 값으로 설정, 예: 200
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2, // 그림자 방향 (위로)
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 20,
  },
  modalContainer: {
    position: "absolute", // 절대 위치
    bottom: 0, // 화면 하단에 위치
    left: 0, // 왼쪽 정렬
    right: 0, // 오른쪽 정렬
    height: "30%", // 모달의 높이 (화면의 30%를 차지)
    backgroundColor: "white", // 배경색
    borderTopLeftRadius: 20, // 상단 왼쪽 모서리 둥글게
    borderTopRightRadius: 20, // 상단 오른쪽 모서리 둥글게
    padding: 20, // 내부 여백
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
  },
  listbutton: {
    bottom: 100,
  },
});

export default SearchResultMap;
