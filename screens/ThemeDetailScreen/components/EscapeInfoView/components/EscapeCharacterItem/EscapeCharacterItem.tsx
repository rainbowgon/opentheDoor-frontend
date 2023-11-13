import React from "react";
import { Text, View } from "react-native";
import { EscapeCharacterItemContainer, EscapeCharacterItemContent, EscapeCharacterItemSubText, EscapeCharacterItemText, EscapeCharacterItemTitle } from "./EscapeCharacterItemStyle";

const EscapeCharacterItem = ({ title, vaule }: { title: string, vaule: null | number }) => {
  return (
    <EscapeCharacterItemContainer>
      <EscapeCharacterItemTitle>{title && title}</EscapeCharacterItemTitle>
      <EscapeCharacterItemContent>
        <EscapeCharacterItemText>{vaule || "-"}</EscapeCharacterItemText>
        <EscapeCharacterItemSubText>/5</EscapeCharacterItemSubText>
      </EscapeCharacterItemContent>
    </EscapeCharacterItemContainer>
  );
};

export default EscapeCharacterItem;
