//TODO - create InfoCard Custom Style

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BookmarkItem,
  BookmarkView,
  MiniCardView,
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
} from "./MiniInfoCardStyle";

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
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { myReviewState, reviewListState } from "../../recoil/review/review";
import { modalState } from "../../recoil/map/map";
import { userAccessToken } from "../../recoil/member/member";
import StarRating from "../StarRating/StarRating";

// TODO - 미사용 태그는 비활성화 진행

const MiniInfoCard = (
  {
    themeId,
    venue = null,
    title = null,
    poster = null,
    level = null,
    minHeadcount = null,
    maxHeadcount = null,
    priceList = null,
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
    setModalOpen(false);
    console.log("themeDetail 페이지로 이동");
    navigation.navigate("themeDetail");
  };
  const [isModalOpen, setModalOpen] = useRecoilState(modalState);
  const setThemeItem = useSetRecoilState(themeState);
  const setMyThemeReview = useSetRecoilState(myReviewState);
  const setThemeReviewList = useSetRecoilState(reviewListState);
  const accessToken = useRecoilValue(userAccessToken);

  // pathes
  const SearchServicePath = `/search-service`;
  const MemberServicePath = `/member-service`;

  // apis
  const ThemeAPI = "/themes";
  const ReviewAPI = "/reviews";

  const handleThemeDetail = useCallback(async () => {
    // if (loading) {
    //   return;
    // }

    try {
      // setLoading(true);

      const response = await axios.get(
        `${API_URL}${SearchServicePath}${ThemeAPI}/${themeId}`,
      );

      console.log("테마 상세 조회 성공", response.data);
      setThemeItem(response.data.data);
    } catch (error) {
      console.error("테마 상세 조회 실패", error);
    } finally {
    }
    if (accessToken === "") {
      try {
        // setLoading(true);

        const response = await axios.get(
          `${API_URL}${MemberServicePath}${ReviewAPI}/themes/one?themeId=${themeId}`,
        );
        console.log("테마 리뷰 1건 조회 (비회원) 성공", response.data);
        setThemeReviewList(response.data.data);
      } catch (error) {
        console.error("테마 리뷰 조회 실패", error);
      } finally {
      }
    }
    if (accessToken !== "") {
      try {
        // setLoading(true);

        const response = await axios.get(
          `${API_URL}${MemberServicePath}${ReviewAPI}/themes/all?themeId=${themeId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        console.log("테마 리뷰 전체 조회 성공", response.data);
        setThemeReviewList(response.data.data);
        return response.data;
      } catch (error) {
        console.error("테마 리뷰 조회 실패", error);
      } finally {
      }
    }

    try {
      // setLoading(true);
      const curThemeId = themeId && 1;

      console.log("accessToken", accessToken);

      const response = await axios.get(
        `${API_URL}${MemberServicePath}${ReviewAPI}/themes/my?themeId=${curThemeId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log("테마의 내가 쓴 리뷰 조회 성공", response.data);
      setMyThemeReview(response.data.data);
    } catch (error) {
      console.error("테마의 내가 쓴 리뷰 조회 실패", error);
    } finally {
    }
  }, []);

  return (
    <>
      {/* <TouchableOpacity onPress={onPress} activeOpacity={0.9}> */}
      <TouchableOpacity onPress={onPressCard} activeOpacity={0.9}>
        <MiniCardView>
          <ContentInfo>
            {title && <TitleText>{title}</TitleText>}
            <View>
              {venue && <ContentText>{venue}</ContentText>}
            </View>
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
              <StarRating />
              {/* <StarImage source={StarOn}></StarImage> */}
              <StarText>{ratingScore || " - "}</StarText>
              <ContentText> ({bookmarkCount || 0})</ContentText>
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
              1 !== 1 && (
                <View>
                  <CustomButton
                    size="xsmall"
                    mode="outlined"
                    value="예약 취소"
                  />
                  <CustomButton
                    size="xsmall"
                    mode="outlined"
                    value="예약 대기 취소"
                  />
                </View>
              )
            }
          </ContentButtonList>
        </MiniCardView>
      </TouchableOpacity>
      {
        // FIXME - 알림기능 건드리면서 수정
        1 !== 1 && (
          <>
            <CustomButton mode="inactive" value="오픈 알람 받기" />
            <CustomButton mode="selected" value="오픈 알람 받는 중" />
          </>
        )
      }
    </>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    height: 200,
    flexDirection: "column-reverse",
    padding: 5,
  },
});

export default MiniInfoCard;
