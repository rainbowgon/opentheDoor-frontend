import React from "react";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// styles
import { Title, Venue, RenderThemeItemView, RenderThemeItemImage, RenderThemeItemContent, StarrateView, IconImage, StarRate } from "./RenderThemeItemStyle";
import { ThemeSimpleInfoType } from "../../../../recoil/theme/theme";

// images
import ImageDefault from "../../../../assets/images/image-default.png";

// icons
import StarOn from "../../../../assets/icons/icon-star-on.png";

const RenderThemeItem = ({ item }: { item: ThemeSimpleInfoType }) => {
  console.log(item.poster)
  return (
    <RenderThemeItemView>
      <RenderThemeItemImage
        source={{ uri: item.poster } || ImageDefault} //FIXME 추후 uri로 가져오도록, 지금 마스터키 측에서 막아놨어요.
      />
      <RenderThemeItemContent>
        <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(25, 24, 29, 1)']} style={styles.linearGradient}>
          <View>
            <Title>{item?.title}</Title>
            <Venue>{item?.venue}</Venue>
            <StarrateView>
              <IconImage source={StarOn}></IconImage>
              <StarRate>{item.ratingScore || "-"}</StarRate>
            </StarrateView>
          </View>
        </LinearGradient>
      </RenderThemeItemContent>
    </RenderThemeItemView >
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    height: 200,
    flexDirection: "column-reverse",
    padding: 5,
  },
});

export default RenderThemeItem;
