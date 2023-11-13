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
import { themeNearByList } from "../../../../recoil/theme/theme";

const NearByTheme = () => {
  // const [markers, setMarkers] = useRecoilState(themeNearByList);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleMarkerPress = markerData => {
    setSelectedMarker(markerData);
    setModalVisible(true);
  };

  ///dummy
  useEffect(() => {
    //   const fetchThemeData = async () => {
    //     getThemeSearch({
    //       keyword: "원하는 키워드",
    //       page: 1,
    //       size: 10,
    //     });
    //   };

    //   fetchThemeData();
    // }, []);
    // 더미 데이터를 사용하여 마커 설정
    const dummyData = {
      data: [
        {
          id: "eTHntosBdUGVeOMUXDR3",
          venue: "마스터키 플레이포인트랩강남점",
          title: "리허설",
          poster:
            "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/리허설_84169924.gif",
          level: 4.0,
          minHeadcount: 2,
          maxHeadcount: 6,
          priceList: null,
          timeLimit: null,
          latitude: 37.5008831,
          longitude: 127.027485,
        },
        {
          id: "dTHntosBdUGVeOMUQDTg",
          venue: "마스터키 해운대 블루오션스테이션",
          title: "리허설",
          poster:
            "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/리허설_23761838.gif",
          level: 4.0,
          minHeadcount: 2,
          maxHeadcount: 6,
          priceList: null,
          timeLimit: null,
          latitude: 35.1629768,
          longitude: 129.158492,
        },
        {
          id: "PppbxosB2bv_Fhtj6wSF",
          venue: "마스터키 천안두정점",
          title: "경찰서를 털어라",
          poster:
            "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/경찰서를 털어라_73260549.jpg",
          level: 3.0,
          minHeadcount: 2,
          maxHeadcount: 6,
          priceList: null,
          timeLimit: null,
          latitude: 36.8339795,
          longitude: 127.1367309,
        },
        {
          id: "9JpbxosB2bv_FhtjhAOC",
          venue: "마스터키 강남프라임",
          title: "Do The G",
          poster:
            "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/Do The G_21189403.png",
          level: 3.0,
          minHeadcount: 2,
          maxHeadcount: 4,
          priceList: null,
          timeLimit: null,
          latitude: 37.5008831,
          longitude: 127.027485,
        },
        {
          id: "GZpbxosB2bv_FhtjswSL",
          venue: "마스터키 천안신부점",
          title: "터널",
          poster:
            "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/터널_52402111.jpg",
          level: 3.0,
          minHeadcount: 2,
          maxHeadcount: 6,
          priceList: null,
          timeLimit: null,
          latitude: 36.8183413,
          longitude: 127.1553078,
        },
        {
          id: "9ZpbxosB2bv_FhtjhAOC",
          venue: "마스터키 강남프라임",
          title: "어웨이큰",
          poster:
            "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/어웨이큰_14869136.png",
          level: 5.0,
          minHeadcount: 2,
          maxHeadcount: 5,
          priceList: null,
          timeLimit: null,
          latitude: 37.5008831,
          longitude: 127.027485,
        },
        {
          id: "G5pbxosB2bv_FhtjswSL",
          venue: "마스터키 천안신부점",
          title: "트러브메이커",
          poster:
            "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/트러브메이커_57557775.jpg",
          level: 3.0,
          minHeadcount: 2,
          maxHeadcount: 6,
          priceList: null,
          timeLimit: null,
          latitude: 36.8183413,
          longitude: 127.1553078,
        },
      ],
    };
    setMarkers(dummyData.data);
  }, []);

  // default를 서울로 지정했습니다!
  const [region, setRegion] = useState<Region>({
    latitude: 37.5665,
    longitude: 126.978,
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
      <Text>내 주변</Text>
      <View style={styles.mapContainer}>
        <CustomMap region={region} style={styles.map}>
          {/* 각 마커에 클릭 이벤트 연결 */}
          {markers.map((markerData, index) => (
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
          onPress={() => navigation.navigate("searchStack")}
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
    minHeight: 300,
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
