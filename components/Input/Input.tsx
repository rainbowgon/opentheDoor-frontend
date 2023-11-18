import * as React from "react";
import { TextInput } from "react-native-paper";

const Input = ({
  label = "",
  icon = "",
  multiline = false,
  disabled = false,
  placeholder = "",
  value,
  onChangeText,
  onKeyPress,
  onIconPress,
}) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      mode="outlined"
      right={<TextInput.Icon icon={icon} onPress={onIconPress} />}
      multiline={multiline}
      value={value}
      onChangeText={onChangeText}
      // onKeyPress={onKeyPress}
      disabled={disabled}
    />
  );
};

export default Input;
