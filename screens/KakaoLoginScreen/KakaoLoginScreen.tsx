import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { API_URL } from "../../constants/urls";
import PageContainer from "../../styles/commonStyles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import WebView from "react-native-webview";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAccessToken } from "../../recoil/member/member";

// apis
const MemberServicePath = `/member-service`;

const MemberAPI = "/members";
const OauthAPI = "/oauth";

// var qs = require('qs');

// const [token, setToken] = useRecoilState(userAccessToken);

export async function getKakaoLogin(data: string) {
  const response = await axios
    .get(
      `${API_URL}${MemberServicePath}${OauthAPI}/kakao/callback?code=${data}`,
    )
    .then((response) => {
      console.log("카카오 로그인 시도 성공", response.data);
    })
    .catch((error) => {
      console.log("4. ", data);
      console.error("카카오 로그인 시도 실패", error);
    });
}

const KakaoLoginScreen = () => {
  const navigation = useNavigation();

  const handleKakaoOauthLogin = () => {
    console.log("kakaoOauth 페이지로 이동")
    navigation.navigate("kakaoOauth");
  };

  const goBack = () => {
    console.log("kakaoOauth 페이지로 이동")
    navigation.goBack();
  };

  const REST_API_KEY = '868bb44bb8f128728318399f8e7b888a'
  const REDIRECT_URI = 'http://ssafy-openthedoor-alb-595590811.ap-northeast-2.elb.amazonaws.com/member-service/oauth/kakao'
  // const REDIRECT_URI = 'http://ssafy-openthedoor-alb-595590811.ap-northeast-2.elb.amazonaws.com/member-service/oauth/kakao/callback'

  const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
  })();`;

  // const requestToken = async (code: string,) => {
  //   const requestTokenUrl = 'https://kauth.kakao.com/oauth/token';

  //   const options = qs.stringify({
  //     grant_type: 'authorization_code',
  //     client_id: REST_API_KEY,
  //     redirect_uri: REDIRECT_URI,
  //     code,
  //   });

  //   try {
  //     const tokenResponse = await axios.post(requestTokenUrl, options);
  //     const ACCESS_TOKEN = tokenResponse.data.access_token;

  //     const body = {
  //       ACCESS_TOKEN,
  //     };
  //     const response = await axios.post(REDIRECT_URI, body);
  //     const value = response.data;
  //     console.log("response.data : ", value);
  //     // const result = await storeUser(value);
  //     // if (result === 'stored') {
  //     //   const user = await getData('user');
  //     //   dispatch(read_S(user));
  //     //   await navigation.navigate('Main');
  //     // }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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

