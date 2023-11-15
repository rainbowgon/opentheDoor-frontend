import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { themeListState, themeRankListState } from "../../../../recoil/theme/theme";

// styles
import { HomeScreenTitle, HomeScreenTitleTouch } from "../../HomeScreenStyle";
import RenderThemeItem from "../RenderThemeItem/RenderThemeItem";

import { useNavigation } from "@react-navigation/native";

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
        <HomeScreenTitle>{getCurrentMonthAndWeek()}</HomeScreenTitle>
      </HomeScreenTitleTouch>
      {
        themeList.length ?
          <View>
            <FlatList
              data={themeList}
              renderItem={({ item }) => <RenderThemeItem item={item} />}
              keyExtractor={item => item.themeId}
              horizontal={true} // 가로 스크롤
              showsHorizontalScrollIndicator={false} // 스크롤바 안보이게
              style={styles.list}
            />
          </View>
          :
          <Text>데이터가 없습니다.</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  list: {
    // FlatList 스타일링 (필요에 따라 추가)
  },
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
    backgroundColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 16,
  },
  poster: {
    width: 170,
    height: 225,
    resizeMode: "cover",
    backgroundColor: "#000",
  },
  textContainer: {
    padding: 10,
    width: 170,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 12,
    color: "grey",
    fontWeight: "bold",
  },
  venue: {
    fontSize: 8,
    color: "grey",
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default WeeklyTheme;
