import React from "react";
import { View, Button, ScrollView } from "react-native";
import CustomButton from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const SignUpScreen = () => {
  return (
    <ScrollView>
      <Input />
      <Input />
      <CustomButton
        value="인증번호 받기" />
      <Input />
      <Input />
      <Input />
    </ScrollView>
  );
};

export default SignUpScreen;
