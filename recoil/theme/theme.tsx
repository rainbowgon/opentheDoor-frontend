import { atom, useRecoilState } from "recoil";

/**
 * 테마 ID        String    id; (필수)
 * 테마 포스터    String    poster;
 * 테마명         String    title;
 * 지점명         String    venue;
 * 지점 위치      String    location;
 * 설명           String    explanation;
 * 예약 사항      String    reservationNotice;
 * 전화 번호      String    tel;
 * 장르           String[]  genre;
 * 최대 인원 수   Integer   maxHeadcount;
 * 최소 인원 수   Integer   minHeadcount;
 * 가격           Integer   price;
 * 소요 시간      Integer   timeLimit;
 * 난이도         Double[]  level;
 * 활동성         Double    activity;
 * 장치 비율      Double    lockRatio;
 * 공포도         Double    horror;
 * 위도           Double    latitude;
 * 경도           Double    longitude;
 */

export interface ThemeType {
  /**테마 ID (필수)*/
  id: string;
  /**테마 포스터*/
  poster?: null | string;
  /**테마명*/
  title?: null | string;
  /**지점명*/
  venue?: null | string;
  /**지점 위치*/
  location?: null | string;
  /**설명*/
  explanation?: null | string;
  /**예약 사항*/
  reservationNotice?: null | string;
  /**전화 번호*/
  tel?: null | string;
  /**장르*/
  genre?: null | string[];
  /**최대 인원 수*/
  maxHeadcount?: null | number;
  /**최소 인원 수*/
  minHeadcount?: null | number;
  /**가격*/
  priceList?: null | number[];
  /**소요 시간 (분 단위)*/
  timeLimit?: null | number;
  /**난이도*/
  level?: null | number;
  /**활동성*/
  activity?: null | number;
  /**장치 비율*/
  lockRatio?: null | number;
  /**공포도*/
  horror?: null | number;
  /**위도*/
  latitude?: null | number;
  /**경도*/
  longitude?: null | number;
  /**별점*/
  starrate?: null | number;
  /**클릭*/
  onPress?: () => void;
}

export interface ThemeDetailInfoType extends ThemeType {
  id: string;
  poster: null | string;
  title: null | string;
  venue: null | string;
  location: null | string;
  explanation: null | string;
  reservationNotice: null | string;
  tel: null | string;
  genre: null | string[];
  maxHeadcount: null | number;
  minHeadcount: null | number;
  priceList: null | number[];
  timeLimit: null | number;
  level: null | number;
  activity: null | number;
  lockRatio: null | number;
  horror: null | number;
  latitude: null | number;
  longitude: null | number;
  starrate: null | number;
}

export interface ThemeSimpleInfoType extends ThemeType {
  id: string;
  poster: null | string;
  title: null | string;
  venue: null | string;
  level: null | number;
  minHeadcount: null | number;
  maxHeadcount: null | number;
  priceList: null | number[];
  timeLimit: null | number;
  latitude: null | number;
  longitude: null | number;
}

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
/**  테마 디테일 데이터 */
export const themeState = atom<ThemeDetailInfoType>({
  key: "themeState",
  default: {
    id: "gvMKrosB1FRWDsEDn_Td",
    poster: "https://www.master-key.co.kr/upload/room/98_img1.png",
    title: "블루위시",
    venue: "마스터키 전주고사점",
    location: "전라북도 전주시 완산구 전주객사5길 30-2 (고사동)",
    explanation:
      "&quot;성공한다해도 길어야 15분입니다. \n꼭 이렇게 하셔야 할 무슨 이유라도 있나요?&quot;\n\n뭐라고 답해야 할지 몰랐다.\n그리고 나는 지난날의 이야기를 떠올렸다.",
    reservationNotice:
      "할인 이벤트 공지\n (노쇼 및 당일 예약 취소시 위약금 20,000원 발생!!) 예약 시간 변경은 가능합니다.     \n \n1. 학생 할인 이벤트!!  \n\n\n\n\n        초, 중, 고, 학생증 지참시 인당 15,000원 할인\n        이벤트 (평일 한정 주말&공휴일 제외) !!\n         ※ 교복이나 학생증 지참 필수 !\n\n\n       \n       2. 연방 이벤트 !!\n         \n          평일 연방시  할인~ (현장 직원과 상의^^)\n\n\n\n\n\n\n       3.  평일, 주말 오픈영업시간 안내\n                평일  12:00 ~ 24:00\n\n                   주말  11:00 ~24:00\n\n        365일 연중무휴!!           \n\n                  \n\n\n\n\n   * 예약 시간 10분 전까지 와주셔야 합니다 !!^^ *\n   * 이벤트중복할인, 당일예약취소 불가합니다 신중하게 예약해주세요!!^^ *\n     (노쇼 및 당일 예약 취소시 위약금 20,000원 발생!!) 예약 시간 변경은 가능합니다.\n   * 음주시 이용이 제한될수 있습니다 인당 22,000원\n\n학생 평일 15,000원 (주말 공휴일 제외)\n\n현금,1인당 1,000원 할인\n\nSNS 이벤트 중복할인 가능\n\n타 이벤트 중복할인 불가",
    tel: "063-288-8782",
    genre: ["감성", "드라마"],
    maxHeadcount: 4,
    minHeadcount: 2,
    priceList: null,
    timeLimit: null,
    level: 3.0,
    activity: null,
    lockRatio: null,
    horror: null,
    latitude: 35.8195613,
    longitude: 127.145661,
    starrate: 3.4,
  },
});

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
/**  테마 데이터 리스트 (검색) */
export const themeListState = atom<ThemeSimpleInfoType[]>({
  key: "themeListState",
  default: [
    {
      id: "gfMKrosB1FRWDsEDn_Td",
      venue: "마스터키 전주고사점",
      title: "아나스타샤",
      poster: "https://www.master-key.co.kr/upload/room/63_img1.jpg",
      level: 3.0,
      minHeadcount: 2,
      maxHeadcount: 4,
      priceList: null,
      timeLimit: null,
      latitude: 35.8195613,
      longitude: 127.145661,
    },
    {
      id: "gPMKrosB1FRWDsEDn_Td",
      venue: "마스터키 전주고사점",
      title: "인디아나존스",
      poster: "https://www.master-key.co.kr/upload/room/62_img1.jpg",
      level: 2.0,
      minHeadcount: 2,
      maxHeadcount: 4,
      priceList: null,
      timeLimit: null,
      latitude: 35.8195613,
      longitude: 127.145661,
    },
    {
      id: "eTHntosBdUGVeOMUXDR3",
      venue: "마스터키 플레이포인트랩강남점",
      title: "리허설",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/리허설_84169924.gif",
      level: 4.0,
      minHeadcount: 2,
      maxHeadcount: 6,
      priceList: null,
      timeLimit: null,
      latitude: 37.5008831,
      longitude: 127.027485,
    },
    {
      id: "dTHntosBdUGVeOMUQDTg",
      venue: "마스터키 해운대 블루오션스테이션",
      title: "리허설",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/리허설_23761838.gif",
      level: 4.0,
      minHeadcount: 2,
      maxHeadcount: 6,
      priceList: null,
      timeLimit: null,
      latitude: 35.1629768,
      longitude: 129.158492,
    },
  ],
});

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
/**  테마 데이터 리스트 (랭킹) */
export const themeRankListState = atom<ThemeSimpleInfoType[]>({
  key: "themeRankListState",
  default: [
    {
      id: "gfMKrosB1FRWDsEDn_Td",
      venue: "마스터키 전주고사점",
      title: "아나스타샤",
      poster: "https://www.master-key.co.kr/upload/room/63_img1.jpg",
      level: 3.0,
      minHeadcount: 2,
      maxHeadcount: 4,
      priceList: null,
      timeLimit: null,
      latitude: 35.8195613,
      longitude: 127.145661,
    },
    {
      id: "gPMKrosB1FRWDsEDn_Td",
      venue: "마스터키 전주고사점",
      title: "인디아나존스",
      poster: "https://www.master-key.co.kr/upload/room/62_img1.jpg",
      level: 2.0,
      minHeadcount: 2,
      maxHeadcount: 4,
      priceList: null,
      timeLimit: null,
      latitude: 35.8195613,
      longitude: 127.145661,
    },
  ],
});

export const themeNearByList = atom<ThemeSimpleInfoType[]>({
  key: "themeNearByList",
  default: [
    {
      id: "eTHntosBdUGVeOMUXDR3",
      venue: "마스터키 플레이포인트랩강남점",
      title: "리허설",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/리허설_84169924.gif",
      level: 4.0,
      minHeadcount: 2,
      maxHeadcount: 6,
      priceList: null,
      timeLimit: null,
      latitude: 37.5008831,
      longitude: 127.027485,
    },
    {
      id: "dTHntosBdUGVeOMUQDTg",
      venue: "마스터키 해운대 블루오션스테이션",
      title: "리허설",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/리허설_23761838.gif",
      level: 4.0,
      minHeadcount: 2,
      maxHeadcount: 6,
      priceList: null,
      timeLimit: null,
      latitude: 35.1629768,
      longitude: 129.158492,
    },
    {
      id: "PppbxosB2bv_Fhtj6wSF",
      venue: "마스터키 천안두정점",
      title: "경찰서를 털어라",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/경찰서를 털어라_73260549.jpg",
      level: 3.0,
      minHeadcount: 2,
      maxHeadcount: 6,
      priceList: null,
      timeLimit: null,
      latitude: 36.8339795,
      longitude: 127.1367309,
    },
    {
      id: "9JpbxosB2bv_FhtjhAOC",
      venue: "마스터키 강남프라임",
      title: "Do The G",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/Do The G_21189403.png",
      level: 3.0,
      minHeadcount: 2,
      maxHeadcount: 4,
      priceList: null,
      timeLimit: null,
      latitude: 37.5008831,
      longitude: 127.027485,
    },
    {
      id: "GZpbxosB2bv_FhtjswSL",
      venue: "마스터키 천안신부점",
      title: "터널",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/터널_52402111.jpg",
      level: 3.0,
      minHeadcount: 2,
      maxHeadcount: 6,
      priceList: null,
      timeLimit: null,
      latitude: 36.8183413,
      longitude: 127.1553078,
    },
    {
      id: "9ZpbxosB2bv_FhtjhAOC",
      venue: "마스터키 강남프라임",
      title: "어웨이큰",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/어웨이큰_14869136.png",
      level: 5.0,
      minHeadcount: 2,
      maxHeadcount: 5,
      priceList: null,
      timeLimit: null,
      latitude: 37.5008831,
      longitude: 127.027485,
    },
    {
      id: "G5pbxosB2bv_FhtjswSL",
      venue: "마스터키 천안신부점",
      title: "트러브메이커",
      poster:
        "https://ssafy-otd-public.s3.ap-northeast-2.amazonaws.com/masterkey/트러브메이커_57557775.jpg",
      level: 3.0,
      minHeadcount: 2,
      maxHeadcount: 6,
      priceList: null,
      timeLimit: null,
      latitude: 36.8183413,
      longitude: 127.1553078,
    },
  ],
});
