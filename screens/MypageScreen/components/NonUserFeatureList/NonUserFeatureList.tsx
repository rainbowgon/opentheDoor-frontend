import React from "react";
import { View } from "react-native";

// components
import CustomButton from "../../../../components/Button/Button";

const NonUserFeatureList = () => {
  return (
    <View>
      <CustomButton
        value="비회원 예약 조회"
        size="large"
        mode="selected"
        border="square"
      />
    </View>
  );
};

export default NonUserFeatureList;
