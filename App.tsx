import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from "@react-navigation/native";
import PushNotification from "react-native-push-notification";
import Snackbar from "react-native-snackbar";

// components
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";

// [ADMIN] components
import AdminRightNavigation from "./components/_admin/_AdminRightNavigation/AdminRightNavigation";

import { Container } from "./styles/commonStyles";
import { Dimensions } from "react-native";

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

  PushNotification.localNotification({
    title: remoteMessage.notification?.title || "opentheDoor",
    message: remoteMessage.notification?.body || "",
    channelId: "1",
    // channelName: "opentheDoor",
    playSound: true,
    soundName: "default",
  });
});

const windowHeight = Dimensions.get("window").height;

const App = () => {
  Snackbar.LENGTH_SHORT; // 또는 LENGTH_LONG 설정
  // Snackbar.Color("#333"); // 스낵바 배경색 설정
  // Snackbar.setActionTextColor("#f0e7d9"); // 액션 텍스트 색상 설정
  // Snackbar = () => {
  // 스낵바 액션 버튼 클릭 시 실행할 동작
  // Snackbar.dismiss();
  // });

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log("[FCM Token] ", fcmToken);
  };

  useEffect(() => {
    getFcmToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("[Remote Message] ", JSON.stringify(remoteMessage));

      Snackbar.show({
        // title: remoteMessage.notification?.title || "Default Title",
        text: remoteMessage.notification?.body || "Default Message",
        duration: Snackbar.LENGTH_LONG, // 또는 LENGTH_SHORT
        action: {
          text: "닫기",
          textColor: "grey",
          onPress: () => {
            Snackbar.dismiss();
          },
        },
        // position: "absolute",
        // top: 0,
        // marginBottom: (windowHeight / 100) * 94,
      });
    });

    //   PushNotification.localNotification({
    //     title: remoteMessage.notification?.title || "opentheDoor",
    //     message: remoteMessage.notification?.body || "",
    //     channelId: "1",
    //     playSound: true,
    //     soundName: "default",
    //   });
    // });

    return unsubscribe;
  }, []);

  return (
    <RecoilRoot>
      <Container>
        <NavigationContainer>
          <BottomNavigator />
          {/* FIXME - 어드민 기능 사용 (주석 필수) */}
          {/* <AdminRightNavigation /> */}
        </NavigationContainer>
      </Container>
    </RecoilRoot>
  );
};
export default App;
