import * as React from 'react';
import { Button } from 'react-native-paper';

//TODO - create Button Custom Style

export interface CustomButtonProps {
  value?: string;
  style?: string;
  onPress?: any;
}

const CustomButton = ({
  value,
  style,
  onPress,
}: CustomButtonProps) => (
  // 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
  <Button mode="contained" onPress={onPress}>
    {value}
  </Button>
);

export default CustomButton;
