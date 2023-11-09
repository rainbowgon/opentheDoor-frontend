import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { getThemeSort } from "../../../../recoil/selector/selector";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import ListItem from "../../../../components/ListItem/ListItem"; // 'ListItem' 컴포넌트의 실제 경로로 대체하세요
import { themeListState } from "../../../../recoil/member/theme"; // 'themeState'의 실제 경로로 대체하세요
// import Input from "../../../components/Input/Input";

interface Poster {
  id: string;
  venue: string;
  title: string;
  poster: string;
  explanation: string;
  level: number;
  minHeadcount: number;
  maxHeadcount: number;
}

// NOTE useState로도 해보고 recoil에서도 import 해보고 써보려는데
// NOTE getThemeSort axios 자체가 지금 제대로 안 적힌 것 같아 void로 나와용

const WeeklyTheme = () => {
  // const postersLoadable = useRecoilValueLoadable(getThemeSort);

  // const renderItem = ({ item }: { item: Poster }) => (
  //   <View>
  //     <Image source={{ uri: item.poster }} />
  //     <Text>{item.title}</Text>
  //     <Text>{item.venue}</Text>
  //   </View>
  // );

  // let content;

  // // TODO hasValue가 null일 때 에러가 나는지, axios 통신으로 Data가 받아오는지
  // // TODO Test가 미비한 상태입니다.
  // switch (postersLoadable.state) {
  //   case "hasValue":
  //     content = (
  //       <FlatList
  //         data={postersLoadable.contents.data}
  //         renderItem={renderItem}
  //         keyExtractor={item => item.id}
  //         horizontal
  //         showsHorizontalScrollIndicator={false}
  //       />
  //     );
  //     break;
  //   case "loading":
  //     content = <Text>Loading...</Text>;
  //     break;
  //   case "hasError":
  //     content = <Text>Error: {postersLoadable.contents.message}</Text>;
  //     break;
  // }
  // return (
  //   <View>
  //     <Text>
  //       {}월 {}주차 인기 테마
  //     </Text>
  //     {/* {content} */}
  //     <View style={styles}>
  //       <Text>크롤링한 포스터가 들어올 공간입니다</Text>
  //     </View>
  //   </View>
  // );
  // 테마 데이터 리스트를 렌더링하는 컴포넌트
  // const ThemeList = () => {
  // `themeListState`에서 데이터를 가져옵니다 (여기서는 직접 더미 데이터를 사용합니다).
  const themeList = themeListState; // 실제 앱에서는 Recoil의 useRecoilValue 훅을 사용하여 상태를 가져옵니다.

  // 리스트 아이템 렌더링 함수
  const renderListItem = ({ item }) => {
    // 아이콘 타입을 결정합니다. (예: minHeadcount가 1이면 'person', 그 외는 'personGroup')
    const iconType = item.minHeadcount === 1 ? "person" : "personGroup";
    // 체크박스는 예제로 항상 포함시켰습니다. 실제 사용에서는 조건에 맞게 조정하세요.
    const rightType = "checkbox";

    return (
      <ListItem
        icon={iconType}
        title={item.title}
        subTitle={item.explanation}
        right={rightType}
        // onPress 핸들러 추가 가능
      />
    );
  };

  return (
    <FlatList
      data={themeList}
      renderItem={renderListItem}
      keyExtractor={item => item.id}
    />
  );
};

// 레이아웃을 보기 위한 임시 css입니다.
const styles = StyleSheet.create({
  padding: 120,
});

export default WeeklyTheme;
// export default ThemeList;
