import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { memberLoginState, userAccessToken, userFcmToken, userRefreshToken } from "../../recoil/member/member";
import { View } from "react-native";

// components
import CustomButton from "../../components/Button/CustomButton";
import Input from "../../components/Input/Input";

// styles
import PageContainer from "../../styles/commonStyles";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const deviceFcmToken = useRecoilValue(userFcmToken);
  const setAccessToken = useSetRecoilState(userAccessToken);
  const setRefreshToken = useSetRecoilState(userRefreshToken);
  const [emberLoginInfo, setMemberLoginInfo] = useRecoilState(memberLoginState);

  const [inputInfo, setInputInfo] = useState(
    {
      name: "",
      phoneNumber: "",
      birthDate: "",
      nickname: emberLoginInfo.nickname,
    }
  );

  const goBack = () => {
    console.log("Back 페이지로 이동")
    navigation.goBack();
  };

  async function handleSignUp() {
    const data = {
      name: inputInfo.name,
      phoneNumber: inputInfo.phoneNumber,
      birthDate: inputInfo.birthDate,
      provider: emberLoginInfo.provider,
      providerId: emberLoginInfo.providerId,
      nickname: inputInfo.nickname,
      profileImage: emberLoginInfo.profileImage,
      fcmToken: deviceFcmToken,
    }
    try {
      const response = await axios
        .post(
          `/member-service/members/signup`,
          data,
        )
      console.log("토큰 발급 요청 완료", response.data);
      setAccessToken(response.data.data.accessToken);
      console.log("AccessToken 발급 완료");
      setRefreshToken(response.data.data.refreshToken);
      console.log("refreshToken 발급 완료");
      goBack();
    }
    catch (error) {
      console.error("카카오 로그인 시도 실패", error);
    }
  }

  const onSignUp = () => {
    handleSignUp();
  }
  return (
    <PageContainer>
      <Input
        label="이름"
      />
      <View>
        <Input
          label="전화번호 *"
        />
        <CustomButton
          value="인증번호 받기"
          mode="static"
        />
      </View>
      <Input
        label="인증번호 확인 *"
      />
      <Input
        label="닉네임"
      />
      <Input
        label="생년월일 (주민등록번호 앞자리)"
      />

      <CustomButton
        value="회원가입"
        mode="selected"
        onPress={onSignUp}
      />
    </PageContainer>
  );
};

export default SignUpScreen;
