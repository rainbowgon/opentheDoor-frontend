import React from "react";
import { View, Button, ScrollView } from "react-native";

// components
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";
import AdminAxiosTestBox from "../../components/_admin/_AdminAxiosTestBox/AdminAxiosTestBox";
import PageContainer from "../../styles/commonStyles";
import CustomButton from "../../components/Button/CustomButton";
import { patchNotificationAll } from "../../recoil/selector/selector";

const AlarmScreen = () => {
  return (
    <PageContainer>
      {/* FIXME - Admin 기능입니다 */}
      <AdminAxiosTestBox />
      <Header
        back="true"
      />
      <Button title="AlarmScreenDemo" />
      <CustomButton
        value="TODO - 알림 전체 확인하기 (PATCH) - patchNotificationAll"
        onPress={patchNotificationAll}
      />
      <ScrollView>
        {[...Array(3)].map(key => (
          <ListItem title={key} content={key} />
        ))}
      </ScrollView>
    </PageContainer>
  );
};

export default AlarmScreen;
