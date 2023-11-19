import React from "react";
import { View, Text, Image } from "react-native";
import { useRecoilValue } from "recoil";

// datas
import { memberState } from "../../../../recoil/member/member";

// styles
import { ProfileImage, ProfileImageView, UserDate, UserId, UserProfileContainer, UserProfileInfo } from "./UserProfileStyle";

// components
import CustomButton from "../../../../components/Button/CustomButton";

// images
import ImageDefault from "../../../../assets/images/image-default.png";

const UserProfile = () => {
  const userInfo = useRecoilValue(memberState);
  return (
    <UserProfileContainer>
      <UserProfileInfo>
        <ProfileImage source={ImageDefault} />
        <View>
          <UserId>{userInfo.name}</UserId>
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
