import React from "react";
import { ScrollView, Button, View, Text, StyleSheet } from "react-native";
import Input from "../../../../components/Input/Input";

const NearByTheme = () => {
  return (
    <View>
      <Text>내 주변</Text>
      <View style={styles}>
        <Text>지도가 들어갈 공간입니다. 나중엔 View가 아니겠죠</Text>
      </View>
    </View>
  );
};

// 레이아웃을 보기 위한 임시 css입니다.
const styles = StyleSheet.create({
  padding: 120,
});

export default NearByTheme;
