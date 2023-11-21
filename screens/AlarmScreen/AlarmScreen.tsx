import React, { useCallback, useEffect, useState } from "react";

// components
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";
import PageContainer, { FixedPageContainer } from "../../styles/commonStyles";
import CustomButton from "../../components/Button/CustomButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { alarmListState, alarmType } from "../../recoil/alarm/alarm";
import { API_URL } from "../../constants/urls";
import axios from "axios";
import { userAccessToken } from "../../recoil/member/member";
import { useNavigation } from "@react-navigation/native";
import { NoAlarmText, NoAlarmView } from "./AlarmScreenStyle";
import { themeState } from "../../recoil/theme/theme";
import { myReviewState, reviewListState } from "../../recoil/review/review";

const AlarmScreen = () => {
  // ServicePaths
  const NotificatiomServicePath = `/notification-service`;
  const SearchServicePath = `/search-service`;
  const MemberServicePath = `/member-service`;

  // apis
  const ThemeAPI = "/themes";
  const ReviewAPI = "/reviews";
  const NotificationAPI = "/notifications";

  // access token
  const accessToken = useRecoilValue(userAccessToken);

  const navigation = useNavigation();

  const [alarmList, setAlarmList] = useRecoilState(alarmListState);
  const setThemeItem = useSetRecoilState(themeState);
  const setThemeReviewList = useSetRecoilState(reviewListState);
  const setMyThemeReview = useSetRecoilState(myReviewState);

  const getNotification = useCallback(async () => {
    const response = await axios
      .get(`${API_URL}${NotificatiomServicePath}${NotificationAPI}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        console.log("알림 전체보기 성공", response.data);
        setAlarmList(response.data.data);
      })
      .catch(error => {
        console.error("알림 전체보기 실패", error);
      });
  }, []);

  useEffect(() => {
    getNotification();
  }, [])

  const handleThemeDetail = useCallback(async (alarm: alarmType) => {
    // if (loading) {
    //   return;
    // }
    const themeId = alarm.themeId && "1";

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
      // setLoading(true);7
      console.log("accessToken", accessToken);

      const response = await axios.get(
        `${API_URL}${MemberServicePath}${ReviewAPI}/themes/my?themeId=${themeId}`,
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

  const [a, setA] = useState<alarmType>({
    notificationId: 1,
    themeId: "5",
    title: "백조가 폴짝폴짝 흑조가 폴짝 예약 오픈 알림",
    body: "북마크 해두신 키이스케이프 강남점 백조가 폴짝폴짝 흑조가 폴짝 예약이 10분 뒤 PM 06시 34분에 오픈됩니다.",
    notificationType: "BOOKMARK",
    viewStatus: "NOT_VIEWED"
  });
  const onPressListItem = (alarm: alarmType) => {
    console.log("themeDetail 페이지로 이동")
    if (alarm.themeId) {
    }
    handleThemeDetail(alarm);
    navigation.navigate("themeDetail");
  }

  return (
    <FixedPageContainer>
      {/* FIXME - Admin 기능입니다 */}
      {/* <AdminAxiosTestBox /> */}
      <Header back="true" />
      <CustomButton
        value="알림 전체 확인하기"
        // onPress={patchNotificationAll}
        mode="selected"
        size="small"
      />
      <PageContainer>
        <ListItem title="메르헨 수호대 테마가 예약되었습니다." content="예약번호는 691238 입니다." color="disable" onPress={() => onPressListItem(a)} />
        {
          alarmList.length
            ? alarmList?.map((alarm) => (
              <ListItem title={alarm.title} content={alarm.title} onPress={() => onPressListItem(alarm)} />
            ))
            : <NoAlarmView>
              <NoAlarmText>알림이 없습니다.</NoAlarmText>
            </NoAlarmView>
        }
      </PageContainer>
    </FixedPageContainer>
  );
};

export default AlarmScreen;
