import React from "react";
import { View } from "react-native";

// components
import CustomButton from "../../../../components/Button/CustomButton";

const UserFeatureList = () => {
  return (
    <View>
      <CustomButton
        value="예약 대기"
      />
      <CustomButton
        value="북마크"
      />
      <CustomButton
        value="리뷰"
      />
    </View>
  );
};

export default UserFeatureList;
