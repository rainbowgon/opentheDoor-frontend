import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { themeListState } from "../../../../recoil/theme/theme";

const WeeklyTheme = () => {
  const themeList = useRecoilValue(themeListState);

  const renderThemeItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://img.extmovie.com/files/attach/images/148/954/947/083/c68e07c499dce34b787b25dfe989704d.gif",
        }}
        // source={{uri: item.poster}} //FIXME 추후 uri로 가져오도록, 지금 마스터키 측에서 막아놨어요.
        style={styles.poster}
        onError={error => console.error(error, "포스터 가져오기 실패")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.venue}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>10월 3주차 인기 테마</Text>
      <FlatList
        data={themeList}
        renderItem={renderThemeItem}
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
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 16,
  },
  poster: {
    width: 150,
    height: 225,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "grey",
    marginTop: 4,
  },
});

export default WeeklyTheme;
