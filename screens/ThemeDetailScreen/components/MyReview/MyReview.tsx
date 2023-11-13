import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../../../components/Button/CustomButton";
import { ThemeDetailReviewTitleButtons, ThemeDetailTitleView } from "../../ThemeDetailScreenStyle";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../../recoil/theme/theme";
import { Title } from "react-native-paper";

const MyReview = () => {
  const theme = useRecoilValue(themeState);

  return (
    <View>
      <ThemeDetailTitleView>
        <Title>내가 쓴 리뷰</Title>
        <ThemeDetailReviewTitleButtons>
          <CustomButton mode="inactive" size="xsmall" value="삭제" />
          <CustomButton mode="selected" size="xsmall" value="수정" />
        </ThemeDetailReviewTitleButtons>
      </ThemeDetailTitleView>
      <Text>내가 쓴 리뷰 아이템</Text>
    </View>
  );
};

export default MyReview;
