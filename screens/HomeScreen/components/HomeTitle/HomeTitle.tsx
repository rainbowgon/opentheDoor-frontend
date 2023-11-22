import React from "react";
import {
  HomeScreenMainTitle,
  HomeScreenSubTitle,
  HomeTitleView,
} from "./HomeTitleStyle";

const HomeTitle = () => {
  return (
    <HomeTitleView>
      <HomeScreenMainTitle>테마 검색</HomeScreenMainTitle>
      <HomeScreenSubTitle>
        오픈더도어에서 방탈출을 찾아보세요!
      </HomeScreenSubTitle>
    </HomeTitleView>
  );
};

export default HomeTitle;
