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
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { themeState } from "../../../../recoil/theme/theme";
import { getThemeDetail } from "../../../../recoil/theme/themeFeature";

const SearchScreenMap = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const navigation = useNavigation();

  const [markers, setMarkers] = useState([]);
  // const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);

  const handleThemeSelect = async (themeId: string) => {
    // getThemeDetail;
    // navigation.navigate("themeDetail");
    // console.log("themeId는", themeId);
    console.log("나는바보다");
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
          themeId: "eTHntosBdUGVeOMUXDR3",
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
          themeId: "dTHntosBdUGVeOMUQDTg",
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
          themeId: "PppbxosB2bv_Fhtj6wSF",
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
          themeId: "9JpbxosB2bv_FhtjhAOC",
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
          themeId: "GZpbxosB2bv_FhtjswSL",
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
          themeId: "9ZpbxosB2bv_FhtjhAOC",
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
          themeId: "G5pbxosB2bv_FhtjswSL",
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
        console.error("위치 정보를 받아오는데 실패했습니다.", error);
      },
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 30000 },
    );
  }, []);

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
      <Header />
      <Input label="테마 검색" />
      <View>
        <CustomMap region={region} style={{ height: 630 }}>
          {/* {searchResults.map((location, index) => ( */}
          {markers.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title || "검색 위치"}
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
            {/* selectedMarkerData를 InfoCard에 전달 */}
            {/* <InfoCard {...selectedMarkerData} /> */}
            <InfoCard
              {...selectedMarkerData}
              onPress={console.log("나는바보다")}
            />
            <CustomButton mode="selected" value="리스트로 보기" />
          </View>
        </Modal>
      </View>
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

export default SearchScreenMap;
