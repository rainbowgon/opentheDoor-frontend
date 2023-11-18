import React from "react";
import { View, Text, Image } from "react-native";

// styles
import { ProfileImage, ProfileImageView, UserDate, UserId, UserProfileContainer, UserProfileInfo } from "./UserProfileStyle";

// components
import CustomButton from "../../../../components/Button/CustomButton";

// images
import ImageDefault from "../../../../assets/images/image-default.png";

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <UserProfileInfo>
        <ProfileImage source={ImageDefault} />
        <View>
          <UserId>아이디</UserId>
          <UserDate>생일</UserDate>
        </View>
      </UserProfileInfo>
      <CustomButton
        size="small"
        mode="outlined"
        value="프로필 수정"
      />
    </UserProfileContainer>
  );
};

export default UserProfile;
