import React from 'react';
import { View, Button, ScrollView, Image } from 'react-native';
import Input from '../../components/Input/Input';
import PageContainer from "../../styles/commonStyles";

// image
import ImageDefault from "../../assets/images/image-default.png";
import CustomButton from '../../components/Button/CustomButton';

const ProfileUpdateScreen = () => {
  return (
    <PageContainer>
      <Button title="ProfileUpdateScreenDemo" />
      <Image source={ImageDefault} />
      <CustomButton
        value="수정하기"
      />
      <Input></Input>
      <Input></Input>
      <CustomButton
        value="인증번호"
      />
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <CustomButton
        value="프로필 수정"
      />
    </PageContainer>
  );
};

export default ProfileUpdateScreen;
