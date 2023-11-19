import React, { useState } from 'react';
import { View } from 'react-native';
import { API_URL } from "../../constants/urls";
import PageContainer from "../../styles/commonStyles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import WebView from "react-native-webview";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { memberLoginState, memberState, userAccessToken, userFcmToken, userRefreshToken } from "../../recoil/member/member";
import { UserProfileInfo } from "../MypageScreen/components/UserProfile/UserProfileStyle";

const KakaoLoginScreen = () => {
  const navigation = useNavigation();

  const goSignUp = () => {
    console.log("goSignUp 페이지로 이동");
    navigation.navigate("signUp");
  };

  const goBack = () => {
    console.log("Back 페이지로 이동")
    navigation.goBack();
  };

  const REST_API_KEY = '868bb44bb8f128728318399f8e7b888a'
  const REDIRECT_URI = 'http://ssafy-openthedoor-alb-595590811.ap-northeast-2.elb.amazonaws.com/member-service/oauth/kakao'

  const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
  })();`;

  // apis
  const MemberServicePath = `/member-service`;

  const MemberAPI = "/members";
  const OauthAPI = "/oauth";

  const [userInfo, setUserInfo] = useState();
  const setMemberLoginInfo = useSetRecoilState(memberLoginState);
  const setAccessToken = useSetRecoilState(userAccessToken);
  const setRefreshToken = useSetRecoilState(userRefreshToken);
  const setMemberState = useSetRecoilState(memberState);
  const fcmToken = useRecoilValue(userFcmToken);

  async function getKakaoLogin(data: string) {
    try {
      const response = await axios
        .get(
          `${API_URL}${MemberServicePath}${OauthAPI}/kakao/callback?code=${data}`,
        )
      console.log("카카오 Oauth 로그인 시도 성공", response.data);
      setUserInfo(response.data.data);
      console.log("카카오 Oauth 데이터 불러오기 성공");
      console.log(typeof (response.data.data));

      if (typeof (response.data.data) === "object") {
        setMemberLoginInfo(response.data.data);
        goSignUp();
      } else {
        handleLogin(response.data.data);
      }
    }
    catch (error) {
      console.log("4. ", data);
      console.error("카카오 Oauth 로그인 시도 실패", error);
    }
  }

  async function handleLogin(data: string) {
    try {
      const response = await axios
        .post(
          `${API_URL}${MemberServicePath}${OauthAPI}/login/kakao?fcmToken=${fcmToken}&profileId=${data}`,
        )
      console.log("카카오 로그인 요청", response.data);
      setUserInfo(response.data.data);
      console.log("카카오 로그인 성공", response.data);
      setAccessToken(response.data.data.accessToken);
      console.log("accessToken 주입 성공", response.data.data.accessToken);
      setRefreshToken(response.data.data.refreshToken);
      console.log("refreshToken 주입 성공", response.data.data.accessToken);
      setMemberState({
        name: "test",
        nickname: response.data.data.nickname,
        phoneNumber: response.data.data.ph,
        profileImage: response.data.data.profileImage,
      });
      console.log("데이터 삽입 성공");
      console.log(typeof (response.data.data));
      goBack();
    }
    catch (error) {
      console.error("카카오 로그인 시도 실패", error);
    }
  }

  const getCode = (target: string) => {
    console.log("2. ", target);
    const exp = 'code=';
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      console.log("3. ", requestCode);
      // requestToken(requestCode);
      getKakaoLogin(requestCode);
    }
  };

  const onMessageReceive = (event) => {
    const data = event.nativeEvent.url;
    console.log("1. ", data);
    getCode(data);
  }

  return (
    <PageContainer>
      <View style={{ height: 700 }}>
        <Header back="true" />
        <WebView
          source={{ uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}` }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          onMessage={onMessageReceive}
        />
      </View>
    </PageContainer>
  );
};

export default KakaoLoginScreen;

