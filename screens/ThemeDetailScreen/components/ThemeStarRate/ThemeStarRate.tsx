import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StarOn from "../../../../assets/icons/icon-star-on.png";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../../recoil/theme/theme";
import { ThemeStarRateContent, ThemeStarRateIcon, ThemeStarRateTitle, ThemeStarRateViewContent } from "./ThemeStarRateStyle";

const ThemeStarRate = () => {

  const theme = useRecoilValue(themeState);
  return (
    <ThemeStarRateViewContent>
      <ThemeStarRateIcon source={StarOn} />
      <ThemeStarRateTitle>{theme.ratingScore}</ThemeStarRateTitle>
      <ThemeStarRateContent> ({theme.reviewCount})</ThemeStarRateContent>
    </ThemeStarRateViewContent>
  );
};

export default ThemeStarRate;
