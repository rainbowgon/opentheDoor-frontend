import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { themeListState } from "../../../../recoil/theme/theme";

// styles
import { Title, Venue, CardView } from "./WeeklyThemeStyle";
import { HomeScreenTitle } from "../../HomeScreenStyle";
import RenderThemeItem from "../RenderThemeItem/RenderThemeItem";

const WeeklyTheme = () => {
  const themeList = useRecoilValue(themeListState);
  const getCurrentMonthAndWeek = (): string => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const pastDaysOfMonth = now.getDate() - 1 + dayOfWeek;

    const currentWeek = Math.ceil(pastDaysOfMonth / 7);
    const currentMonth = now.getMonth() + 1;

    return `${currentMonth}월 ${currentWeek}주차 인기 테마`;
  };

  const renderThemeItem = ({ item }: any) => (
    <CardView>
      <Image
        source={{
          uri: "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/리허설_23761838.gif",
        }}
        // source={{uri: item.poster}} //FIXME 추후 uri로 가져오도록, 지금 마스터키 측에서 막아놨어요.
        style={styles.poster}
        onError={error => console.error(error, "포스터 가져오기 실패")}
      />
      <View style={styles.textContainer}>
        <Title>{item.title}</Title>
        <Venue>{item.venue}</Venue>
      </View>
    </CardView>
  );

  return (
    <View>
      <HomeScreenTitle>{getCurrentMonthAndWeek()}</HomeScreenTitle>
      <FlatList
        data={themeList}
        renderItem={({ item }) => <RenderThemeItem item={item} />}
        keyExtractor={item => item.id}
        horizontal={true} // 가로 스크롤
        showsHorizontalScrollIndicator={false} // 스크롤바 안보이게
        style={styles.list}
      />
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
