import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  PermissionsAndroid,
  StyleSheet,
  Text,
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
import {
  useNavigation,
  useIsFocused,
  useFocusEffect,
} from "@react-navigation/native";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeListState } from "../../../../recoil/theme/theme";
import { ThemeType } from "../../../../recoil/theme/theme";
import {
  getThemeDetail,
  getThemeSearch,
  getUpdateNearByThemeList,
  useGetThemeList,
  useUpdateNearByThemeList,
} from "../../../../recoil/theme/themeFeature";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationOn from "../../../../assets/icons/icon-location-on.png";
import ThemeDetailScreen from "../../../ThemeDetailScreen/ThemeDetailScreen";
import Search from "../../../../assets/icons/icon-sarch.png";
import SearchListModal from "./SearchListModal";
import { themeNearByList } from "../../../../recoil/theme/theme";
import { API_URL } from "../../../../constants/urls";
import axios from "axios";
import SearchFilter from "./SearchFilter";
import { searchResultsState } from "../../../../recoil/search/search";
import { locationState, myRegionState } from "../../../../recoil/map/map";
import { ListViewButton, MapContainer } from "./SearchScreenMapBottomStyle";
import MyLocationIcon from "../../../../assets/icons/icon-marker-red.png";
import ThemeLocationIcon from "../../../../assets/icons/icon-marker-main5.png";

const SearchServicePath = `/search-service`;
const ThemeAPI = "/themes";

const Stack = createNativeStackNavigator();

const SearchScreenMapBottom = () => {
  // const [themeList, setThemeList] = useState([]);
  const [themeList, setThemeList] = useRecoilState(themeListState);
  const navigation = useNavigation();
  // const isFocused = useIsFocused();
  const [listModalVisible, setListModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarkerData, setSelectedMarkerData] = useState();
  const [region, setRegion] = useRecoilState(locationState);
  // 이 아래는 테마 위치
  const [myRegion, setMyRegion] = useRecoilState(myRegionState);

  //이것은 내 위치
  const [myLocation, setMyLocation] = useState();

  const fetchThemes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}${SearchServicePath}${ThemeAPI}/searches?page=&size=100`,
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

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true); // 스크린이 포커스를 받을 때 마다 모달 상태를 true로 설정
    }, []),
  );

  useEffect(() => {
    fetchThemes();
  }, []);
  const handleThemeSelect = (themeId: string) => {
    navigation.navigate("themeDetail");
    console.log("themeId는", { themeId: themeId });
  };

  const handleMarkerPress = markerData => {
    setSelectedMarkerData(markerData);
    setModalVisible(true);
  };

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
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      },
      error => {
        console.error("지도 불러오기 실패(위치 권한 실패)", error);
      },
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 30000 },
    );
  }, []);

  return (
    <View>
      {/* <Input label="테마 검색" icon={Search} /> */}
      <SearchFilter />
      <MapContainer>
        <CustomMap region={myRegion} style={{ height: 630 }}>
          {myLocation && (
            <Marker
              image={MyLocationIcon}
              coordinate={myLocation}
              title="내 위치"
            />
          )}
          {!isLoading &&
            themeList.map(theme => (
              <Marker
                image={ThemeLocationIcon}
                key={theme.themeId}
                coordinate={{
                  latitude: theme.latitude,
                  longitude: theme.longitude,
                }}
                title={theme.title || "검색 위치"}
                onPress={() => handleMarkerPress(theme)}
              />
            ))}
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
                  onPress={() => handleThemeSelect(selectedMarkerData.themeId)}
                  poster={selectedMarkerData.poster}
                  venue={selectedMarkerData.venue}
                  ratingScore={selectedMarkerData.ratingScore}
                  reviewCount={selectedMarkerData.reviewCount}
                  level={selectedMarkerData.level}
                  genre={selectedMarkerData.genre}
                  priceList={selectedMarkerData.priceList.price}
                  minHeadcount={selectedMarkerData.minHeadCount}
                  maxHeadcount={selectedMarkerData.maxHeadCount}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        )}
        <ListViewButton>
          <CustomButton
            mode="selected"
            value="리스트로 보기"
            onPress={() => setListModalVisible(true)}
          />
        </ListViewButton>
      </MapContainer>
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

export default SearchScreenMapBottom;
