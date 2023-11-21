import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { themeListState, themeRankListState } from "../../../../recoil/theme/theme";

// styles
import { HomeScreenIcon, HomeScreenTitle, HomeScreenTitleTouch, HomeScreenTitleView } from "../../HomeScreenStyle";
import RenderThemeItem from "../RenderThemeItem/RenderThemeItem";

import { useNavigation } from "@react-navigation/native";

import Expandmore from "../../../../assets/icons/icon-expandmore.png"
import { ThemeDataFlatList, WeeklyThemeData, WeeklyThemeNoData } from "./WeeklyThemeStyle";

const WeeklyTheme = () => {
  const themeList = useRecoilValue(themeRankListState);
  const navigation = useNavigation();

  const handleRankingTitle = () => {
    console.log("ranking 페이지로 이동");
    navigation.navigate("ranking");
  };

  // FIXME - 중복 코드 함수화 필요?
  const getCurrentMonthAndWeek = (): string => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const pastDaysOfMonth = now.getDate() - 1 + dayOfWeek;

    const currentWeek = Math.ceil(pastDaysOfMonth / 7);
    const currentMonth = now.getMonth() + 1;

    return `${currentMonth}월 ${currentWeek}주차 인기 테마`;
  };

  return (
    <View>
      <HomeScreenTitleTouch onPress={() => handleRankingTitle()}>
        <HomeScreenTitleView>
          <HomeScreenTitle>{getCurrentMonthAndWeek()}</HomeScreenTitle>
          <HomeScreenIcon
            source={Expandmore}
          />
          {/* <Text>></Text> */}
        </HomeScreenTitleView>
      </HomeScreenTitleTouch>
      <WeeklyThemeData>
        {
          themeList.length ?
            <ThemeDataFlatList
              data={themeList}
              renderItem={({ item }) => <RenderThemeItem item={item} />}
              keyExtractor={item => item.themeId}
              horizontal={true} // 가로 스크롤
              showsHorizontalScrollIndicator={false} // 스크롤바 안보이게
            />
            :
            <Text>데이터가 없습니다.</Text>
        }
      </WeeklyThemeData>
    </View>
  );
};

export default WeeklyTheme;
