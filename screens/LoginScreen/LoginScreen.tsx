import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import CustomButton from '../../components/Button/Button';
import { Text } from 'react-native';
import CustomCheckBox from '../../components/CheckBox/CustomCheckBox';

const LoginScreen = () => {
  return (
    <ScrollView>
      <Button title="LoginScreenDemo" />
      <CustomButton value='Kakao로 로그인' />
      <CustomButton value='Google로 로그인' />
      <Text>로그인 기억하기</Text>
      <CustomCheckBox></CustomCheckBox>
      <CustomButton value='로그인 없이 진행' />
    </ScrollView>
  );
};

export default LoginScreen;
