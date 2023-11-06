import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonContainer, Button, ButtonText } from './CustomButtonStyle';

//TODO - create Button Custom Style

export interface CustomButtonProps {
  value?: string;
  mode?: string;
  border?: string;
  onPress?: any;
}

const CustomButton = ({
  value,
  mode,
  border,
  onPress,
}: CustomButtonProps) => {
  const handleButtonPress = () => {
    alert('버튼이 눌렸습니다.');
  };

  // 'text' | 'outlined' | 'selected' | 'inactive' | 'error'
  return (
    // <ButtonContainer mode="contained">
    <ButtonContainer>
      <Button mode={mode} border={border} onPress={handleButtonPress}>
        <ButtonText mode={mode}>{value}</ButtonText>
      </Button>
    </ButtonContainer>
  )
};

export default CustomButton;
