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
 * 난이도         Double    level;
 * 활동성         Double    activity;
 * 장치 비율      Double    lockRatio;
 * 공포도         Double    horror;
 * 위도           Double    latitude;
 * 경도           Double    longitude;
 */

interface ThemeType {
  id: string;
  poster?: null | string;
  title?: null | string;
  venue?: null | string;
  location?: null | string;
  explanation?: null | string;
  reservationNotice?: null | string;
  tel?: null | string;
  genre?: null | string[];
  maxHeadcount?: null | number;
  minHeadcount?: null | number;
  price?: null | number;
  timeLimit?: null | number;
  level?: null | number;
  activity?: null | number;
  lockRatio?: null | number;
  horror?: null | number;
  latitude?: null | number;
  longitude?: null | number;
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
  price: null | number;
  timeLimit: null | number;
  level: null | number;
  activity: null | number;
  lockRatio: null | number;
  horror: null | number;
  latitude: null | number;
  longitude: null | number;
}

export interface ThemeSimpleInfoType extends ThemeType {
  id: string;
  poster: null | string;
  title: null | string;
  venue: null | string;
  minHeadcount: null | number;
  maxHeadcount: null | number;
  price: null | number;
  timeLimit: null | number;
  latitude: null | number;
  longitude: null | number;
}

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
/**  테마 디테일 데이터 */
export const themeState = atom<ThemeDetailInfoType>({
  key: 'themeState',
  default: {
    id: "gvMKrosB1FRWDsEDn_Td",
    poster: "https://www.master-key.co.kr/upload/room/98_img1.png",
    title: "블루위시",
    venue: "마스터키 전주고사점",
    location: "전라북도 전주시 완산구 전주객사5길 30-2 (고사동)",
    explanation: "&quot;성공한다해도 길어야 15분입니다. \n꼭 이렇게 하셔야 할 무슨 이유라도 있나요?&quot;\n\n뭐라고 답해야 할지 몰랐다.\n그리고 나는 지난날의 이야기를 떠올렸다.",
    reservationNotice: "할인 이벤트 공지\n (노쇼 및 당일 예약 취소시 위약금 20,000원 발생!!) 예약 시간 변경은 가능합니다.     \n \n1. 학생 할인 이벤트!!  \n\n\n\n\n        초, 중, 고, 학생증 지참시 인당 15,000원 할인\n        이벤트 (평일 한정 주말&공휴일 제외) !!\n         ※ 교복이나 학생증 지참 필수 !\n\n\n       \n       2. 연방 이벤트 !!\n         \n          평일 연방시  할인~ (현장 직원과 상의^^)\n\n\n\n\n\n\n       3.  평일, 주말 오픈영업시간 안내\n                평일  12:00 ~ 24:00\n\n                   주말  11:00 ~24:00\n\n        365일 연중무휴!!           \n\n                  \n\n\n\n\n   * 예약 시간 10분 전까지 와주셔야 합니다 !!^^ *\n   * 이벤트중복할인, 당일예약취소 불가합니다 신중하게 예약해주세요!!^^ *\n     (노쇼 및 당일 예약 취소시 위약금 20,000원 발생!!) 예약 시간 변경은 가능합니다.\n   * 음주시 이용이 제한될수 있습니다 인당 22,000원\n\n학생 평일 15,000원 (주말 공휴일 제외)\n\n현금,1인당 1,000원 할인\n\nSNS 이벤트 중복할인 가능\n\n타 이벤트 중복할인 불가",
    tel: "063-288-8782",
    genre: [
      "감성",
      "드라마"
    ],
    maxHeadcount: 4,
    minHeadcount: 2,
    price: null,
    timeLimit: null,
    level: 3.0,
    activity: null,
    lockRatio: null,
    horror: null,
    latitude: 35.8195613,
    longitude: 127.145661
  },
});

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
/**  테마 데이터 리스트 (검색) */
export const themeListState = atom<ThemeSimpleInfoType[]>({
  key: 'themeListState',
  default: [{
    id: "gfMKrosB1FRWDsEDn_Td",
    venue: "마스터키 전주고사점",
    title: "아나스타샤",
    poster: "https://www.master-key.co.kr/upload/room/63_img1.jpg",
    level: 3.0,
    minHeadcount: 2,
    maxHeadcount: 4,
    price: null,
    timeLimit: null,
    latitude: 35.8195613,
    longitude: 127.145661
  },
  {
    id: "gPMKrosB1FRWDsEDn_Td",
    venue: "마스터키 전주고사점",
    title: "인디아나존스",
    poster: "https://www.master-key.co.kr/upload/room/62_img1.jpg",
    level: 2.0,
    minHeadcount: 2,
    maxHeadcount: 4,
    price: null,
    timeLimit: null,
    latitude: 35.8195613,
    longitude: 127.145661
  },]
});

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
/**  테마 데이터 리스트 (랭킹) */
export const themeRankListState = atom<ThemeSimpleInfoType[]>({
  key: 'themeRankListState',
  default: [{
    id: "gfMKrosB1FRWDsEDn_Td",
    venue: "마스터키 전주고사점",
    title: "아나스타샤",
    poster: "https://www.master-key.co.kr/upload/room/63_img1.jpg",
    level: 3.0,
    minHeadcount: 2,
    maxHeadcount: 4,
    price: null,
    timeLimit: null,
    latitude: 35.8195613,
    longitude: 127.145661
  },
  {
    id: "gPMKrosB1FRWDsEDn_Td",
    venue: "마스터키 전주고사점",
    title: "인디아나존스",
    poster: "https://www.master-key.co.kr/upload/room/62_img1.jpg",
    level: 2.0,
    minHeadcount: 2,
    maxHeadcount: 4,
    price: null,
    timeLimit: null,
    latitude: 35.8195613,
    longitude: 127.145661
  },]
});