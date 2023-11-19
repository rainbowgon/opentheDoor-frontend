import * as React from "react";
import { TextInput } from "react-native-paper";

const Input = ({
  label = "",
  icon = null,
  multiline = false,
  disabled = false,
  placeholder = "",
  value,
  onChangeText,
  onKeyPress,
  onIconPress,
  editable,
}) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      mode="outlined"
      right={icon && <TextInput.Icon icon={icon} onPress={onIconPress} />}
      multiline={multiline}
      value={value}
      onChangeText={onChangeText}
      // onKeyPress={onKeyPress}
      disabled={disabled}
      editable={editable}
    />
  );
};

export default Input;
