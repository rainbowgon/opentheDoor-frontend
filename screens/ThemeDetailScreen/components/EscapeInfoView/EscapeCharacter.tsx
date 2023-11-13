import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../../../components/Button/CustomButton";
import { EscapeCharacterContainer, EscapeCharacterContent, GenreListView, MainTitle } from "./EscapeCharacterStyle";
import { SubContent } from "../../ThemeDetailScreenStyle";
import EscapeCharacterItem from "./components/EscapeCharacterItem/EscapeCharacterItem";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../../recoil/theme/theme";

const EscapeCharacter = () => {
  const theme = useRecoilValue(themeState);

  return (
    <EscapeCharacterContainer>
      <EscapeCharacterContent>
        <EscapeCharacterItem
          title="난이도"
          vaule={theme?.level}
        />
        <EscapeCharacterItem
          title="장치 비율"
          vaule={theme?.lockRatio}
        />
      </EscapeCharacterContent>
      <EscapeCharacterContent>
        <EscapeCharacterItem
          title="활동성"
          vaule={theme?.activity}
        />
        <EscapeCharacterItem
          title="공포도"
          vaule={theme?.horror}
        />
      </EscapeCharacterContent>
    </EscapeCharacterContainer>
  );
};

export default EscapeCharacter;
