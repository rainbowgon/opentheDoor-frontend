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
import validator from 'validator';

// components
import CustomButton from "../../components/Button/CustomButton";
import Input from "../../components/Input/Input";

// styles
import PageContainer, { FixedPageContainer } from "../../styles/commonStyles";
import {
  SignUpContainer,
  SignUpLogoImage,
  SignUpLogoImageView,
  SignUpFlexRow,
  SignUpNumberInputView,
} from "./SignUpScreenStyle";

// images
import Logo from "../../assets/images/image-logo.png";
import { postCheckPhoneNumber } from "../../recoil/member/memberFeature";
import { API_URL } from "../../constants/urls";
import { Text } from "react-native";

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
    birthDateYear: 0,
    birthDateMonth: 0,
    birthDateDate: 0,
    nickname: emberLoginInfo.nickname,
  });

  // 정규식
  const regularExpressionExcludingSpecialCharactoer = " /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;";

  const [numberItem, setNumberItem] = useState(null);
  const [compareNumberItem, setCompareNumberItem] = useState(987987654321);

  const handlenameChange = text => {
    console.log("text, inputInfo.name : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, name: text });
  };
  const handlePhoneNumberChange = text => {
    console.log("text, inputInfo.phoneNumber : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, phoneNumber: text });
  };
  const handleNumberChange = text => {
    console.log("text, Number : ", text, inputInfo.name);
    const numericValue = Number(text);
    setNumberItem(numericValue);
  };
  const handleBirthDateYearChange = text => {
    console.log("text, inputInfo.birthDateDate : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, birthDateYear: text });
  };
  const handleBirthDateMonthChange = text => {
    console.log("text, inputInfo.birthDateMonth : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, birthDateMonth: text });
  };
  const handleBirthDateDateChange = text => {
    console.log("text, inputInfo.birthDateDate : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, birthDateDate: text });
  };
  const handleNicknameChange = text => {
    console.log("text, inputInfo.nickname : ", text, inputInfo.name);
    setInputInfo({ ...inputInfo, nickname: text });
  };

  const goMypage = () => {
    console.log("Back 페이지로 이동");
    navigation.navigate("mypage");
  };

  const handleBirthday = (value: number) => {
    var setValue = value.toString();
    if (value < 10) {
      setValue = "0" + setValue;
    }
    return setValue;
  }

  async function handleSignUp() {

    console.log("inputInfo.name", inputInfo.name)
    if (!inputInfo.name || inputInfo.name === "") {
      Alert.alert("이름이 잘못 입력되었습니다.");
      return;
    }
    console.log(validator.isMobilePhone(inputInfo.phoneNumber, 'ko-KR'));
    if (
      (!validator.isMobilePhone(inputInfo.phoneNumber, 'ko-KR')) &&
      (!validator.isInt(inputInfo.phoneNumber)) &&
      (inputInfo.phoneNumber.length !== 11) &&
      (inputInfo.phoneNumber.substring(0, 3) !== "010")
    ) {
      Alert.alert("핸드폰 번호가 잘못 입력되었습니다.");
      return;
    }
    console.log("핸드폰 번호");
    if (numberItem !== compareNumberItem) {
      console.log(typeof (numberItem), numberItem);
      console.log(typeof (compareNumberItem), compareNumberItem);
      Alert.alert("핸드폰 인증 번호가 잘못 입력되었습니다.");
      return;
    }
    console.log("핸드폰 인증 번호");
    if (!inputInfo.nickname || inputInfo.nickname === "") {
      Alert.alert("별명이 잘못 입력되었습니다.");
      return;
    }
    console.log("별명");
    if (
      (!inputInfo.birthDateYear) ||
      !validator.isInt(inputInfo.birthDateYear) ||
      !(
        (inputInfo.birthDateYear < 2023) &&
        (inputInfo.birthDateYear > 1900))
    ) {
      console.log(inputInfo.birthDateYear);
      Alert.alert("생일(년)이 잘못 입력되었습니다.");
      return;
    }
    console.log("생년");
    if (
      (!inputInfo.birthDateMonth) ||
      !validator.isInt(inputInfo.birthDateMonth) ||
      !(
        (inputInfo.birthDateMonth < 13) &&
        (inputInfo.birthDateMonth > 0)
      )
    ) {
      Alert.alert("생일(월)이 잘못 입력되었습니다.");
      return;
    }
    console.log("월");
    if (
      (!inputInfo.birthDateDate) ||
      !validator.isInt(inputInfo.birthDateDate) ||
      !(
        (inputInfo.birthDateDate < 32) &&
        (inputInfo.birthDateDate > 0)
      )
    ) {
      Alert.alert("생일(일)이 잘못 입력되었습니다.");
      return;
    }
    console.log("일");


    const data = {
      name: inputInfo.name,
      phoneNumber: inputInfo.phoneNumber,
      birthDate: `${inputInfo.birthDateYear}-${handleBirthday(inputInfo.birthDateMonth)}-${handleBirthday(inputInfo.birthDateDate)}`,
      provider: emberLoginInfo.provider,
      providerId: emberLoginInfo.providerId,
      nickname: inputInfo.nickname,
      profileImage: emberLoginInfo.profileImage,
      fcmToken: deviceFcmToken,
    };
    console.log(data);
    // try {
    //   const response = await axios.post(
    //     `${API_URL}${MemberServicePath}/members/signup`,
    //     data,
    //   );
    //   console.log("토큰 발급 요청 완료", response.data);
    //   setAccessToken(response.data.data.accessToken);
    //   console.log("AccessToken 발급 완료");
    //   setRefreshToken(response.data.data.refreshToken);
    //   console.log("refreshToken 발급 완료");
    //   goMypage();
    // } catch (error) {
    //   console.error("카카오 로그인 시도 실패", error);
    // }
  }

  const onSignUp = () => {
    handleSignUp();
  };

  async function handleNumberAuthentication() {
    if (!validator.isMobilePhone(inputInfo.phoneNumber, 'ko-KR')) {
      Alert.alert("한국식 번호가 아닙니다.");
      return;
    }

    if (!validator.isInt(inputInfo.phoneNumber)) {
      Alert.alert("숫자로만 작성해주세요");
      return;
    }

    if (inputInfo.phoneNumber.length !== 11) {
      Alert.alert("-를 제외한 11자리 숫자를 입력해주세요");
      return;
    }

    if (inputInfo.phoneNumber.substring(0, 3) !== "010") {
      Alert.alert("010부터 시작하는 숫자를 입력해주세요");
      return;
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
      console.log("전화번호 본인 인증 성공", response.data.data);
      Alert.alert("본인 인증 번호가 발급되었습니다!");
      setCompareNumberItem(response.data.data);
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
        <SignUpFlexRow>
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
        </SignUpFlexRow>
        <Input
          label="인증번호 확인 *"
          value={numberItem?.toString()}
          onChangeText={handleNumberChange}
        />
        <Input
          label="닉네임*"
          value={inputInfo.nickname}
          onChangeText={handleNicknameChange}
        />
        <SignUpFlexRow>
          <Input
            label="생년(YYYY)*"
            value={inputInfo.birthDateYear}
            onChangeText={handleBirthDateYearChange}
          />
          <Text>/</Text>
          <Input
            label="월(MM)*"
            value={inputInfo.birthDateMonth}
            onChangeText={handleBirthDateMonthChange}
          />
          <Text>/</Text>
          <Input
            label="일(DD)*"
            value={inputInfo.birthDateDate}
            onChangeText={handleBirthDateDateChange}
          />
        </SignUpFlexRow>

        <CustomButton value="회원가입" mode="selected" onPress={onSignUp} />
      </SignUpContainer>
    </FixedPageContainer>
  );
};

export default SignUpScreen;
