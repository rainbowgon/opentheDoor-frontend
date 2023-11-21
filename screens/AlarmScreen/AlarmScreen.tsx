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
      {/* <AdminAxiosTestBox /> */}
      <Header back="true" />
      <CustomButton
        value="알림 전체 확인하기"
        onPress={patchNotificationAll}
        mode="selected"
        size="small"
      />
      <ScrollView>
        <ListItem title="메르헨 수호대 테마가 예약되었습니다." content="예약번호는 691238 입니다." color="disable" />
        <ListItem title="히로인 테마가 예약되었습니다." content="예약번호는 342712 입니다." color="disable" />
        {/* {[...Array(3)].map(key => (
          <ListItem title={key} content={key} />
        ))} */}
      </ScrollView>
    </PageContainer>
  );
};

export default AlarmScreen;
