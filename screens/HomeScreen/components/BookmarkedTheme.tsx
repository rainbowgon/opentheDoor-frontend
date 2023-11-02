import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Input from "../../../components/Input/Input";

const BookmarkedTheme = () => {
  return (
    <View>
      <Text>북마크한 테마</Text>
      <View style={styles}>
        <Text>북마크 한 테마의 포스터가 크롤링되어 들어올 공간입니다.</Text>
      </View>
    </View>
  );
};

// 레이아웃을 보기 위한 임시 css입니다.
const styles = StyleSheet.create({
  padding: 120,
});

export default BookmarkedTheme;
