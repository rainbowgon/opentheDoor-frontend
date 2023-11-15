import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from "@react-navigation/native";

// components
import BottomNavigator from "./components/BottomNavigator/BottomNavigator";

// [ADMIN] components
import AdminRightNavigation from "./components/_admin/_AdminRightNavigation/AdminRightNavigation";

import { Container } from "./styles/commonStyles";

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
