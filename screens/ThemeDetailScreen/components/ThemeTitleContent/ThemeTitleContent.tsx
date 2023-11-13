import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../../../components/Button/CustomButton";
import { GenreListView, MainTitle, ThemeTitleView } from "./ThemeTitleContentStyle";
import { SubContent } from "../../ThemeDetailScreenStyle";
import { themeState } from "../../../../recoil/theme/theme";
import { useRecoilValue } from "recoil";

const ThemeTitleContent = () => {

  const theme = useRecoilValue(themeState);

  return (
    <ThemeTitleView>
      <MainTitle>{theme?.title}</MainTitle>
      <SubContent>{theme?.venue}</SubContent>
      <GenreListView>
        {theme?.genre?.map((category) => (
          <CustomButton mode="selected" size="xsmall" border="round" value={category} />
        ))}
      </GenreListView>
    </ThemeTitleView>
  );
};

export default ThemeTitleContent;
