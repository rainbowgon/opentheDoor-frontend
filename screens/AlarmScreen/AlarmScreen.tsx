import React from "react";
import { View, Button, ScrollView } from "react-native";

// components
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";
import AdminAxiosTestBox from "../../components/_admin/_AdminAxiosTestBox/AdminAxiosTestBox";
import PageContainer from "../../styles/commonStyles";

const AlarmScreen = () => {
  return (
    <PageContainer>
      {/* FIXME - Admin 기능입니다 */}
      <AdminAxiosTestBox />
      <Header />
      <Button title="AlarmScreenDemo" />
      <ScrollView>
        {
          [...Array(3)].map((key) => (
            <ListItem
              title={key}
              subTitle={key}
            />
          ))
        }
      </ScrollView>
    </PageContainer>
  );
};

export default AlarmScreen;
