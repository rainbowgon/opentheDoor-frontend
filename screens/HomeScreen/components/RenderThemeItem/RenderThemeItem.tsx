import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// styles
import { Title, Venue, RenderThemeItemView, RenderThemeItemImage, RenderThemeItemContent, StarrateView, IconImage, StarRate } from "./RenderThemeItemStyle";
import { ThemeSimpleInfoType, themeState } from "../../../../recoil/theme/theme";

// images
import ImageDefault from "../../../../assets/images/image-default.png";

// icons
import StarOn from "../../../../assets/icons/icon-star-on.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { myReviewState, reviewListState } from "../../../../recoil/review/review";
import { userAccessToken } from "../../../../recoil/member/member";
import axios from "axios";
import { API_URL } from "../../../../constants/urls";
import { useNavigation } from "@react-navigation/native";
import StarRating from "../../../../components/StarRating/StarRating";

const RenderThemeItem = ({ item }: { item: ThemeSimpleInfoType }) => {
  const navigation = useNavigation();

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

  const onPressCard = () => {
    handleThemeDetail();
    console.log("themeDetail 페이지로 이동");
    navigation.navigate("themeDetail");
  };

  const handleThemeDetail = useCallback(async () => {
    // if (loading) {
    //   return;
    // }

    try {
      // setLoading(true);

      const response = await axios.get(
        `${API_URL}${SearchServicePath}${ThemeAPI}/${item.themeId}`,
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
          `${API_URL}${MemberServicePath}${ReviewAPI}/themes/one?themeId=${item.themeId}`,
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
          `${API_URL}${MemberServicePath}${ReviewAPI}/themes/all?themeId=${item.themeId}`,
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

    // FIXME - 내가 쓴 리뷰 활성화
    // try {
    //   // setLoading(true);
    //   const curThemeId = item.themeId && 1;

    //   console.log("accessToken", accessToken);

    //   const response = await axios.get(
    //     `${API_URL}${MemberServicePath}${ReviewAPI}/themes/my?themeId=${curThemeId}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     },
    //   );
    //   console.log("테마의 내가 쓴 리뷰 조회 성공", response.data);
    //   setMyThemeReview(response.data.data);
    // } catch (error) {
    //   console.error("테마의 내가 쓴 리뷰 조회 실패", error);
    // } finally {
    // }
  }, []);

  return (
    <RenderThemeItemView onPress={onPressCard}>
      <RenderThemeItemImage
        source={
          item?.poster
            ? { uri: item.poster }
            : ImageDefault
        }
      />
      <RenderThemeItemContent>
        <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(25, 24, 29, 1), rgba(25, 24, 29, 1)']} style={styles.linearGradient}>
          <View>
            <Title>{item?.title}</Title>
            <Venue>{item?.venue}</Venue>
            {/* <StarrateView>
              <IconImage source={StarOn}></IconImage>
              <StarRate>{item.ratingScore || "-"}</StarRate>
            </StarrateView> */}
            <StarRating
              value={item.ratingScore}
            />
          </View>
        </LinearGradient>
      </RenderThemeItemContent>
    </RenderThemeItemView >
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    height: 300,
    flexDirection: "column-reverse",
    padding: 5,
  },
});

export default RenderThemeItem;
