import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from "@react-navigation/native";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import "react-native-gesture-handler";

// components
import AdminRightNavigation from "./components/_admin/_AdminRightNavigation/AdminRightNavigation";

// screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import MypageScreen from "./screens/MypageScreen/MypageScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

  // TODO - stack navigation

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  function SearchStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="search"
          component={SearchScreen}
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
      </Stack.Navigator>
    );
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        {/* <Tab.Navigator>
          <Tab.Screen
            name="homeStack"
            component={HomeStack}
            options={{ title: "homeStack", headerShown: false }}
          />
          <Tab.Screen
            name="searchStack"
            component={SearchStack}
            options={{ title: "searchStack", headerShown: false }}
          />
          <Tab.Screen
            name="mypageStack"
            component={MypageStack}
            options={{ title: "mypageStack", headerShown: false }}
          />
        </Tab.Navigator> */}
        {/* FIXME - 어드민 기능 사용 (주석 필수) */}
        <AdminRightNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
};
export default App;
