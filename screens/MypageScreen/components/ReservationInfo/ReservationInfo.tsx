import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAccessToken } from "../../../../recoil/member/member";
import { SearchFilterIsOpened } from "../../../../recoil/state/state";
import { API_URL } from "../../../../constants/urls";
import axios from "axios";
import { ReservationInfoList } from "../../../../recoil/reservation/reservation";
import { TouchableHighlight } from "react-native";

const ReservationInfo = () => {
  const navigation = useNavigation();
  const accessToken = useRecoilValue(userAccessToken);
  const [reservationInfoList, setReservationInfoList] = useRecoilState(ReservationInfoList);

  const ReservationServicePath = `/reservation-service`;
  const ReservationAPI = "/reservations";

  const handleThemeDetail = useCallback(async () => {
    // if (loading) {
    //   return;
    // }

    if (accessToken === "") {
      try {
        // setLoading(true);

        const response = await axios.get(
          `${API_URL}${ReservationServicePath}${ReservationAPI}/auth/reserved`,
        );

        console.log("예약 내역 전체 조회하기 (회원) 성공", response.data);
        setReservationInfoList(response.data.data);
        goReservationList();
      } catch (error) {
        console.error("예약 내역 전체 조회하기 (회원) 실패", error);
      } finally {
      }
    }
  }, []);

  const goReservationList = () => {
    console.log("back 페이지로 이동")
    navigation.navigate("reservationList");
  };
  return (
    <TouchableHighlight onPress={handleThemeDetail}>
      <Text>지점명</Text>
      <Text>예약 코드</Text>
    </TouchableHighlight>
  );
};

export default ReservationInfo;
