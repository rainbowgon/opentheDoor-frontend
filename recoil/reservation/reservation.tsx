import { atom, selector } from "recoil";

interface ReservationInfoType {
  reservationId?: number;
  reservationNumber?: number;
  /**예약 날짜*/
  targetDate: string;
  /** 예약 시간 */
  targetTime: string;
  // 인원
  headcount: number;
  // 금액
  totalPrice: number;
  // 테마 ID
  themeId: string;
  // 테마 포스터
  poster: string;
  // 테마 명
  title: string;
  // 지점 명
  venue: string;
}

export const SingleReservationInfo = atom<ReservationInfoType>({
  key: 'SingleReservationInfo',
  default: {
    reservationId: 1,
    reservationNumber: 123123123,
    targetDate: "2023-11-09",
    targetTime: "12:00",
    headcount: 3,
    totalPrice: 110000,
    themeId: "qwkmeokmasdopifjeqw",
    poster: "대충 S3 URL",
    title: "싸피1201",
    venue: "서울멀티캠퍼스",
  }
});

export const ReservationInfoList = atom<ReservationInfoType[]>({
  key: 'ReservationInfoList',
  default: [
    {
      "reservationId": 1,
      "reservationNumber": 123123123,
      "targetDate": "2023-11-09",
      "targetTime": "12:00",
      "headcount": 3,
      "totalPrice": 110000,
      "themeId": "qwkmeokmasdopifjeqw",
      "poster": "대충 S3 URL",
      "title": "싸피1201",
      "venue": "서울멀티캠퍼스",
    },
    {
      "reservationId": 1,
      "reservationNumber": 123123123,
      "targetDate": "2023-11-09",
      "targetTime": "12:00",
      "headcount": 3,
      "totalPrice": 110000,
      "themeId": "qwkmeokmasdopifjeqw",
      "poster": "대충 S3 URL",
      "title": "싸피1201",
      "venue": "서울멀티캠퍼스",
    },
    {
      "reservationId": 1,
      "reservationNumber": 123123123,
      "targetDate": "2023-11-09",
      "targetTime": "12:00",
      "headcount": 3,
      "totalPrice": 110000,
      "themeId": "qwkmeokmasdopifjeqw",
      "poster": "대충 S3 URL",
      "title": "싸피1201",
      "venue": "서울멀티캠퍼스",
    },
  ]
});
