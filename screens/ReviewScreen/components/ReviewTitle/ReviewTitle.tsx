import React, { useEffect, useState } from "react";
import { View, Button, ScrollView, Text } from "react-native";

export interface ReviewTitleprops {
  theme?: string;
  branch?: string;
  address?: string;
}

const ReviewTitle = ({ theme, branch, address }: ReviewTitleprops) => {
  return (
    <View>
      <Text>{theme || "테마"}</Text>
      <Text>
        {branch || "지점명"} | {address || "주소명"}
      </Text>
    </View>
  );
};

export default ReviewTitle;
