import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import ListItem from '../../components/ListItem/ListItem';

const SettingScreen = () => {
  return (
    <ScrollView>
      <Button title="SettingScreenDemo" />
      <Text>알람 관리</Text>
      <Text>내가 받을 알람을 관리해보세요</Text>
      <ListItem
        title="전체 알람"
        right="checkbox"
      />
      <ListItem
        title="북마크 시 예약 오픈 알람"
        right="checkbox"
      />
      <Text>회원 관리</Text>
      <Text>회원 정보를 관리해보세요</Text>
      <ListItem
        title="로그아웃"
      />
      <ListItem
        title="회원탈퇴"
      />
    </ScrollView>
  );
};

export default SettingScreen;
