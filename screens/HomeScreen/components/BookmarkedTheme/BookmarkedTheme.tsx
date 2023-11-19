import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HomeScreenTitle, HomeScreenTitleView } from "../../HomeScreenStyle";
import { useRecoilValue } from "recoil";
import { userAccessToken } from "../../../../recoil/member/member";
// import Input from "../../../components/Input/Input";

const BookmarkedTheme = () => {
  const accessToken = useRecoilValue(userAccessToken);

  return (
    <>
      {
        accessToken === ""
          ?
          <View>
            <HomeScreenTitleView>
              <HomeScreenTitle>북마크한 테마</HomeScreenTitle>
            </HomeScreenTitleView>
            <View style={styles}>
              <Text>테마를 북마크하여, 확인해보세요!</Text>
            </View>
          </View>
          :
          <View>
            <HomeScreenTitleView>
              <HomeScreenTitle>북마크한 테마</HomeScreenTitle>
            </HomeScreenTitleView>
            <View style={styles}>
              <Text>회원가입하여 내가 좋아하는 테마를 저장하세요</Text>
            </View>
          </View>

      }
    </>
  );
};

// 레이아웃을 보기 위한 임시 css입니다.
const styles = StyleSheet.create({
  padding: 70,
  backgroundColor: "#242423FF",
});

export default BookmarkedTheme;
