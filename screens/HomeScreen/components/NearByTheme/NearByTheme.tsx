import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
// import Input from "../../../../components/Input/Input";
import Geolocation from "@react-native-community/geolocation";
import CustomMap from "../../../../components/Maps/Map";
import { useNavigation } from "@react-navigation/native";
import CustomFab from "../../../../components/Fab/Fab";
import Zoomicon from "../../../../assets/icons/icon-zoom.png";
import SearchScreen from "../../../SearchScreen/SearchScreen";
import MyLocationIcon from "../../../../assets/icons/icon-marker-red.png";
import ThemeLocationIcon from "../../../../assets/icons/icon-marker-main5.png";

import { PermissionsAndroid } from "react-native";
import { Region, Marker } from "react-native-maps";

// apis
import getThemeSearch, {
  getUpdateNearByThemeList,
} from "../../../../recoil/theme/themeFeature";
import { useRecoilState } from "recoil";
import {
  themeListState,
  themeNearByList,
} from "../../../../recoil/theme/theme";
import { HomeScreenTitle, HomeScreenTitleView } from "../../HomeScreenStyle";
import { isFabState, locationState } from "../../../../recoil/map/map";
import InfoCard from "../../../../components/InfoCard/InfoCard";
import MiniInfoCard from "../../../../components/MiniInfoCard/MiniInfoCard";
import axios from "axios";
import { API_URL } from "../../../../constants/urls";

const SearchServicePath = `/search-service`;
const ThemeAPI = "/themes";

const NearByTheme = () => {
  // const [markers, setMarkers] = useRecoilState(themeNearByList);
  const [nearByTheme, setNearByTheme] = useRecoilState(themeListState);
  const [isFab, setIsFab] = useRecoilState(isFabState);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleMarkerPress = markerData => {
    setSelectedMarker(markerData);
    setModalVisible(true);
  };
  const [region, setRegion] = useRecoilState(locationState);

  async function getUpdateNearByThemeList() {
    setIsLoading(true);
    try {
      const curKeyword = null;
      const curPage = null;
      const curSize = 10;
      const curHeadcount = null;
      const curRegion = null;
      const curSortBy = "DISTANCE";

      const response = await axios.get(
        `${API_URL}${SearchServicePath}${ThemeAPI}/sorts?sortBy=${curSortBy}`,
      );

      console.log("테마 검색 성공", response.data);
      // setNearByTheme(response.data.data);
      setIsLoading(false);
      const nearTheme = response.data.data;
      console.log(
        "###############################################",
        // nearByTheme,
      );
    } catch (error) {
      console.error("내 주변 테마 검색 실패", error);
      setIsLoading(false);
    }
  }

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
        getUpdateNearByThemeList();
      },
      error => {
        console.error("지도 불러오기 실패(위치 권한 실패)", error);
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
          {region && (
            <Marker icon={MyLocationIcon} coordinate={region} title="내 위치" />
          )}
          {!isLoading &&
            Array.isArray(nearByTheme) &&
            nearByTheme.map((markerData, index) => (
              <Marker
                icon={ThemeLocationIcon}
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
                setIsFab(true);
              },
              error => {
                console.error("위치 정보를 받아오는데 실패했습니다.", error);
              },
              { enableHighAccuracy: true, timeout: 300000, maximumAge: 300000 },
            );
            navigation.navigate("searchBottomTab");
          }}
        />
      </View>
      {!isLoading &&
        Array.isArray(nearByTheme) &&
        nearByTheme
          .slice(0, 3)
          .map(theme => (
            <MiniInfoCard
              key={theme.themeId}
              themeId={theme.themeId}
              venue={theme.venue}
              title={theme.title}
              poster={theme.poster}
              level={theme.level}
              priceList={theme.priceList}
              minHeadcount={theme.minHeadcount}
              maxHeadcount={theme.maxHeadcount}
              timeLimit={theme.timeLimit}
              genre={theme.genre}
              ratingScore={theme.ratingScore}
              reviewCount={theme.reviewCount}
              bookmarkCount={theme.bookmarkCount}
            />
          ))}
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
