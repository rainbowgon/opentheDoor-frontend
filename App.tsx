import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { RecoilRoot, useSetRecoilState } from "recoil";
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from "@react-navigation/native";
import PushNotification from "react-native-push-notification";
import Snackbar from "react-native-snackbar";
import { ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";

// components
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";

// [ADMIN] components
import AdminRightNavigation from "./components/_admin/_AdminRightNavigation/AdminRightNavigation";

import { Container } from "./styles/commonStyles";
import { Dimensions } from "react-native";
import { userFcmToken } from "./recoil/member/member";

// type RootStackParamList = {
//   Home: undefined;
//   Search: {
//     id: number;
//   };
//   Mypage: undefined;
// };

const windowHeight = Dimensions.get("window").height;

const App = () => {
  const setFCMToken = useSetRecoilState(userFcmToken);
  Snackbar.LENGTH_LONG; // 또는 LENGTH_LONG 설정
  // Snackbar.Color("#333"); // 스낵바 배경색 설정
  // Snackbar.setActionTextColor("#f0e7d9"); // 액션 텍스트 색상 설정
  // Snackbar = () => {
  // 스낵바 액션 버튼 클릭 시 실행할 동작
  // Snackbar.dismiss();
  // });
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: "opentheDoor", // 알림 채널 ID
        channelName: "opentheDoor", // 알림 채널 이름
        channelDescription: "opentheDoor 알림 채널", // 알림 채널 설명
        soundName: "default", // 기본 알림 소리
        importance: 4, // 중요도 설정
        vibrate: true, // 진동 여부
      },
      created => console.log(`CreateChannel returned '${created}'`), // 콜백으로 채널 생성 성공 여부를 로그에 출력
    );
  }, []);

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    setFCMToken(fcmToken);
    console.log("[FCM Token] ", fcmToken);
  };

  // firebase
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log("[Background Remote Message]", remoteMessage);
    console.log("데이터 확인용", remoteMessage.notification);

    // Toast.show({
    //   type: "info",
    //   text1: remoteMessage.data?.title || "opentheDoor",
    //   text2: remoteMessage.data?.body || "읽지 않은 알림이 있습니다.",
    //   visibilityTime: 5000, // 5초
    //   autoHide: true,
    //   topOffset: 30,
    //   bottomOffset: 40,
    // });

    PushNotification.localNotification({
      title: remoteMessage.notification?.title || "opentheDoor",
      message: remoteMessage.notification?.body || "",
      channelId: "opentheDoor",
      channelName: "opentheDoor",
      playSound: true,
      soundName: "default",
    });
  });

  useEffect(() => {
    getFcmToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(
        "[Remote Message] ",
        JSON.stringify(remoteMessage.data?.body),
      );

      ////////////////후보 1 하얀 알림/////////////////////////////
      // setTimeout(() => {
      //   Toast.show({
      //     type: "info",
      //     text1: remoteMessage.data?.title || "opentheDoor",
      //     text2: remoteMessage.data?.body || "읽지 않은 알림이 있습니다.",
      //     visibilityTime: 5000, // 5초
      //     autoHide: true,
      //     topOffset: 30,
      //     bottomOffset: 40,
      //   });
      // }, 1500);

      /////일반 android toast (지루한 디자인)////
      // ToastAndroid.show(
      //   remoteMessage.data?.body || "Default Message",
      //   ToastAndroid.LONG,
      // );
      ///////아래는 됩니다///////////////////////////////
      ///////push 알림///////////////////////////////////
      //   Snackbar.show({
      //     // title: remoteMessage.data?.title || "Default Title",
      //     text: remoteMessage.data?.body || "Default Message",
      //     duration: Snackbar.LENGTH_LONG, // 또는 LENGTH_SHORT
      //     action: {
      //       text: "닫기",
      //       textColor: "grey",
      //       onPress: () => {
      //         Snackbar.dismiss();
      //       },
      //     },
      //     // position: "absolute",
      //     // top: 0,
      //     // marginBottom: (windowHeight / 100) * 94,
      //   });
      // });
      //////////////////여기까지/////////////////////////////
      ////////////////////////////////////////////
      PushNotification.localNotification({
        title: remoteMessage.data?.title || "opentheDoor",
        message: remoteMessage.data?.body || "",
        channelId: "opentheDoor",
        playSound: true,
        soundName: "default",
      });
    });

    return unsubscribe;
  }, []);

  return (
    <RecoilRoot>
      <Container>
        <NavigationContainer>
          <BottomNavigator />
          <Toast />
          {/* FIXME - 어드민 기능 사용 (주석 필수) */}
          {/* <AdminRightNavigation /> */}
        </NavigationContainer>
      </Container>
    </RecoilRoot>
  );
};
export default App;
