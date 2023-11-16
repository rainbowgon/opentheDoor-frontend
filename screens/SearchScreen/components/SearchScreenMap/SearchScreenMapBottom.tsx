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
import { useRecoilState } from "recoil";
import { themeListState } from "../../../../recoil/theme/theme";
import { ThemeType } from "../../../../recoil/theme/theme";
import {
  getThemeDetail,
  getUpdateNearByThemeList,
  useGetThemeList,
  useUpdateNearByThemeList,
} from "../../../../recoil/theme/themeFeature";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThemeDetailScreen from "../../../ThemeDetailScreen/ThemeDetailScreen";
import Search from "../../../../assets/icons/icon-sarch.png";
import SearchListModal from "./SearchListModal";
import { themeNearByList } from "../../../../recoil/theme/theme";

const Stack = createNativeStackNavigator();

const SearchScreenMapBottom = () => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // 즉시 실행 함수를 사용하여 비동기 로직 처리
  //     (async () => {
  //       await useGetThemeList();
  //     })();

  //     return () => {
  //       // 포커스가 사라질 때 실행할 정리(clean-up) 로직이 있다면 여기에 작성
  //     };
  //   }, []),
  // );
  useGetThemeList();
  const [themeList, setThemeList] = useRecoilState(themeListState);
  // const [themeList, setThemeList] = useRecoilState(themeNearByList);
  const navigation = useNavigation();
  // const isFocused = useIsFocused();
  const [listModalVisible, setListModalVisible] = useState(false);

  // const [markers, setMarkers] = useState([]);
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

  useEffect(() => {
    console.log("###################################themeList:", themeList);
    console.log(
      "###################################themeList:",
      typeof themeList,
    );

    // 여기서 nearByTheme이 배열이고, 항목이 있는지 확인합니다.
    // 필요한 경우 여기에서 추가 로직을 실행할 수 있습니다.
  }, [themeList]);

  const initialRegion = {
    latitude: 37.5642135,
    longitude: 127.0016985,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [searchResults, setSearchResults] = useState([]);

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
  };
  return (
    <View>
      {/* <Header /> */}
      <Input label="테마 검색" icon={Search} />
      <View>
        <CustomMap region={initialRegion} style={{ height: 630 }}>
          {/* {searchResults.map((location, in]6dex) => ( */}
          {/* <Marker coordinate={region} title="내 위치" /> */}
          {/* {themeList &&
            themeList.map(theme => (
              <Marker
                key={theme.themeId}
                coordinate={{
                  latitude: theme.latitude,
                  longitude: theme.longitude,
                }}
                title={theme.title || "검색 위치"}
                pinColor="#BAB2FFFF"
                onPress={() => handleMarkerPress(theme)}
              />
            ))} */}

          {/* <View>
            {themeList.map(theme => {
              console.log(theme);
              return <Text>{theme.latitude}</Text>; 
            })}
          </View> */}
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
            {/* selectedMarkerData를 InfoCard에 전달 */}
            {/* <InfoCard {...selectedMarkerData} /> */}
            <InfoCard
              {...selectedMarkerData}
              onPress={() => handleThemeSelect(selectedMarkerData.themeId)}
            />
            <CustomButton
              mode="selected"
              value="리스트로 보기"
              onPress={() => setListModalVisible(true)}
            />
          </View>
        </Modal>
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
  // modalView: {
  //   position: "absolute",
  //   bottom: 0,
  //   height: "100%",
  //   width: "100%", // 모달이 화면의 전체 너비를 차지하도록
  //   // backgroundColor: "white",
  //   borderTopLeftRadius: 20, // 상단 좌우 모서리를 둥글게
  //   borderTopRightRadius: 20,
  //   padding: 20, // 내부 패딩
  //   maxHeight: "40%", // 모달의 최대 높이 제한
  //   // shadowColor: "#000", // 그림자 색상
  //   shadowOffset: {
  //     width: 0,
  //     height: 2, // 그림자 방향 (아래로)
  //   },
  //   // shadowOpacity: 0.25, // 그림자 투명도
  //   // shadowRadius: 3.84, // 그림자 블러 반경
  //   // elevation: 5, // 안드로이드 전용 그림자 설정
  // },
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
});

export default SearchScreenMapBottom;
