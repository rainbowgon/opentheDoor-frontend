import React from "react";
import { View, Text, Image } from "react-native";

// components
import CustomButton from "../../../../components/Button/Button";

// images
import ImageDefault from "../../../../assets/images/image-default.png";

const UserProfile = () => {
  return (
    <View>
      <Image source={ImageDefault} />
      <Text>아이디</Text>
      <Text>생일</Text>
      <CustomButton
        value="프로필 수정"
      />
    </View>
  );
};

export default UserProfile;
