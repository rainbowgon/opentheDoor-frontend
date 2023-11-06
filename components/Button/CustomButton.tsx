import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonContainer, Button, ButtonText } from './CustomButtonStyle';

//TODO - create Button Custom Style

export interface CustomButtonProps {
  value?: string;
  size?: string;
  mode?: string;
  border?: string;
  onPress?: any;
}

const CustomButton = ({
  value,
  size,
  mode,
  border,
  onPress,
}: CustomButtonProps) => {
  const handleButtonPress = () => {
    console.log('버튼이 눌렸습니다.');
    // alert('버튼이 눌렸습니다.');
  };

  // size : 'large' | 'medium' | 'small' | 'xsmall'
  // mode : 'text' | 'outlined' | 'static' | 'selected' | 'inactive' | 'error'
  // border : 'square' | 'round'
  return (
    <Button size={size} mode={mode} border={border} onPress={handleButtonPress} activeOpacity={0.7}>
      <ButtonText size={size} mode={mode}>{value}</ButtonText>
    </Button>
  )
};

export default CustomButton;
