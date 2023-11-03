import React from 'react';
import { View, Button, ScrollView, Image } from 'react-native';

// image
import ImageDefault from "../../assets/images/image-default.png";
import CustomButton from '../../components/Button/CustomButton';
import Input from '../../components/Input/Input';

const ProfileUpdateScreen = () => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default ProfileUpdateScreen;
