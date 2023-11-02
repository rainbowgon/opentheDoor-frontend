import * as React from 'react';

// screens
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import MypageScreen from '../../screens/MypageScreen/MypageScreen';
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

import { createDrawerNavigator } from "@react-navigation/drawer";

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      screenOptions={{ drawerPosition: "right", headerShown: false }}>
      <RightDrawer.Screen
        name="Home"
        component={HomeScreen}
      />
      <RightDrawer.Screen
        name="Search"
        component={SearchScreen}
      />
      <RightDrawer.Screen
        name="Mypage"
        component={MypageScreen}
      />
      <RightDrawer.Screen
        name="Alarm"
        component={AlarmScreen}
      />
      <RightDrawer.Screen
        name="BookmarkList"
        component={BookmarkListScreen}
      />
      <RightDrawer.Screen
        name="CompareTheme"
        component={CompareThemeScreen}
      />
      <RightDrawer.Screen
        name="Login"
        component={LoginScreen}
      />
      <RightDrawer.Screen
        name="ProfileUpdate"
        component={ProfileUpdateScreen}
      />
      <RightDrawer.Screen
        name="Ranking"
        component={RankingScreen}
      />
      <RightDrawer.Screen
        name="Record"
        component={RecordScreen}
      />
      <RightDrawer.Screen
        name="ReservationList"
        component={ReservationListScreen}
      />
      <RightDrawer.Screen
        name="Reservation"
        component={ReservationScreen}
      />
      <RightDrawer.Screen
        name="ReservationWaiting"
        component={ReservationWaitingScreen}
      />
      <RightDrawer.Screen
        name="Review"
        component={ReviewScreen}
      />
      <RightDrawer.Screen
        name="Setting"
        component={SettingScreen}
      />
      <RightDrawer.Screen
        name="SignUp"
        component={SignUpScreen}
      />
      <RightDrawer.Screen
        name="ThemeDetail"
        component={ThemeDetailScreen}
      />
    </RightDrawer.Navigator>
  );
};

const AdminRightNavigation = () => {

  return (
    <RightDrawerScreen />
  );
};

export default AdminRightNavigation;