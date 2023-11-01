import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export interface CustomCheckBoxProps {
  checked?: boolean;
  setChecked?: any;
  style?: string;
  onPress?: any;
}

const CustomCheckBox = ({
  checked,
  setChecked,
  style,
  onPress,
}: CustomCheckBoxProps) => {
  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        checked && setChecked(!checked);
      }}
    />
  );
};

export default CustomCheckBox;