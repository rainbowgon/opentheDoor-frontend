import React from "react";
import { View } from "react-native";

// components
import CustomButton from "../../../../components/Button/CustomButton";

const NonUserFeatureList = () => {
  return (
    <View>
      <CustomButton
        value="비회원 예약 조회"
      />
    </View>
  );
};

export default NonUserFeatureList;
