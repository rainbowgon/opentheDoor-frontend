import React from "react";
import { View } from "react-native";

// components
import CustomButton from "../../../../components/Button/CustomButton";

const UserFeatureList = () => {
  return (
    <View>
      <CustomButton
        value="예약 대기"
        size="large"
        mode="inactive"
        border="square"
      />
      <CustomButton
        value="북마크"
        size="large"
        mode="inactive"
        border="square"
      />
      <CustomButton
        value="리뷰"
        size="large"
        mode="inactive"
        border="square"
      />
    </View>
  );
};

export default UserFeatureList;
