import axios from 'axios';
import { API_URL } from "../../constants/urls";
import { useRecoilState } from "recoil";
import { userAccessToken, userFcmToken, userRefreshToken } from "./member";

// apis
const MemberServicePath = `/member-service`;

const MemberAPI = "/members";
const OauthAPI = "/oauth";

// 배포용
// const accessToken = localStorage.getItem("accessToken");

// FIXME 테스트용
const [fcmToken, setFcmToken] = useRecoilState(userFcmToken);
const [accessToken, setAccessToken] = useRecoilState(userAccessToken);
const [refreshToken, setRefreshToken] = useRecoilState(userRefreshToken);

/**
 * TODO - 구글 로그인
 * /member-service/members/login/google
 * */

/**
 * TODO - 카카오 로그인 (post) - postKakaoLogin
 * /member-service/oauth/login/kakao?fcmToken={fcm-token}&profileId={profile-id}
*/
export async function postKakaoLogin() {

  // FIXME - 데이터 삽입
  const profileId = "";

  const response = await axios
    .post(
      `${API_URL}${MemberServicePath}${OauthAPI}/login/kakao?fcmToken=${fcmToken}&profileId=${profileId}`,
    )
    .then((response) => {
      console.log("카카오 로그인 성공", response.data);
      setAccessToken(response.data.data.accessToken);
      console.log("AccessToken 발급 완료");
      setRefreshToken(response.data.data.refreshToken);
      console.log("refreshToken 발급 완료");
    })
    .catch((error) => {
      console.error("카카오 로그인 실패", error);
    });
}

/**
 * TODO - 로그아웃
 * /member-service/members/logout
 */

/**
 * TODO - 회원가입 (POST) - postSignup
 * /member-service/members/signup
 */
export async function postSignup() {

  // FIXME - 데이터 삽입
  const data = {
    name: "이정명",
    phoneNumber: "01045344955",
    birthDate: "1997-04-28",
    provider: "KAKAO",
    providerId: "",
    nickname: "닉네임",
    profileImage: "profile image s3 url",
    fcmToken: "cKX0R5rLTwuMwvsg6yF-Ky:APA91bGMYa82U-Fo2Ru8agw8ZsWUgcqM9sLjGvTpfvvqbtUBYzSvlb5EdB7DtS6-bIe36JOeoAS46XQ-051MbxjAv6qk2PzC5R2EO--YaRmwca5OpJgVtDAoZHxHGsmaas2spNPwVBoa"
  };

  const response = await axios
    .post(
      `${API_URL}${MemberServicePath}${MemberAPI}/signup`,
      data,
    )
    .then((response) => {
      console.log("회원가입 성공", response.data);
      setAccessToken(response.data.data.accessToken);
      console.log("AccessToken 발급 완료");
      setRefreshToken(response.data.data.refreshToken);
      console.log("refreshToken 발급 완료");
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
  console.log("postCheckPhoneNumber");
  // FIXME - 데이터 삽입
  const data = {
    phoneNumber: "01045344955"
  };

  const response = await axios
    .post(
      `${API_URL}${MemberServicePath}${MemberAPI}/phone`,
      data,
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    )
    .then((response) => {
      console.log("전화번호 본인 인증 성공", response.data);
      alert("본인 인증 번호가 발급되었습니다!");
    })
    .catch((error) => {
      console.error("전화번호 본인 인증 실패", error);
      alert("전화번호 본인 인증 실패");
    });
}

/**
 * TODO - 개인 정보 수정 (PATCH) - patchMemberInfo
 * /member-service/members
*/
export async function patchMemberInfo() {

  // FIXME - 데이터 삽입
  const formData = new FormData();

  formData.append("profileId", 1);
  formData.append("name", "변경함");
  formData.append("nickname", "수정테스트");
  formData.append("profileImage", null);

  const response = await axios
    .patch(
      `${API_URL}${MemberServicePath}${MemberAPI}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
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
      `${API_URL}${MemberServicePath}${MemberAPI}/me`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("개인 정보 조회 성공", response.data);
    })
    .catch((error) => {
      console.error("개인 정보 조회 실패", error);
    });
}

/**
 * TODO - 회원 탈퇴 (DELETE) - deleteMember
 * /member-service/members
 */
export async function deleteMember() {
  const response = await axios
    .delete(
      `${API_URL}${MemberServicePath}${MemberAPI}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("회원 탈퇴 성공", response.data);
    })
    .catch((error) => {
      console.error("회원 탈퇴 실패", error);
    });
}