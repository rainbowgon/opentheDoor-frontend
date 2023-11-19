import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Marker, Region } from "react-native-maps";
import LinearGradient from "react-native-linear-gradient";

// components
import CustomButton from "../../components/Button/CustomButton";
import CustomMap from "../../components/Maps/Map";
import CustomFab from "../../components/Fab/Fab";
import Calendar from "../../components/Calendar/Calendar";
import BarGraph from "../../components/BarGraph/BarGraph";
import EscapeInfo from "../../components/EscapeInfo/EscapeInfo";
import ThemeTitleContent from "./components/ThemeTitleContent/ThemeTitleContent";
import EscapeCharacter from "./components/EscapeInfoView/EscapeCharacter";

// images
import ImageDefault from "../../assets/images/image-default.png";

// icons
import StarOn from "../../assets/icons/icon-star-on.png";
import ZoomIcon from "../../assets/icons/icon-zoom.png";

// styles
import {
  GetImageView,
  StyledView,
  ThemeDetailContainer,
  ThemeDetailContent,
  ThemeDetailImage,
  ThemeDetailMapView,
  ThemeDetailReviewTitle,
  ThemeDetailReviewTitleButtons,
  ThemeDetailScrollView,
  ThemeDetailTitleView,
  Title,
} from "./ThemeDetailScreenStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "../../recoil/theme/theme";
import ThemeStarRate from "./components/ThemeStarRate/ThemeStarRate";
import MyReview from "./components/MyReview/MyReview";
import ReviewItem from "../../components/Review/ReviewItem";
import { reviewListState } from "../../recoil/review/review";
import { ImageBackground } from "react-native";
import Header from "../../components/Header/Header";
import { Image } from "react-native";

const ThemeDetailScreen = () => {
  const theme = useRecoilValue(themeState);
  const [region, setRegion] = useState<Region>({
    latitude: theme?.latitude || 37.5665,
    longitude: theme?.longitude || 126.978,
    latitudeDelta: 0.004,
    longitudeDelta: 0.004,
  });

  console.log(theme?.priceList?.price);
  const navigation = useNavigation();
  const reviewList = useRecoilValue(reviewListState);

  return (
    <ThemeDetailContainer>
      <ThemeDetailImage
        // source={ImageDefault}
        source={{ uri: theme.poster }}
        onError={(error) => console.error("Image load error:", error)}
      />
      <ThemeDetailScrollView>
        <Header
          back="true"
        />
        <GetImageView>
          <LinearGradient
            colors={[
              "rgba(255, 255, 255, 0)",
              "rgba(255, 255, 255, 0)",
              "rgba(25, 24, 29, 1)",
            ]}
            style={styles.linearGradient}
          />
        </GetImageView>
        <ThemeDetailContent>
          <ThemeTitleContent />
          <ThemeStarRate />
          <EscapeCharacter />
          <EscapeInfo
            // TODO - theme?.priceList로 넣기
            price={theme?.priceList?.price}
            minPerson={theme?.minHeadcount}
            maxPerson={theme?.maxHeadcount}
            time={theme?.timeLimit}
          />
          <StyledView />
          <View>
            <Calendar />
          </View>
          <StyledView />
          <View>
            <ThemeDetailTitleView>
              <Title>이 가게 위치</Title>
            </ThemeDetailTitleView>
            {/* FIXME - 현재는 default(서울시청) 기반, 추후 axios로 받아온 가게 데이터로 변경해야해요  */}
            <ThemeDetailMapView>
              <CustomFab
                icon={ZoomIcon}
                onPress={() => navigation.navigate("searchStack")}
              />
              <CustomMap
                region={region}
                style={{ minHeight: 100, minWidth: 300 }}
                scrollEnabled={false}
                zoomEnabled={false}
                rotateEnabled={false}
                pitchEnabled={false}>
                <Marker coordinate={region} title={"이 가게 위치"} />
              </CustomMap>
            </ThemeDetailMapView>
            <CustomButton mode="selected" value="내가 한 테마와 비교하기" />
          </View>
          <StyledView />
          <MyReview />
          <StyledView />
          <View>
            <ThemeDetailTitleView>
              <View>
                <Title>리뷰</Title>
                <Image source={StarOn} />
                <Text>별점</Text>
                <Text>리뷰 수</Text>
              </View>
              <Text>총 리뷰 수{ }건</Text>
            </ThemeDetailTitleView>
            <BarGraph />
            <View>
              {reviewList?.map(review => (
                <ReviewItem review={review} />
              ))}
            </View>
            <CustomButton mode="selected" value="리뷰 더 보기" />
          </View>
          <View>
            <CustomButton mode="inactive" value="리뷰 쓰기" />
            <CustomButton mode="selected" value="예약 or 예약 대기" />
          </View>
        </ThemeDetailContent>
      </ThemeDetailScrollView>
    </ThemeDetailContainer>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

const stylediv = StyleSheet.create({
  container: {
    height: 250,
  },
});
export default ThemeDetailScreen;
