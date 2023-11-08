import React from "react";
import { View, Button, ScrollView } from "react-native";
import CustomButton from "../../components/Button/CustomButton";
import Input from "../../components/Input/Input";
import PageContainer from "../../styles/commonStyles";

const SignUpScreen = () => {
  return (
    <PageContainer>
      <Input />
      <Input />
      <CustomButton
        value="인증번호 받기" />
      <Input />
      <Input />
      <Input />
    </PageContainer>
  );
};

export default SignUpScreen;
