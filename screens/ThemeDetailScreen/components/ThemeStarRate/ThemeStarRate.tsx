import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StarOn from "../../../../assets/icons/icon-star-on.png";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../../recoil/theme/theme";
import { StarRatingContainter, ThemeStarRateContent, ThemeStarRateIcon, ThemeStarRateTitle, ThemeStarRateViewContent } from "./ThemeStarRateStyle";
import StarRating from "../../../../components/StarRating/StarRating";

const ThemeStarRate = () => {

  const theme = useRecoilValue(themeState);
  return (
    <StarRatingContainter>
      <View>
        <StarRating
          value={theme.ratingScore}
          size={28}
        />
      </View>
      <ThemeStarRateViewContent>
        <ThemeStarRateTitle>{theme.ratingScore}</ThemeStarRateTitle>
        <ThemeStarRateContent> ({theme.reviewCount ? theme.reviewCount : "0"})</ThemeStarRateContent>
      </ThemeStarRateViewContent>
    </StarRatingContainter>
  );
};

export default ThemeStarRate;
