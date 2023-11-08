import { atom } from "recoil";

interface ThemeInfoType {
  id: string;
  venue: string;
  title: string;
  poster: string;
  explanation: string;
  level: number;
  minHeadcount: number;
  maxHeadcount: number;
}

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
export const themeState = atom<ThemeInfoType>({
  key: 'memberState',
  default: {
    id: "bjvTj4sBJrU5Y7hbO8hB",
    venue: "화정점",
    title: "B지하철13호선",
    poster: "https://www.master-key.co.kr/upload/room/144_img1.png",
    explanation: "“우리 열차는 죽음, 죽음으로 가는 마지막 열차입니다. 내리실 문은....없.습.니.다.”",
    level: 4,
    minHeadcount: 2,
    maxHeadcount: 5
  },
});

// FIXME - 공백으로 변경해야 합니다. - 테스트용 데이터입니다.
export const themeListState = atom<ThemeInfoType[]>({
  key: 'memberState',
  default: [{
    "id": "bjvTj4sBJrU5Y7hbO8hB",
    "venue": "화정점",
    "title": "B지하철13호선",
    "poster": "https://www.master-key.co.kr/upload/room/144_img1.png",
    "explanation": "“우리 열차는 죽음, 죽음으로 가는 마지막 열차입니다. 내리실 문은....없.습.니.다.”",
    "level": 4,
    "minHeadcount": 2,
    "maxHeadcount": 5
  }]
});