import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export interface CustomCheckBoxProps {
  checked?: boolean;
  setChecked?: any;
  style?: string;
  onClick?: any;
}

const CustomCheckBox = ({
  checked,
  setChecked,
  style,
  onClick,
}: CustomCheckBoxProps) => {
  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CustomCheckBox;