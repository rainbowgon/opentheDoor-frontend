import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

// components
import AdminRightNavigation from './components/_AdminFabGroup/AdminRightNavigation';

// screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import MypageScreen from './screens/MypageScreen/MypageScreen';

// test screen
import AlarmScreen from './screens/AlarmScreen/AlarmScreen';
import BookmarkListScreen from './screens/BookmarkListScreen/BookmarkListScreen';
import CompareThemeScreen from './screens/CompareThemeScreen/CompareThemeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileUpdateScreen from './screens/ProfileUpdateScreen/ProfileUpdateScreen';
import RankingScreen from './screens/RankingScreen/RankingScreen';
import RecordScreen from './screens/RecordScreen/RecordScreen';
import ReservationListScreen from './screens/ReservationListScreen/ReservationListScreen';
import ReservationScreen from './screens/ReservationScreen/ReservationScreen';
import ReservationWaitingScreen from './screens/ReservationWaitingScreen/ReservationWaitingScreen';
import ReviewScreen from './screens/ReviewScreen/ReviewScreen';
import SettingScreen from './screens/SettingScreen/SettingScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import ThemeDetailScreen from './screens/ThemeDetailScreen/ThemeDetailScreen';

//test
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

const RightDrawer = createDrawerNavigator();

const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      screenOptions={{ drawerPosition: 'right', headerShown: false }}
    >
      <RightDrawer.Screen name="HomeScreen" component={HomeScreen} />
      <RightDrawer.Screen name="SearchScreen" component={SearchScreen} />
      <RightDrawer.Screen name="MypageScreen" component={MypageScreen} />
      <RightDrawer.Screen name="AlarmScreen" component={AlarmScreen} />
      <RightDrawer.Screen name="BookmarkListScreen" component={BookmarkListScreen} />
      <RightDrawer.Screen name="CompareThemeScreen" component={CompareThemeScreen} />
      <RightDrawer.Screen name="LoginScreen" component={LoginScreen} />
      <RightDrawer.Screen name="ProfileUpdateScreen" component={ProfileUpdateScreen} />
      <RightDrawer.Screen name="RankingScreen" component={RankingScreen} />
      <RightDrawer.Screen name="RecordScreen" component={RecordScreen} />
      <RightDrawer.Screen name="ReservationListScreen" component={ReservationListScreen} />
      <RightDrawer.Screen name="ReservationScreen" component={ReservationScreen} />
      <RightDrawer.Screen name="ReservationWaitingScreen" component={ReservationWaitingScreen} />
      <RightDrawer.Screen name="ReviewScreen" component={ReviewScreen} />
      <RightDrawer.Screen name="SettingScreen" component={SettingScreen} />
      <RightDrawer.Screen name="SignUpScreen" component={SignUpScreen} />
      <RightDrawer.Screen name="ThemeDetailScreen" component={ThemeDetailScreen} />
    </RightDrawer.Navigator>
  );
};


// type RootStackParamList = {
//   Home: undefined;
//   Search: {
//     id: number;
//   };
//   Mypage: undefined;
// };

// firebase
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('[Background Remote Message]', remoteMessage);
});

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('[FCM Token] ', fcmToken);
  };

  useEffect(() => {
    getFcmToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('[Remote Message] ', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (

    <NavigationContainer >
      {/* <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'home',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'search' }}
        />
        <Tab.Screen
          name="Mypage"
          component={MypageScreen}
          options={{ title: 'mypage' }}
        />
      </Tab.Navigator> */}
      <RightDrawerScreen />
    </NavigationContainer >
