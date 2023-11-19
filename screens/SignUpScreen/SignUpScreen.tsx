import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  memberLoginState,
  userAccessToken,
  userFcmToken,
  userRefreshToken,
} from "../../recoil/member/member";
import { Alert, View } from "react-native";

// components
import CustomButton from "../../components/Button/CustomButton";
import Input from "../../components/Input/Input";

// styles
import PageContainer, { FixedPageContainer } from "../../styles/commonStyles";
import {
  SignUpContainer,
  SignUpLogoImage,
  SignUpLogoImageView,
  SignUpNumberCheckView,
  SignUpNumberInputView,
} from "./SignUpScreenStyle";

// images
import Logo from "../../assets/images/image-logo.png";
import { postCheckPhoneNumber } from "../../recoil/member/memberFeature";
import { API_URL } from "../../constants/urls";

const SignUpScreen = () => {
  // apis
  const MemberServicePath = `/member-service`;

  const MemberAPI = "/members";
  const OauthAPI = "/oauth";

  const navigation = useNavigation();
  const deviceFcmToken = useRecoilValue(userFcmToken);
  const setAccessToken = useSetRecoilState(userAccessToken);
  const setRefreshToken = useSetRecoilState(userRefreshToken);
  const [emberLoginInfo, setMemberLoginInfo] = useRecoilState(memberLoginState);

  const [inputInfo, setInputInfo] = useState({
    name: "",
    phoneNumber: "",
    birthDate: "",
    nickname: emberLoginInfo.nickname,
  });

  const handlenameChange = text => {
    console.log("text, inputInfo.name : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, name: text });
  };

  const handlePhoneNumberChange = text => {
    console.log("text, inputInfo.name : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, phoneNumber: text });
  };

  const handleBirthDateChange = text => {
    console.log("text, inputInfo.name : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, birthDate: text });
  };

  const handleNicknameChange = text => {
    console.log("text, inputInfo.name : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, nickname: text });
  };

  const goMypage = () => {
    console.log("Back 페이지로 이동");
    navigation.navigate("mypage");
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
    };
    console.log(data);
    try {
      const response = await axios.post(
        `${API_URL}${MemberServicePath}/members/signup`,
        data,
      );
      console.log("토큰 발급 요청 완료", response.data);
      setAccessToken(response.data.data.accessToken);
      console.log("AccessToken 발급 완료");
      setRefreshToken(response.data.data.refreshToken);
      console.log("refreshToken 발급 완료");
      goMypage();
    } catch (error) {
      console.error("카카오 로그인 시도 실패", error);
    }
  }

  const onSignUp = () => {
    handleSignUp();
  };

  async function handleNumberAuthentication() {
    if (inputInfo.phoneNumber.length !== 11) {
      Alert.alert("-를 제외한 11자리 숫자를 입력해주세요");
    }

    const data = {
      phoneNumber: inputInfo.phoneNumber,
    };

    try {
      const response = await axios.post(
        `${API_URL}${MemberServicePath}${MemberAPI}/phone`,
        data,
      );
      console.log("전화번호 본인 인증 성공", response.data);
      Alert.alert("본인 인증 번호가 발급되었습니다!");
    } catch (error) {
      console.error("전화번호 본인 인증 실패", error);
      Alert.alert("전화번호 본인 인증 실패");
    }
  }

  return (
    <FixedPageContainer>
      <SignUpContainer>
        <SignUpLogoImageView>
          <SignUpLogoImage source={Logo} />
        </SignUpLogoImageView>
        <Input
          label="이름 *"
          value={inputInfo.name}
          onChangeText={handlenameChange}
        />
        <SignUpNumberCheckView>
          <SignUpNumberInputView>
            <Input
              label="전화번호 *"
              value={inputInfo.phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
          </SignUpNumberInputView>
          <CustomButton
            value="인증번호 받기"
            mode="static"
            onPress={handleNumberAuthentication}
          />
        </SignUpNumberCheckView>
        <Input
          label="인증번호 확인 *"
          value={inputInfo.name}
          onChangeText={handlenameChange}
        />
        <Input
          label="닉네임"
          value={inputInfo.nickname}
          onChangeText={handleNicknameChange}
        />
        <Input
          label="생년월일 (YYYY-MM-DD)"
          value={inputInfo.birthDate}
          onChangeText={handleBirthDateChange}
        />

        <CustomButton value="회원가입" mode="selected" onPress={onSignUp} />
      </SignUpContainer>
    </FixedPageContainer>
  );
};

export default SignUpScreen;
