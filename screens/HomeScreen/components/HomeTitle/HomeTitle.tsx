import React from "react";
import { HomeScreenMainTitle, HomeScreenSubTitle, HomeTitleView } from "./HomeTitleStyle";

const HomeTitle = () => {
  return (
    <HomeTitleView>
      <HomeScreenMainTitle>테마 검색</HomeScreenMainTitle>
      <HomeScreenSubTitle>내 등급에 맞는 방탈출을 찾아보세요!</HomeScreenSubTitle>
    </HomeTitleView>
  );
};

export default HomeTitle;
