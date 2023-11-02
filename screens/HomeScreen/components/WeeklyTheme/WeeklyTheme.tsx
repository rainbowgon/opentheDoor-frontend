import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Input from "../../../components/Input/Input";

const WeeklyTheme = () => {
  return (
    <View>
      <Text>
        {}월 {}주차 인기 테마
      </Text>
      <View style={styles}>
        <Text>크롤링한 포스터가 들어올 공간입니다</Text>
      </View>
    </View>
  );
};

// 레이아웃을 보기 위한 임시 css입니다.
const styles = StyleSheet.create({
  padding: 120,
});

export default WeeklyTheme;
