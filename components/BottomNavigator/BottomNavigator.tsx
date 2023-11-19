import React, { useCallback, useEffect } from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import messaging from "@react-native-firebase/messaging";

// style
import { theme } from "../../styles/colors";

// icons
import HomeOn from "../../assets/icons/icon-home-on.png";
import HomeClose from "../../assets/icons/icon-home-off.png";
import DoorOpen from "../../assets/icons/icon-door-open.png";
import DoorClose from "../../assets/icons/icon-door-close.png";
import PersonOn from "../../assets/icons/icon-person-on.png";
import PersonOff from "../../assets/icons/icon-person-off.png";

// screens
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import MypageScreen from "../../screens/MypageScreen/MypageScreen";
import AlarmScreen from "../../screens/AlarmScreen/AlarmScreen";
import BookmarkListScreen from "../../screens/BookmarkListScreen/BookmarkListScreen";
import CompareThemeScreen from "../../screens/CompareThemeScreen/CompareThemeScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import ProfileUpdateScreen from "../../screens/ProfileUpdateScreen/ProfileUpdateScreen";
import RankingScreen from "../../screens/RankingScreen/RankingScreen";
import RecordScreen from "../../screens/RecordScreen/RecordScreen";
import ReservationListScreen from "../../screens/ReservationListScreen/ReservationListScreen";
import ReservationScreen from "../../screens/ReservationScreen/ReservationScreen";
import ReservationWaitingScreen from "../../screens/ReservationWaitingScreen/ReservationWaitingScreen";
import ReviewScreen from "../../screens/ReviewScreen/ReviewScreen";
import SettingScreen from "../../screens/SettingScreen/SettingScreen";
import SignUpScreen from "../../screens/SignUpScreen/SignUpScreen";
import ThemeDetailScreen from "../../screens/ThemeDetailScreen/ThemeDetailScreen";
import { BorderlessButton } from "react-native-gesture-handler";
import KakaoLoginScreen from "../../screens/KakaoLoginScreen/KakaoLoginScreen";
import SearchScreenBottomTab from "../../screens/SearchScreen/SearchScreenBottomTab";
import SearchResultScreen from "../../screens/SearchScreen/SearchResultScreen";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { themeNearByList, themeRankListState } from "../../recoil/theme/theme";
import { API_URL } from "../../constants/urls";
import axios from "axios";
import { getThemeRanking } from "../../recoil/theme/themeFeature";
import { userFcmToken } from "../../recoil/member/member";
import { BottomBarState } from "../../recoil/state/state";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const [fcmToken, setFcmToken] = useRecoilState(userFcmToken);
  const setNearByTheme = useSetRecoilState(themeNearByList);

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    setFcmToken(fcmToken);
    console.log("[FCM Token] in bottom Navigator : ", fcmToken);
  };

  useEffect(() => {
    getFcmToken();
  }, []);

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ranking"
          component={RankingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="setting"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="alarm"
          component={AlarmScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="themeDetail"
          component={ThemeDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="reservation"
          component={ReservationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  function SearchStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="searchBottomTab"
          component={SearchScreenBottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="searchResult"
          component={SearchResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="themeDetail"
          component={ThemeDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="reservation"
          component={ReservationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  function MypageStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="mypage"
          component={MypageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="kakaoLogin"
          component={KakaoLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  const bottomBarState = useRecoilValue(BottomBarState);
  const setThemeRankList = useSetRecoilState(themeRankListState);

  const SearchServicePath = `/search-service`;
  const ThemeAPI = "/themes";

  const handleBottomBarPos = () => {
    if (bottomBarState.isBottomBar === "TRUE") {
      return 60;
    }
    return 0;
  };

  const SettingThemeRank = useCallback(async () => {
    // if (loading) {
    //   return;
    // }

    try {
      // setLoading(true);
      const response = await axios.get(
        `${API_URL}${SearchServicePath}${ThemeAPI}/rankings`,
      );

      console.log("테마 상세 조회 성공", response.data);
      setThemeRankList(response.data.data);
      // await getThemeRanking();
    } catch (error) {
      console.error("테마 상세 조회 실패", error);
    } finally {
    }

    try {
      // setLoading(true);
      const curKeyword = "";
      const curPage = 1;
      const curSize = 3;

      const response = await axios
        .get(`${API_URL}${SearchServicePath}${ThemeAPI}/searches`)
      console.log("테마 검색 성공", response.data);
      setNearByTheme(response.data.data);
      console.log("테마 검색 결과 삽입 성공");
    } catch (error) {
      console.error("테마 검색 실패", error);
    } finally {
    }
  }, []);

  useEffect(() => {
    console.log("useEffect : SettingThemeRank");
    SettingThemeRank();
    console.log("useEffect : LoginTapped");
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: `${theme.primary3_main}`,
        tabBarInactiveTintColor: `${theme.background2}`,
        tabBarStyle: {
          borderBlockColor: `${theme.transparent}`,
          borderRadius: 10,
          backgroundColor: `${theme.background4}`,
          height: 60,
          paddingTop: 5,
          paddingBottom: 10,
          bottom: handleBottomBarPos(),
        },
      }}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={HomeOn}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme.primary3_main,
                }}
              />
            ) : (
              <Image
                source={HomeClose}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme.background2,
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="searchStack"
        component={SearchStack}
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={DoorOpen}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme.primary3_main,
                }}
              />
            ) : (
              <Image
                source={DoorClose}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme.background2,
                }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="mypageStack"
        component={MypageStack}
        options={{
          title: "mypage",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={PersonOn}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme.primary3_main,
                }}
              />
            ) : (
              <Image
                source={PersonOff}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: theme.background2,
                }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
