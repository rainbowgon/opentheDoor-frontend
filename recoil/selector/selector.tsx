import axios from "axios";
import { API_URL } from "../../constants/urls";

// apis
const MemberServicePath = `/member-service`;
const NotificatiomServicePath = `/notificatiom-service`;
const ReservationServicePath = `/reservation-service`;

const MemberAPI = "/members";
const ProfileAPI = "/profiles";
const NotificationAPI = "/notifications";
const ReservationAPI = "/reservations";
const BookmarkAPI = `/bookmarks`;

// 배포용
// const accessToken = localStorage.getItem("accessToken");

// FIXME 테스트용
const accessToken = "accessToken";

// export async function getPosts() {
//   const response = await axios.get<Post[]>(
//     'https://jsonplaceholder.typicode.com/posts',
//   );
//   return response.data;
// }

// NOTE  [PROFILE] ----------------------------------------------
/**
 * TODO - 앱 전체 알림 on/off	(PATCH) - patchAllNotification
 * /member-service/profiles/notifications
 */
export async function patchAllNotification() {
  const response = await axios
    .patch(`${API_URL}${MemberServicePath}${ProfileAPI}/notifications`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log("앱 전체 알림 on/off	성공", response.data);
    })
    .catch(error => {
      console.error("앱 전체 알림 on/off	실패", error);
    });
}

/**
 * TODO - PROFILE	북마크 시 자동 알림 on/off (PATCH) - patchBookmarkNotification
 * /member-service/profiles/bookmark
 */
export async function patchBookmarkNotification() {
  const response = await axios
    .patch(`${API_URL}${MemberServicePath}${ProfileAPI}/bookmark`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log("PROFILE	북마크 시 자동 알림 on/off 성공", response.data);
    })
    .catch(error => {
      console.error("PROFILE	북마크 시 자동 알림 on/off 실패", error);
    });
}

// NOTE  [NOTIFICATION] ----------------------------------------------
/**
 * TODO 알림 전체보기 (GET)
 * /notificatiom-service/notifications
 */
export async function getNotification() {
  const response = await axios
    .get(`${API_URL}${NotificatiomServicePath}${NotificationAPI}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log("알림 전체보기 성공", response.data);
    })
    .catch(error => {
      console.error("알림 전체보기 실패", error);
    });
}

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

// NOTE  [RESERVATION] ----------------------------------------------
/**
 * TODO - 예약 페이지 정보 가져오기 (GET) - getReservation
 * /reservation-service/reservations/{theme-id}
 */
export async function getReservation() {
  // FIXME - themeId를 자신의 ID로 등록
  const themeId = 0;

  const response = await axios
    .get(
      `${API_URL}${ReservationServicePath}${ReservationAPI}/${themeId}`,
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then(response => {
      console.log("예약 페이지 정보 가져오기 성공", response.data);
    })
    .catch(error => {
      console.error("예약 페이지 정보 가져오기 실패", error);
    });
}

/**
 * TODO - 예약 하기 (POST) - postReservation
 * /reservation-service/reservations/{theme-id}
 */
export async function postReservation() {
  // FIXME - themeId를 자신의 ID로 등록
  const themeId = 0;

  const response = await axios
    .post(
      `${API_URL}${ReservationServicePath}${ReservationAPI}/${themeId}`,
      // Data,
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then(response => {
      console.log("예약 하기 성공", response.data);
    })
    .catch(error => {
      console.error("예약 하기 실패", error);
    });
}

// NOTE  [BOOKMARK] ----------------------------------------------

/**
 * TODO - 북마크 등록/해제 (PUT) - putBookmarkToggle
 * /member-service/bookmarks
 */
export async function putBookmarkToggle() {
  // FIXME - 데이터 삽입
  const data = {
    bookmarkThemeIdList: [1, 2, 3, 4, 5],
  };

  const response = await axios
    .put(`${API_URL}${MemberServicePath}${BookmarkAPI}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log("북마크 등록/해제 성공", response.data);
    })
    .catch(error => {
      console.error("북마크 등록/해제 실패", error);
    });
}

/**
 * TODO - 북마크 내역 조회 (홈) (GET) - getBookmarkCreateHome
 * /member-service/bookmarks
 */
export async function getBookmarkCreateHome() {
  const response = await axios
    .get(`${API_URL}${MemberServicePath}${BookmarkAPI}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log("북마크 내역 조회 (홈) 성공", response.data);
    })
    .catch(error => {
      console.error("북마크 내역 조회 (홈) 실패", error);
    });
}

/**
 * TODO - 북마크 내역 조회 (마이페이지) (GET) - getBookmarkListMypage
 * /member-service/bookmarks/detail
 */
export async function getBookmarkListMypage() {
  const response = await axios
    .get(`${API_URL}${MemberServicePath}${BookmarkAPI}/detail`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      console.log("북마크 내역 조회 (마이페이지) 성공", response.data);
    })
    .catch(error => {
      console.error("북마크 내역 조회 (마이페이지) 실패", error);
    });
}

/**
 * TODO - 테마 예약 오픈 알림 on/off (PATCH) - patchBookmarkNotificationToggle
 * /member-service/bookmarks/notifications/{theme-id}
 */
export async function patchBookmarkNotificationToggle() {
  // FIXME - themeId를 자신의 ID로 등록
  const themeId = 0;

  const response = await axios
    .patch(
      `${API_URL}${MemberServicePath}${BookmarkAPI}/notifications/${themeId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    .then(response => {
      console.log("테마 예약 오픈 알림 on/off 성공", response.data);
    })
    .catch(error => {
      console.error("테마 예약 오픈 알림 on/off 실패", error);
    });
}
