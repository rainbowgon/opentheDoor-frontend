import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, ButtonText } from './ButtonStyle';

//TODO - create Button Custom Style

export interface CustomButtonProps {
  value?: string;
  size?: "large" | "medium" | "small" | "xsmall";
  mode?: "text" | "outlined" | "static" | "selected" | "inactive" | "error" | "kakao";
  border?: "square" | "round";
  onPress?: () => any;
}

/**
 * size : 'large' | 'medium' | 'small' | 'xsmall' 
 *  
 * mode : 'text' | 'outlined' | 'static' | 'selected' | 'inactive' | 'error'
 * 
 * border : 'square' | 'round'
 */
const CustomButton = ({
  value,
  size,
  mode,
  border,
  onPress,
}: CustomButtonProps) => {
  const handleButtonPress = () => {
    console.log(`${value} 버튼이 눌렸습니다.`);
    // alert(`${value} 버튼이 눌렸습니다.`);
    if (onPress) {
      onPress();
    }
  };

  return (
    <Button size={size} mode={mode} border={border} onPress={handleButtonPress} activeOpacity={0.7}>
      <ButtonText size={size} mode={mode}>{value}</ButtonText>
    </Button>
  )
};

export default CustomButton;
