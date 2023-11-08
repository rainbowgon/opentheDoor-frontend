import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { getThemeSort } from "../../../../recoil/selector/selector";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
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
  return (
    <View>
      <Text>
        {}월 {}주차 인기 테마
      </Text>
      {/* {content} */}
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
