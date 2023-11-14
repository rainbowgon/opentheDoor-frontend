import * as React from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  // TODO - stack navigation

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
          name="themeDetail"
          component={ThemeDetailScreen}
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
        <Stack.Screen
          name="themeDetail"
          component={ThemeDetailScreen}
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
          bottom: 60,
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
