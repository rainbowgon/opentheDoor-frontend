import axios from 'axios';
import { API_URL } from "../../constants/urls";
import { useRecoilState, useResetRecoilState } from "recoil";
import { ReviewCreateType, myReviewState } from "./review";

// apis
const MemberServicePath = `/member-service`;
const ReviewAPI = "/reviews";

// FIXME 테스트용
const accessToken = "accessToken";

const [myReview, setMyReview] = useRecoilState(myReviewState);

/**
 * TODO - 리뷰 작성 (POST) - postReviewCreate
 * /member-service/reviews
 */
export async function postReviewCreate() {

  // FIXME - 데이터 삽입
  const data: ReviewCreateType = {
    themeId: "100",
    rating: 3.6,
    isEscaped: "SUCCESS",
    myLevel: 3,
    content: "재밌었다.",
    isSpoiler: "NO",
    performedDate: "2023-11-02",
    hintCount: null,
    performedHeadcount: null,
    performedTime: null
  }

  const response = await axios
    .post(
      `${API_URL}${MemberServicePath}${ReviewAPI}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("리뷰 작성 성공", response.data);
      const checkData: ReviewCreateType = response.data.data;
      console.log("리뷰 작성 데이터 형태 비교 성공", checkData);
      getMyReviewInTheme(data.themeId);
      console.log("리뷰 작성 결과 삽입 성공");
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

  // FIXME - 데이터 삽입
  const data: ReviewCreateType = {
    themeId: "1",
    rating: 3.6,
    isEscaped: "SUCCESS",
    myLevel: 3,
    content: "재밌었다.",
    isSpoiler: "NO",
    performedDate: "2023-11-02",
    performedTime: "18:30",
    hintCount: null,
    performedHeadcount: null,
  }

  const response = await axios
    .patch(
      `${API_URL}${MemberServicePath}${ReviewAPI}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("리뷰 수정 성공", response.data);
      const checkData: ReviewCreateType = response.data.data;
      console.log("리뷰 수정 데이터 형태 비교 성공", checkData);
      getMyReviewInTheme(data.themeId);
      console.log("리뷰 수정 결과 삽입 성공");
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
  // FIXME - themeId를 자신의 ID로 등록
  const themeId = 1;

  const response = await axios
    .get(
      `${API_URL}${MemberServicePath}${ReviewAPI}/themes/one?themeId=${themeId}`
    )
    .then((response) => {
      console.log("테마 리뷰 1건 조회 (비회원) 성공", response.data);
      return response.data;
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
      `${API_URL}${MemberServicePath}${ReviewAPI}/themes/all`,
      // data, 
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("테마 리뷰 전체 조회 성공", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("테마 리뷰 전체 조회 실패", error);
    });
}

/**
 * TODO - 테마의 내가 쓴 리뷰 조회 (GET) - getReviewAll
 * /member-service/reviews/themes/my?themeId=1
 */
export async function getMyReviewInTheme(themeId: string) {

  // FIXME - themeId를 자신의 ID로 등록
  const curThemeId = themeId && 1;

  const response = await axios
    .get(
      `${API_URL}${MemberServicePath}${ReviewAPI}/themes/my?themeId=${curThemeId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("테마의 내가 쓴 리뷰 조회 성공", response.data);
      setMyReview(response.data);
    })
    .catch((error) => {
      console.error("테마의 내가 쓴 리뷰 조회 실패", error);
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
      `${API_URL}${MemberServicePath}${ReviewAPI}/${reviewId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("리뷰 삭제 성공", response.data);
      useResetRecoilState(myReviewState);
      console.log("리뷰 정보 성공");
    })
    .catch((error) => {
      console.error("리뷰 삭제 실패", error);
    });
}

/**
 * TODO - 내가 쓴 리뷰 전체 조회 (GET) - getReviewCheckMyself
 * member-service/reviews/my
 */
export async function getReviewCheckMyself() {
  const response = await axios
    .get(
      `${API_URL}${MemberServicePath}${ReviewAPI}/my`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("내가 쓴 리뷰 전체 조회 성공", response.data);
      return response.data;
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
      `${API_URL}${MemberServicePath}${ReviewAPI}/history/${profileId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("방탈출 기록 조회 성공", response.data);
      return response.data;
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