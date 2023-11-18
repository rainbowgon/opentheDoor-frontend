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
import InfoCard from "../../../../components/InfoCard/InfoCard";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../../../../recoil/search/search";

const SearchResultMap = () => {
  const [searchText, setSearchText] = useState("");
  const searchResults = useRecoilValue(searchResultsState);
  const [region, setRegion] = useState({
    latitude: 37.5013,
    longitude: 127.0396781,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderMarkers = () => {
    return searchResults.map((result, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: result.latitude,
          longitude: result.longitude,
        }}
        title={result.title || "검색 위치"}
        // 추가적인 마커 옵션
      />
    ));
  };
  const executeSearch = async () => {
    try {
      const results = await getThemeSearch({ keyword: searchText });
      setSearchResults(results);
    } catch (error) {
      console.error("테마 검색 중 오류 발생", error);
    }
  };

  useEffect(() => {
    // 요청한 위치 정보 접근 권한
    const requestLocationPermission = async () => {
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
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    // 현재 위치 정보 가져오기
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          ...region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.error("위치 정보를 받아오는데 실패했습니다.", error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  const handleMarkerPress = markerData => {
    setSelectedMarkerData(markerData);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <CustomMap region={region} style={{ height: 1000 }}>
        {renderMarkers()}
      </CustomMap>

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
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    height: 350,
    maxHeight: 400,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default SearchResultMap;
