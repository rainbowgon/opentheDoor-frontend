import React from 'react';
import { View, Button, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-paper';
import ListItem from '../../components/ListItem/ListItem';
import PageContainer from "../../styles/commonStyles";
import Header from "../../components/Header/Header";
import { SettingContext, SettingHeadTitle, SettingIcon, SettingTitle } from "./SettingScreenStyle";

// icons
import IconPersonOff from "../../assets/icons/icon-person-off.png";
import IconNotificationsOn from "../../assets/icons/icon-notifications-on.png";

const SettingScreen = () => {
  return (
    <PageContainer>
      <Header
        back="true"
      />
      <SettingHeadTitle>
        <SettingIcon source={IconNotificationsOn} />
        <View>
          <SettingTitle>알람 관리</SettingTitle>
          <SettingContext>내가 받을 알람을 관리해보세요</SettingContext>
        </View>
      </SettingHeadTitle>
      <ListItem
        title="전체 알람"
        right="checkbox"
      />
      <ListItem
        title="북마크 시 예약 오픈 알람"
        right="checkbox"
      />
      <SettingHeadTitle>
        <SettingIcon source={IconPersonOff} />
        <View>
          <SettingTitle>회원 관리</SettingTitle>
          <SettingContext>회원 정보를 관리해보세요</SettingContext>
        </View>
      </SettingHeadTitle>
      <ListItem
        title="로그아웃"
      />
      <ListItem
        title="회원탈퇴"
        color="error"
      />
    </PageContainer>
  );
};

export default SettingScreen;
