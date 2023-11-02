// //TODO - create Input
// import React from 'react';
// import {TextInput, TextInputProps, StyleSheet} from 'react-native';

// interface Props extends TextInputProps {
//   customProp?: string;
// }

// const Input: React.FC<Props> = props => {
//   return <TextInput style={styles.input} {...props} />;
// };

// const styles = StyleSheet.create({
//   input: {
//     // height: 40,
//     // borderColor: 'gray',
//     // borderWidth: 1,
//     // paddingLeft: 10,
//     backgroundColor: 'black',
//   },
// });

// export default Input;

import * as React from "react";
import { TextInput } from "react-native-paper";

const Input = ({ label = "" }) => {
  const [text, setText] = React.useState("");
  // const label = '';

  return (
    <TextInput
      label={label}
      // placeholder="email"
      mode="outlined"
      value={text}
      onChangeText={text => setText(text)}
      // textColor="#FFFFFF"
      // color
    />
  );
};

export default Input;
