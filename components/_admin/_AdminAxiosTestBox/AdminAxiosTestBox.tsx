import { Text, View } from 'react-native';
import CustomButton from "../../Button/CustomButton";
import { getBookmarkListMypage, getNotification, getReservation, getBookmarkCreateHome, patchAllNotification, patchBookmarkNotification, patchBookmarkNotificationToggle, patchNotification, patchNotificationAll, postReservation, putBookmarkToggle } from "../../../recoil/selector/selector";
import { deleteReview, getHistory, getReviewAll, getReviewCheckMyself, getReviewOne, patchReviewEdit, postReviewCreate } from "../../../recoil/review/reviewFeature";
import { getThemeDetail, getThemeRanking, getThemeSearch, getThemeSort, getUpdateNearByThemeList, testGetThemeSearch } from "../../../recoil/theme/themeFeature";
import { deleteMember, getMemberCheckMyself, patchMemberInfo, postCheckPhoneNumber, postKakaoLogin, postSignup } from "../../../recoil/member/memberFeature";

const AdminAxiosTestBox = () => {
  const onGetThemeSort = () => {
    getThemeSort({});
  }

  const onGetThemeSearch = () => {
    getThemeSearch({
      keyword: "강남",
      page: 1,
      size: 1,
    });
  }

  const onGetThemeDetail = () => {
    getThemeDetail("9Uuk0YsBzKUvgPPc-NM5");
  }

  const onGetNearByThemeSearch = () => {
    getUpdateNearByThemeList(
      {
        latitude: 1,
        longitude: 1
      }
    );
  }

  const onGetStart = () => {
    onGetThemeSearch();
    getThemeDetail("FUul0YsBzKUvgPPcENTq");
    onGetNearByThemeSearch();
    getThemeRanking();
  }

  return (
    <View>
      <Text>[START]</Text>
      {/* TODO - Start button */}
      <CustomButton
        value="Start"
        mode="error"
        onPress={onGetStart}
      />

      <Text>[MEMBER]</Text>
      {/* TODO - 카카오 로그인 test */}
      <CustomButton
        value="카카오 로그인"
        onPress={postKakaoLogin}
      />

      {/* TODO - 구글 로그인 test */}
      <CustomButton
        value="구글 로그인 - (미완)"
      />

      {/* TODO - 로그아웃 test */}
      <CustomButton
        value="로그아웃 - (미완)"
      />

      {/* TODO - 회원가입 (POST) test - postSignup */}
      <CustomButton
        value="회원가입 (POST) - postSignup"
        onPress={postSignup}
      />

      {/* TODO - 전화번호 본인 인증 (POST) test - postCheckPhoneNumber */}
      <CustomButton
        value="전화번호 본인 인증 (POST) - postCheckPhoneNumber"
        onPress={postCheckPhoneNumber}
      />

      {/* TODO - 개인 정보 수정 (PATCH) test - patchMemberInfo */}
      <CustomButton
        value="개인 정보 수정 (PATCH) - patchMemberInfo"
        onPress={patchMemberInfo}

      />

      {/* TODO - 개인 정보 조회 (GET) test - getMemberCheckMyself */}
      <CustomButton
        value="개인 정보 조회 (GET) - getMemberCheckMyself"
        onPress={getMemberCheckMyself}
      />

      {/* TODO - 회원 탈퇴 (DELETE) test - deleteMember */}
      <CustomButton
        value="TODO - 회원 탈퇴 (DELETE) - deleteMember"
        onPress={deleteMember}
      />

      <Text>[PROFILE]</Text>

      {/* 앱 전체 알림 on/off	(PATCH) test - patchAllNotification */}
      <CustomButton
        value="앱 전체 알림 on/off	(PATCH) - patchAllNotification"
        onPress={patchAllNotification}
      />

      {/* PROFILE	북마크 시 자동 알림 on/off (PATCH) test - patchBookmarkNotification */}
      <CustomButton
        value="PROFILE	북마크 시 자동 알림 on/off (PATCH) - patchBookmarkNotification"
        onPress={patchBookmarkNotification}
      />

      <Text>[NOTIFICATION]</Text>
      {/* TODO 알림 전체보기 (GET) test - getNotification */}
      <CustomButton
        value="TODO 알림 전체보기 (GET) - getNotification"
        onPress={getNotification}
      />

      {/* TODO - 알림 확인하기 (PATCH) test - patchNotification */}
      <CustomButton
        value="TODO - 알림 확인하기 (PATCH) - patchNotification"
        onPress={patchNotification}
      />

      {/* TODO - 알림 전체 확인하기 (PATCH) test - patchNotificationAll */}
      <CustomButton
        value="TODO - 알림 전체 확인하기 (PATCH) - patchNotificationAll"
        onPress={patchNotificationAll}
      />

      <Text>[RESERVATION]</Text>
      {/* 예약 페이지 정보 가져오기 (GET) test - getReservation */}
      <CustomButton
        value="예약 페이지 정보 가져오기 (GET) - getReservation"
        onPress={getReservation}
      />

      {/* TODO - 예약 하기 (POST) test - postReservation */}
      <CustomButton
        value="TODO - 예약 하기 (POST) - postReservation"
        onPress={postReservation}
      />

      <Text>[SEARCH]</Text>
      {/* TODO - 테마 정렬 (GET) test - getThemeSort */}
      <CustomButton
        value="TODO - 테마 정렬 (GET) - getThemeSort"
        onPress={onGetThemeSort}
      />

      {/* TODO - 테마 검색 (GET) test - getThemeSearch */}
      <CustomButton
        value="TODO - 테마 검색 (GET) - getThemeSearch"
        onPress={onGetThemeSearch}
      />

      {/* TODO - 테마 검색 테스트 (GET) test - getThemeSearch */}
      <CustomButton
        value="TODO - 테마 검색 테스트 (GET) - getThemeSearch"
        onPress={testGetThemeSearch}
      />

      {/* TODO - 내 주변 테마 검색 (GET) test - getThemeSearch */}
      <CustomButton
        value="TODO - 내 주변 테마 검색 (GET) - getThemeSearch"
        onPress={onGetNearByThemeSearch}
      />

      {/* TODO - 테마 상세 조회 (GET) test - getThemeDetail */}
      <CustomButton
        value="TODO - 테마 상세 조회 (GET) - getThemeDetail"
        onPress={onGetThemeDetail}
      />

      {/* TODO - 테마 주차별 랭킹 조회 (GET) test - getThemeRanking */}
      <CustomButton
        value="TODO - 테마 주차별 랭킹 조회 (GET) - getThemeRanking"
        onPress={getThemeRanking}
      />

      <Text>[BOOKMARK]</Text>
      {/* TODO - 북마크 등록/해제 (PUT) test - putBookmarkToggle */}
      <CustomButton
        value="TODO - 북마크 등록/해제 (PUT) - putBookmarkToggle"
        onPress={putBookmarkToggle}
      />

      {/* TODO - 북마크 내역 조회 (홈) (GET) test - getBookmarkCreateHome */}
      <CustomButton
        value="TODO - 북마크 내역 조회 (홈) (GET) - getBookmarkCreateHome"
        onPress={getBookmarkCreateHome}
      />

      {/* TODO - 북마크 내역 조회 (마이페이지) (GET) test - getBookmarkListMypage */}
      <CustomButton
        value="TODO - 북마크 내역 조회 (마이페이지) (GET) - getBookmarkListMypage"
        onPress={getBookmarkListMypage}
      />

      {/* TODO - 테마 예약 오픈 알림 on/off (PATCH) test - patchBookmarkNotificationToggle */}
      <CustomButton
        value="TODO - 테마 예약 오픈 알림 on/off (PATCH) - patchBookmarkNotificationToggle"
        onPress={patchBookmarkNotificationToggle}
      />

      <Text>[REVIEW]</Text>

      {/* TODO - 리뷰 작성 (POST) test - postReviewCreate */}
      <CustomButton
        value="TODO - 리뷰 작성 (POST) - postReviewCreate"
        onPress={postReviewCreate}
      />

      {/* TODO - 리뷰 수정 (PATCH) test - patchReviewEdit */}
      <CustomButton
        value="TODO - 리뷰 수정 (PATCH) - patchReviewEdit"
        onPress={patchReviewEdit}
      />

      {/* TODO - 테마 리뷰 1건 조회 (비회원) (GET) test - getReviewOne */}
      <CustomButton
        value="TODO - 테마 리뷰 1건 조회 (비회원) (GET) - getReviewOne"
        onPress={getReviewOne}
      />

      {/* TODO - 테마 리뷰 전체 조회 (GET) test - getReviewAll */}
      <CustomButton
        value="TODO - 테마 리뷰 전체 조회 (GET) - getReviewAll"
        onPress={getReviewAll}
      />

      {/* TODO - 리뷰 삭제 (DELETE) test - deleteReview */}
      <CustomButton
        value="TODO - 리뷰 삭제 (DELETE) - deleteReview"
        onPress={deleteReview}
      />

      {/* TODO - 내가 쓴 리뷰 전체 조회 (GET) test - getReviewCheckMyself */}
      <CustomButton
        value="TODO - 내가 쓴 리뷰 전체 조회 (GET) - getReviewCheckMyself"
        onPress={getReviewCheckMyself}
      />

      {/* TODO - 방탈출 기록 조회 (빌딩) (GET) test - getHistory */}
      <CustomButton
        value="TODO - 방탈출 기록 조회 (빌딩) (GET) - getHistory"
        onPress={getHistory}
      />

      {/* TODO - 리뷰 신고(미완) test */}
      <CustomButton
        value="TODO - 리뷰 신고(미완)"
      />

      {/* TODO - 회원 차단 test*/}
      <CustomButton
        value="TODO - 회원 차단	(미완)"
      />
    </View>
  );
};

export default AdminAxiosTestBox;
