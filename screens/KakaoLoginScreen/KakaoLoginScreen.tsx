import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import CustomButton from '../../components/Button/CustomButton';
import { Text } from 'react-native';
import CustomCheckBox from '../../components/CheckBox/CustomCheckBox';
import PageContainer from "../../styles/commonStyles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import WebView from "react-native-webview";
import { getKakaoOauthPage } from "../../recoil/member/memberFeature";
import axios from "axios";

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

  const [webPageContent, setWebPageContent] = useState('');

  const REST_API_KEY = '868bb44bb8f128728318399f8e7b888a'
  const REDIRECT_URI = 'http://ssafy-openthedoor-alb-595590811.ap-northeast-2.elb.amazonaws.com/member-service/oauth/kakao/callback'

  const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
  })();`;

  const getCode = (target: string) => {
    const exp = 'code=';
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      console.log(requestCode);
      // requestToken(requestCode);
    }
  };

  const onMessageReceive = (event) => {
    console.log("event.nativeEvent.data");
    getCode(event.nativeEvent.data);
    const data = event.nativeEvent.url;
    console.log("event.nativeEvent.url");
    getCode(data);
  }

  return (
    <PageContainer>
      <View style={{ height: 700 }}>
        <Header
          back="true"
        />
        <WebView
          // style={{ flex: 1 }}
          source={{ uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}` }}
          // source={{ uri: `https://naver.com` }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          onMessage={onMessageReceive}
        // onMessage={event => {
        //   console.log(event.nativeEvent.data);
        //   const data = event.nativeEvent.url;
        //   console.log(data);
        //   getCode(data);
        // }}
        />
      </View>
    </PageContainer>
  );
};

export default KakaoLoginScreen;


