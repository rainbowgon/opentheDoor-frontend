import axios from "axios";
import { API_URL } from "../../constants/urls";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAccessToken } from "../member/member";
import { alarmListState } from "./alarm";
import { useCallback } from "react";

// ServicePaths
const NotificatiomServicePath = `/notificatiom-service`;

// apis
const NotificationAPI = "/notifications";

// access token
const accessToken = useRecoilValue(userAccessToken);

/**
 * TODO 알림 전체보기 (GET)
 * /notificatiom-service/notifications
 */
export const getNotification = useCallback(async () => {
  const setAlarmList = useSetRecoilState(alarmListState);

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

/**
 * TODO - 알림 확인하기 (PATCH) - patchNotification
 * /notificatiom-service/notifications/{notification-id}
 */
export async function patchNotification() {
  // FIXME - notificationId를 자신의 ID로 등록
  const notificationId = 0;

  const response = await axios
    .patch(
      `${API_URL}${NotificatiomServicePath}${NotificationAPI}/${notificationId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    .then(response => {
      console.log("알림 확인하기 성공", response.data);
    })
    .catch(error => {
      console.error("알림 확인하기 실패", error);
    });
}

/**
 * TODO - 알림 전체 확인하기 (PATCH) - patchNotificationAll
 * /notificatiom-service/notifications
 */
export async function patchNotificationAll() {
  const response = await axios
    .patch(`${API_URL}${NotificatiomServicePath}${NotificationAPI}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log("알림 전체 확인하기 성공", response.data);
    })
    .catch(error => {
      console.error("알림 전체 확인하기 실패", error);
    });
}