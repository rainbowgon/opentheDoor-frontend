import axios from 'axios';

// apis
const MemberServicePath = `/member-service`;
const NotificatiomServicePath = `/notificatiom-service`;
const ReservationServicePath = `/reservation-service`;
const SearchServicePath = `/search-service`;
const BookmarksPath = `/member-service`;

const MemberAPI = "/members";
const ProfileAPI = "/profiles";
const NotificationAPI = "/notifications";
const ReservationAPI = "/reservations";
const ThemeAPI = "/themes";
const ReviewAPI = "/reviews";

// 배포용
// const accessToken = localStorage.getItem("accessToken");

// export async function getPosts() {
//   const response = await axios.get<Post[]>(
//     'https://jsonplaceholder.typicode.com/posts',
//   );
//   return response.data;
// }

// NOTE [MEMBER] ----------------------------------------------
/**
 * TODO - 카카오 로그인
 * /member-service/members/login/kakao
*/

/**
 * TODO - 구글 로그인
 * /member-service/members/login/google
 * */

/**
 * TODO - 로그아웃
 * /member-service/members/logout
 */

/**
 * TODO - 회원가입 (POST) - postSignup
 * /member-service/members/signup
 */
export async function postSignup() {
  const response = await axios
    .post(
      `${MemberServicePath}${MemberAPI}/signup`
      // , Data
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("회원가입 성공", response.data);
    })
    .catch((error) => {
      console.error("회원가입 실패", error);
    });
}

/**
 * TODO - 전화번호 본인 인증 (POST) - postCheckPhoneNumber
 * /member-service/members/phone
 */
export async function postCheckPhoneNumber() {
  const response = await axios
    .post(
      `${MemberServicePath}${MemberAPI}/phone`
      // , Data
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("전화번호 본인 인증 성공", response.data);
    })
    .catch((error) => {
      console.error("전화번호 본인 인증 실패", error);
    });
}

/**
 * TODO - 개인 정보 수정 (PATCH) - patchMemberInfo
 * /member-service/members
 */
export async function patchMemberInfo() {
  const response = await axios
    .patch(
      `${MemberServicePath}${MemberAPI}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("개인 정보 수정 성공", response.data);
    })
    .catch((error) => {
      console.error("개인 정보 수정 실패", error);
    });
}

/**
 * TODO - 개인 정보 조회 (GET) - getMemberCheckMyself
 * /member-service/members/me
 */
export async function getMemberCheckMyself() {
  const response = await axios
    .get(
      `${MemberServicePath}${MemberAPI}/me`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("개인 정보 수정 성공", response.data);
    })
    .catch((error) => {
      console.error("개인 정보 수정 실패", error);
    });
}

/**
 * TODO - 회원 탈퇴 (DELETE) - deleteMember
 * /member-service/members
 */
export async function deleteMember() {
  const response = await axios
    .delete(
      `${MemberServicePath}${MemberAPI}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("회원 탈퇴 성공", response.data);
    })
    .catch((error) => {
      console.error("회원 탈퇴 실패", error);
    });
}



// NOTE  [PROFILE] ----------------------------------------------
/**
 * TODO - 앱 전체 알림 on/off	(PATCH) - patchAllNotification
 * /member-service/profiles/notifications
 */
export async function patchAllNotification() {
  const response = await axios
    .patch(
      `${MemberServicePath}${ProfileAPI}/notifications`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("앱 전체 알림 on/off	성공", response.data);
    })
    .catch((error) => {
      console.error("앱 전체 알림 on/off	실패", error);
    });
}

/**
 * TODO - PROFILE	북마크 시 자동 알림 on/off (PATCH) - patchBookmarkNotification
 * /member-service/profiles/bookmark
 */
export async function patchBookmarkNotification() {
  const response = await axios
    .patch(
      `${MemberServicePath}${ProfileAPI}/bookmark`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("PROFILE	북마크 시 자동 알림 on/off 성공", response.data);
    })
    .catch((error) => {
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
    .get(
      `${NotificatiomServicePath}${NotificationAPI}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("알림 전체보기 성공", response.data);
    })
    .catch((error) => {
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
      `${NotificatiomServicePath}${NotificationAPI}/${notificationId}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("알림 확인하기 성공", response.data);
    })
    .catch((error) => {
      console.error("알림 확인하기 실패", error);
    });
}

/**
 * TODO - 알림 전체 확인하기 (PATCH) - patchNotificationAll
 * /notificatiom-service/notifications
 */
export async function patchNotificationAll() {
  const response = await axios
    .patch(
      `${NotificatiomServicePath}${NotificationAPI}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("알림 전체 확인하기 성공", response.data);
    })
    .catch((error) => {
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
      `${ReservationServicePath}${ReservationAPI}/${themeId}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("예약 페이지 정보 가져오기 성공", response.data);
    })
    .catch((error) => {
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
      `${ReservationServicePath}${ReservationAPI}/${themeId}`
      // , Data
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("예약 하기 성공", response.data);
    })
    .catch((error) => {
      console.error("예약 하기 실패", error);
    });
}


// NOTE  [SEARCH] ----------------------------------------------
/**
 * TODO - 테마 정렬 (GET) - getThemeSort
 * /search-service/themes/sorts?keyword={keyword}&sortBy={sort-by}&page={page}&size={size}
 */
export async function getThemeSort() {
  // FIXME - 각각의 정보를 변수로 변경
  const keyword = 0;
  const sortBy = 0;
  const page = 0;
  const size = 0;

  const response = await axios
    .get(
      `${SearchServicePath}${ThemeAPI}/sorts?keyword=${keyword}&sortBy=${sortBy}&page=${page}&size=${size}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("테마 정렬 성공", response.data);
    })
    .catch((error) => {
      console.error("테마 정렬 실패", error);
    });
}


/**
 * TODO - 테마 검색 (GET) - getThemeSearch
 * /search-service/themes/searches?keyword={keyword}&page={page}&size={size}
 */
export async function getThemeSearch() {
  // FIXME - 각각의 정보를 변수로 변경
  const keyword = 0;
  const sortBy = 0;
  const page = 0;
  const size = 0;

  const response = await axios
    .get(
      `${SearchServicePath}${ThemeAPI}/searches?keyword=${keyword}&sortBy=${sortBy}&page=${page}&size=${size}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("테마 검색 성공", response.data);
    })
    .catch((error) => {
      console.error("테마 검색 실패", error);
    });
}


/**
 * TODO - 테마 상세 조회 (GET) - getThemeDetail
 * /search-service/themes/{theme-id}
 */
export async function getThemeDetail() {
  // FIXME - themeId를 자신의 ID로 등록
  const themeId = 0;

  const response = await axios
    .get(
      `${SearchServicePath}${ThemeAPI}/${themeId}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("테마 상세 조회 성공", response.data);
    })
    .catch((error) => {
      console.error("테마 상세 조회 실패", error);
    });
}


// NOTE  [BOOKMARK] ----------------------------------------------

/**
 * TODO - 북마크 등록/해제 (PUT) - putBookmarkToggle
 * /member-service/bookmarks
 */
export async function putBookmarkToggle() {
  const response = await axios
    .put(
      `${MemberServicePath}${BookmarksPath}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("리뷰 작성 성공", response.data);
    })
    .catch((error) => {
      console.error("리뷰 작성 실패", error);
    });
}

/**
 * TODO - 북마크 내역 조회 (홈) (GET) - getReviewCreateHome
 * /member-service/bookmarks
 */
export async function getReviewCreateHome() {
  const response = await axios
    .get(
      `${MemberServicePath}${BookmarksPath}`
      // , Data
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("북마크 내역 조회 (홈) 성공", response.data);
    })
    .catch((error) => {
      console.error("북마크 내역 조회 (홈) 실패", error);
    });
}

/**
 * TODO - 북마크 내역 조회 (마이페이지) (GET) - getBookmarkListMypage
 * /member-service/bookmarks/detail
 */
export async function getBookmarkListMypage() {
  const response = await axios
    .get(
      `${MemberServicePath}${BookmarksPath}/detail`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("북마크 내역 조회 (마이페이지) 성공", response.data);
    })
    .catch((error) => {
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
      `${MemberServicePath}${BookmarksPath}/notifications/${themeId}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("테마 예약 오픈 알림 on/off 성공", response.data);
    })
    .catch((error) => {
      console.error("테마 예약 오픈 알림 on/off 실패", error);
    });
}


// NOTE  [REVIEW] ----------------------------------------------

/**
 * TODO - 리뷰 작성 (POST)
 * /member-service/reviews
 */
export async function postReviewCreate() {
  const response = await axios
    .post(
      `${MemberServicePath}${ReviewAPI}`
      // , Data
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("리뷰 작성 성공", response.data);
    })
    .catch((error) => {
      console.error("리뷰 작성 실패", error);
    });
}

/**
 * TODO - 리뷰 수정 (PATCH) - patchReviewEdit
 * /member-service/reviews
 */
export async function patchReviewEdit() {
  const response = await axios
    .patch(
      `${MemberServicePath}${ReviewAPI}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("리뷰 수정 성공", response.data);
    })
    .catch((error) => {
      console.error("리뷰 수정 실패", error);
    });
}

/**
 * TODO - 테마 리뷰 1건 조회 (비회원) (GET) - getReviewOne
 * /member-service/reviews/themes/one?themeId=1
 */
export async function getReviewOne() {
  const response = await axios
    .get(
      `${MemberServicePath}${ReviewAPI}/themes/one?themeId=1`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("테마 리뷰 1건 조회 (비회원) 성공", response.data);
    })
    .catch((error) => {
      console.error("테마 리뷰 1건 조회 (비회원) 실패", error);
    });
}

/**
 * TODO - 테마 리뷰 전체 조회 (GET) - getReviewAll
 * /member-service/reviews/themes/all
 */
export async function getReviewAll() {
  const response = await axios
    .get(
      `${MemberServicePath}${ReviewAPI}/themes/all`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("테마 리뷰 전체 조회 성공", response.data);
    })
    .catch((error) => {
      console.error("테마 리뷰 전체 조회 실패", error);
    });
}

/**
 * TODO - 리뷰 삭제 (DELETE) - deleteReview
 * member-service/reviews/{review-id}
 */
export async function deleteReview() {
  // FIXME - reviewId를 자신의 ID로 등록
  const reviewId = 0;

  const response = await axios
    .delete(
      `${MemberServicePath}${ReviewAPI}/${reviewId}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("내가 쓴 리뷰 전체 조회 성공", response.data);
    })
    .catch((error) => {
      console.error("내가 쓴 리뷰 전체 조회 실패", error);
    });
}

/**
 * TODO - 내가 쓴 리뷰 전체 조회 (GET) - getReviewCheckMyself
 * member-service/reviews/my
 */
export async function getReviewCheckMyself() {
  const response = await axios
    .get(
      `${MemberServicePath}${ReviewAPI}/my`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("내가 쓴 리뷰 전체 조회 성공", response.data);
    })
    .catch((error) => {
      console.error("내가 쓴 리뷰 전체 조회 실패", error);
    });
}

/**
 * TODO - 방탈출 기록 조회 (빌딩) (GET) - getHistory
 * /member-service/reviews/history/{profile-id}
 */
export async function getHistory() {
  // FIXME - profileId를 자신의 ID로 등록
  const profileId = 0;

  const response = await axios
    .get(
      `${MemberServicePath}${ReviewAPI}/history/${profileId}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    )
    .then((response) => {
      console.log("방탈출 기록 조회 성공", response.data);
    })
    .catch((error) => {
      console.error("방탈출 기록 조회 실패", error);
    });
}

/**
 * TODO - 리뷰 신고		
 */

/**
 * TODO - 회원 차단		
 */