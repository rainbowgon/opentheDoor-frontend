import * as React from "react";
import { TextInput } from "react-native-paper";

//NOTE const [text, setText] = React.useState("");
//NOTE 얘네는 Input을 import 한 곳에서 밀어넣어주기 store에서 관리할지 onChange에 뭘 걸지 고민
const Input = ({
  label = "",
  multiline = false,
  disabled = false,
  placeholder = "",
}) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      mode="outlined"
      multiline={multiline}
      value={text}
      onChangeText={text => setText(text)}
      disabled={disabled}
      // textColor="#FFFFFF"
      // color
    />
  );
};

export default Input;
