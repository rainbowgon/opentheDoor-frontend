import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../../../components/Button/CustomButton";
import { ThemeDetailReviewTitleButtons, ThemeDetailTitleView, Title } from "../../ThemeDetailScreenStyle";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../../recoil/theme/theme";
import ReviewItem from "../../../../components/Review/ReviewItem";
import { myReviewState } from "../../../../recoil/review/review";

const MyReview = () => {
  const theme = useRecoilValue(themeState);
  const myReview = useRecoilValue(myReviewState);

  return (
    <View>
      <ThemeDetailTitleView>
        <Title>내가 쓴 리뷰</Title>
        <ThemeDetailReviewTitleButtons>
          <CustomButton mode="inactive" size="xsmall" value="삭제" />
          <CustomButton mode="selected" size="xsmall" value="수정" />
        </ThemeDetailReviewTitleButtons>
      </ThemeDetailTitleView>
      <ReviewItem review={myReview} />
    </View>
  );
};

export default MyReview;
