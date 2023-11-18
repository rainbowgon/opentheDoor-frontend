//TODO - create InfoCard Custom Style

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BookmarkItem,
  BookmarkView,
  CardView,
  ContentButtonList,
  ContentImage,
  ContentInfo,
  ContentInfoList,
  ContentText,
  IconImage,
  ImageGuideView,
  StarImage,
  StarText,
  SubTitleText,
  TitleText,
} from "./InfoCardStyle";

// components
import CustomButton from "../Button/CustomButton";

// images
import ImageDefault from "../../assets/images/image-default.png";

// icons
import StarOn from "../../assets/icons/icon-star-on.png";
import BookmarkDisable from "../../assets/icons/icon-bookmark-disable.png";
import BookmarkOff from "../../assets/icons/icon-bookmark-off.png";
import BookmarkOn from "../../assets/icons/icon-bookmark-on.png";
import { ThemeType, themeState } from "../../recoil/theme/theme";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { getThemeDetail } from "../../recoil/theme/themeFeature";
import { useCallback } from "react";
import axios from "axios";
import { API_URL } from "../../constants/urls";
import { useRecoilState, useSetRecoilState } from "recoil";

// TODO - 미사용 태그는 비활성화 진행

const InfoCard = (
  {
    themeId,
    venue = null,
    title = null,
    poster = null,
    level = null,
    minHeadcount = null,
    maxHeadcount = null,
    priceList: price = null,
    timeLimit = null,
    latitude = null,
    longitude = null,
    location = null,
    explanation = null,
    reservationNotice = null,
    tel = null,
    genre = null,
    // activity = null,
    // lockRatio = null,
    // horror = null,
    ratingScore = null,
    reviewCount = null,
    bookmarkCount = null,
    onPress,
  }: ThemeType,
  style?: null | string,
  // onPress?: () => {},
) => {
  const navigation = useNavigation();

  const onPressCard = () => {

    console.log(themeId);
    // getThemeDetail(themeId);
    handleThemeDetail();
    console.log("themeDetail 페이지로 이동")
    navigation.navigate("themeDetail");
  };

  const setThemeItem = useSetRecoilState(themeState);

  // apis
  const SearchServicePath = `/search-service`;
  const ThemeAPI = "/themes";

  const handleThemeDetail = useCallback(async () => {
    // if (loading) {
    //   return;
    // }

    try {
      // setLoading(true);

      const response = await axios
        .get(`${API_URL}${SearchServicePath}${ThemeAPI}/${themeId}`)

      console.log("테마 상세 조회 성공", response.data);
      setThemeItem(response.data.data);
    } catch (error) {
      console.error("테마 상세 조회 실패", error);
    } finally {
    }

  }, []);

  return (
    <>
      {/* <TouchableOpacity onPress={onPress} activeOpacity={0.9}> */}
      <TouchableOpacity onPress={onPressCard} activeOpacity={0.9}>
        <CardView>
          <ImageGuideView>
            <ContentImage
              source={{ uri: poster }}
              onError={(error) => console.error("Image load error:", error)}
            />
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 0.0 }}
              colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(36, 36, 35, 1)']}
              style={styles.linearGradient}
            >
            </LinearGradient>
          </ImageGuideView>
          <ContentInfo>
            {title && <TitleText> {title}</TitleText>}
            <View>
              {venue && <ContentText>{venue}</ContentText>}
              {(level || timeLimit) && (
                <ContentText>
                  {level && `난이도 : ${level}`} {level && timeLimit && "|"}{" "}
                  {timeLimit && `소요시간 : ${timeLimit}분`}
                </ContentText>
              )}
              {tel && <SubTitleText>{tel}</SubTitleText>}
            </View>
            {minHeadcount && maxHeadcount && (
              <>
                <SubTitleText>
                  {price || "- "}원
                  ({minHeadcount || "0"}
                  {minHeadcount && maxHeadcount && " ~ "}
                  {maxHeadcount || "0"}명)
                </SubTitleText>
              </>
            )}
            {genre && (
              <ContentInfoList>
                {genre.map(category => (
                  <CustomButton
                    value={category}
                    size="xsmall"
                    border="round"
                    mode="inactive"
                  />
                ))}
              </ContentInfoList>
            )}
            <ContentInfoList>
              <StarImage source={StarOn}></StarImage>
              <StarText>{ratingScore || " - "}</StarText>
              <ContentText>({reviewCount || 0})</ContentText>
            </ContentInfoList>
          </ContentInfo>
          <ContentButtonList>
            <BookmarkItem>
              {/* <BookmarkView> */}
              {/* <IconImage source={BookmarkDisable} />*/}
              {/* <IconImage source={BookmarkOn} /> */}
              <IconImage source={BookmarkOff} />
              <ContentText>{bookmarkCount || 0}</ContentText>
              {/* </BookmarkView> */}
            </BookmarkItem>
            {
              // FIXME - 예약기능 건드리면서 수정
              1 !== 1 &&
              <View>
                <CustomButton size="xsmall" mode="outlined" value="예약 취소" />
                <CustomButton
                  size="xsmall"
                  mode="outlined"
                  value="예약 대기 취소"
                />
              </View>
            }
          </ContentButtonList>
        </CardView>
      </TouchableOpacity>
      {
        // FIXME - 알림기능 건드리면서 수정
        1 !== 1 &&
        <>
          <CustomButton mode="inactive" value="오픈 알람 받기" />
          <CustomButton mode="selected" value="오픈 알람 받는 중" />
        </>
      }
    </>

  )
};

var styles = StyleSheet.create({
  linearGradient: {
    height: 200,
    flexDirection: "column-reverse",
    padding: 5,
  },
});

export default InfoCard;
