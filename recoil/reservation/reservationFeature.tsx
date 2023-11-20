import axios from 'axios';
import { API_URL } from "../../constants/urls";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAccessToken, userFcmToken, userRefreshToken } from "./member";
import { useEffect } from "react";

// apis
const ReservationServicePath = `/reservation-service`;

const ReservationAPI = "/reservations";
// 배포용
// const accessToken = localStorage.getItem("accessToken");

// FIXME 테스트용
const accessToken = useRecoilValue(userAccessToken);

/**
 * TODO - 예약 페이지 정보 가져오기 (GET) - getReservation
 * /reservation-service/reservations/{theme-id}
 */
export async function getReservation() {
  const response = await axios
    .get(
      `${API_URL}${ReservationServicePath}${ReservationAPI}/auth/reserved`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then(response => {
      console.log("예약 페이지 정보 가져오기 성공", response.data);
    })
    .catch(error => {
      console.error("예약 페이지 정보 가져오기 실패", error);
    });
}
