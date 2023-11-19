import React, { useEffect, useState } from "react";
import {
  Modal,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Marker, Region } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import CustomMap from "../../../../components/Maps/Map";
import Input from "../../../../components/Input/Input";
import Header from "../../../../components/Header/Header";
import PageContainer from "../../../../styles/commonStyles";
import InfoCard from "../../../../components/InfoCard/InfoCard";
import CustomButton from "../../../../components/Button/CustomButton";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { themeListState } from "../../../../recoil/theme/theme";
import { getThemeDetail } from "../../../../recoil/theme/themeFeature";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThemeDetailScreen from "../../../ThemeDetailScreen/ThemeDetailScreen";
import Search from "../../../../assets/icons/icon-sarch.png";
import SearchListModal from "./SearchListModal";
import { API_URL } from "../../../../constants/urls";
import axios from "axios";

const Stack = createNativeStackNavigator();
const SearchServicePath = `/search-service`;
const ThemeAPI = "/themes";

export async function getThemeSearch({ keyword = "", page = 1, size = 10 }) {
  try {
    const response = await axios.get(
      `${API_URL}${SearchServicePath}${ThemeAPI}/searches?keyword=${keyword}&page=${page}&size=${size}`,
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

const SearchScreenMap = () => {
  const [themeList, setThemeList] = useRecoilState(themeListState);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [listModalVisible, setListModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fetchThemes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}${SearchServicePath}${ThemeAPI}/sorts?sortBy=DISTANCE&size=100`,
      );
      const themes = response.data.data.map(theme => ({
        ...theme,
        latitude: parseFloat(theme.latitude),
        longitude: parseFloat(theme.longitude),
      }));
      setThemeList(themes);
      setIsLoading(false); // 로딩 완료

      // API 요청 완료 후 로그 출력
      console.log("themeList:", themes);
    } catch (error) {
      console.error("테마 검색 에러", error);
      setIsLoading(false); // 로딩 완료
    }
  };

  useEffect(() => {
    fetchThemes();
  }, []);

  const [markers, setMarkers] = useState([]);
  // const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarkerData, setSelectedMarkerData] = useState();

  const handleThemeSelect = (themeId: string) => {
    // getThemeDetail;
    navigation.navigate("themeDetail");
    console.log("themeId는", { themeId: themeId });
  };

  const handleMarkerPress = markerData => {
    setSelectedMarkerData(markerData);
    setModalVisible(true);
  };

  // const [searchResults, setSearchResults] = useState([]);
  const [region, setRegion] = useState<Region>({
    latitude: 37.5013,
    longitude: 127.0396781,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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

    if (isFocused) {
      requestLocationPermission();

      Geolocation.getCurrentPosition(
        position => {
          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
          console.log("위치 정보 받아오기 성공!");
        },
        error => {
          console.error("위치 정보를 받아오는데 실패했습니다.", error);
        },
        { enableHighAccuracy: false, timeout: 30000, maximumAge: 30000 },
      );
    }
  }, [isFocused]);

  const [searchResults, setSearchResults] = useState([]);

  const executeSearch = async () => {
    try {
      const results = await getThemeSearch({ keyword: searchText });
      setSearchResults(results);
    } catch (error) {
      console.error("테마 검색 중 오류 발생", error);
    }
  };

  const handleSearch = searchData => {
    // 검색 데이터를 상태에 설정합니다.
    setSearchResults(searchData);

    // 검색된 장소들을 포함하는 지도 범위를 계산
    let minLat = Number.MAX_VALUE;
    let maxLat = -Number.MAX_VALUE;
    let minLng = Number.MAX_VALUE;
    let maxLng = -Number.MAX_VALUE;

    searchData.forEach(location => {
      minLat = Math.min(minLat, location.latitude);
      maxLat = Math.max(maxLat, location.latitude);
      minLng = Math.min(minLng, location.longitude);
      maxLng = Math.max(maxLng, location.longitude);
    });

    // 지도 중심을 계산합 (위도 경도 교차점)
    const midLat = (minLat + maxLat) / 2;
    const midLng = (minLng + maxLng) / 2;

    // 지도 범위를 계산
    const latDelta = maxLat - minLat;
    const lngDelta = maxLng - minLng;

    // 지도 업데이트
    setRegion({
      latitude: midLat,
      longitude: midLng,
      latitudeDelta: latDelta,
      longitudeDelta: lngDelta,
    });
  };
  return (
    <View>
      {/* <Header /> */}
      <Input label="테마 검색" icon={Search} />
      <View>
        <CustomMap region={region} style={{ height: 630 }}>
          <Marker coordinate={region} />
          {!isLoading &&
            themeList.map((location, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title={location.title || "검색 위치"}
                pinColor="#BAB2FFFF"
                onPress={() => handleMarkerPress(location)}
              />
            ))}
        </CustomMap>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => {
              setModalVisible(false);
            }}></TouchableOpacity>
          <View style={styles.modalView}>
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
                      onPress={() =>
                        handleThemeSelect(selectedMarkerData.themeId)
                      }
                      poster={selectedMarkerData.poster}
                      venue={selectedMarkerData.venue}
                      ratingScore={selectedMarkerData.ratingScore}
                      reviewCount={selectedMarkerData.reviewCount}
                    />
                  </View>
                </TouchableOpacity>
              </Modal>
            )}
          </View>
        </Modal>
        <View style={styles.listbutton}>
          <CustomButton
            mode="selected"
            value="리스트로 보기"
            onPress={() => setListModalVisible(true)}
          />
        </View>
      </View>
      <SearchListModal
        modalVisible={listModalVisible}
        setModalVisible={setListModalVisible}
      />
    </View>
  );
};

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
    flex: 1,
    height: 1200,
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    height: 350,
    maxHeight: 400,
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2, // 그림자 방향 (위로)
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

export default SearchScreenMap;
