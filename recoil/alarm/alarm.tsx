
import { atom } from "recoil";

export interface alarmType {
  notificationId?: number;
  themeId?: string;
  title?: string;
  body?: string;
  notificationType?: string;
  viewStatus?: string;
}

export const alarmListState = atom<alarmType[]>({
  key: "alarmListState",
  default: [
    {
      notificationId: 1,
      themeId: "5",
      title: "백조가 폴짝폴짝 흑조가 폴짝 예약 오픈 알림",
      body: "북마크 해두신 키이스케이프 강남점 백조가 폴짝폴짝 흑조가 폴짝 예약이 10분 뒤 PM 06시 34분에 오픈됩니다.",
      notificationType: "BOOKMARK",
      viewStatus: "NOT_VIEWED"
    },
    {
      notificationId: 2,
      themeId: "5",
      title: "이 세계에서 철학자인 나 저 세계에서 개발자? 예약 오픈 알림",
      body: "북마크 해두신 마스터키 강남점 이 세계에서 철학자인 나 저 세계에서 개발자? 예약이 10분 뒤 AM 00시 00분에 오픈됩니다.",
      notificationType: "BOOKMARK",
      viewStatus: "NOT_VIEWED"
    },
    {
      notificationId: 3,
      themeId: "5",
      title: "백조가 폴짝폴짝 흑조가 폴짝 예약 오픈 알림",
      body: "북마크 해두신 키이스케이프 강남점 백조가 폴짝폴짝 흑조가 폴짝 예약이 10분 뒤 PM 06시 34분에 오픈됩니다.",
      notificationType: "BOOKMARK",
      viewStatus: "NOT_VIEWED"
    },
    {
      notificationId: 4,
      themeId: "5",
      title: "이 세계에서 철학자인 나 저 세계에서 개발자? 예약 오픈 알림",
      body: "북마크 해두신 마스터키 강남점 이 세계에서 철학자인 나 저 세계에서 개발자? 예약이 10분 뒤 AM 00시 00분에 오픈됩니다.",
      notificationType: "BOOKMARK",
      viewStatus: "NOT_VIEWED"
    }
  ]
});