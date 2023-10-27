import * as React from 'react';
import {Button} from 'react-native-paper';

//TODO - create Button Custom Style

const CustomButton = () => (
  // 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal'
  <Button mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
  
);

export default CustomButton;
