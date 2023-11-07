import * as React from "react";
import { Checkbox } from "react-native-paper";

export interface CustomCheckBoxProps {
  checked?: boolean;
  setChecked?: any;
  style?: string;
  onPress?: any;
  label?: string;
}

const CustomCheckBox = ({
  checked,
  setChecked,
  style,
  onPress,
  label,
}: CustomCheckBoxProps) => {
  return (
    <Checkbox
      status={checked ? "checked" : "unchecked"}
      // onPress={() => {
      //   checked && setChecked(!checked);
      // }}
      onPress={onPress}
    />
  );
};

export default CustomCheckBox;
