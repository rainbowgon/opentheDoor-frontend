import React, { useEffect } from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";

// [ADMIN] components
import AdminRightNavigation from "./components/_admin/_AdminRightNavigation/AdminRightNavigation";

// screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import MypageScreen from "./screens/MypageScreen/MypageScreen";
import { Container } from "./styles/commonStyles";
import { getThemeRanking } from "./recoil/theme/themeFeature";

// type RootStackParamList = {
//   Home: undefined;
//   Search: {
//     id: number;
//   };
//   Mypage: undefined;
// };

// firebase
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log("[Background Remote Message]", remoteMessage);
});

const App = () => {
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log("[FCM Token] ", fcmToken);
  };

  useEffect(() => {
    getFcmToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("[Remote Message] ", JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);


  useEffect(() => {
    // getThemeRanking;
  }, []);

  return (
    <RecoilRoot>
      <Container>
        <NavigationContainer>
          {/* <BottomNavigator /> */}
          {/* FIXME - 어드민 기능 사용 (주석 필수) */}
          <AdminRightNavigation />
        </NavigationContainer>
      </Container>
    </RecoilRoot>
  );
};
export default App;
