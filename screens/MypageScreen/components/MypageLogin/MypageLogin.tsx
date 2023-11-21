import React from "react";
import { Alert, View } from "react-native";

// components
import CustomButton from "../../../../components/Button/CustomButton";
import { useNavigation } from "@react-navigation/native";

const MypageLogin = () => {
  const navigation = useNavigation();

  const handleKakaoLogin = () => {
    console.log("kakaoLogin 페이지로 이동")
    navigation.navigate("kakaoLogin");
  };

  const handleGoogleLogin = () => {
    console.log("googleLogin 페이지로 이동")
    // FIXME 구글 로그인으로 변경 필요
    console.log("FIXME 구글 로그인으로 변경 필요")
    // navigation.navigate("kakaoLogin");
    Alert.alert("구글 로그인은 개발중입니다.")
  };

  return (
    <View>
      <CustomButton
        value="카카오 로그인"
        size="large"
        mode="kakao"
        border="square"
        onPress={handleKakaoLogin}
      />
      <CustomButton
        value="구글 로그인"
        size="large"
        mode="inactive"
        border="square"
        onPress={handleGoogleLogin}
      />
    </View>
  );
};

export default MypageLogin;
