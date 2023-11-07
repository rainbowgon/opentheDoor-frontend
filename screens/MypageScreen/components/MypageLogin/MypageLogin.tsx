import React from "react";
import { View } from "react-native";

// components
import CustomButton from "../../../../components/Button/Button";

const MypageLogin = () => {
  return (
    <View>
      <CustomButton
        value="로그인 하러가기"
        size="large"
        mode="inactive"
        border="square"
      />
    </View>
  );
};

export default MypageLogin;
