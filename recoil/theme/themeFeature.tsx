import axios from "axios";
import { API_URL } from "../../constants/urls";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  ThemeDetailInfoType,
  ThemeSimpleInfoType,
  themeListState,
  themeNearByList,
  themeRankListState,
  themeState,
} from "./theme";
import { useEffect } from "react";

// apis
const SearchServicePath = `/search-service`;
const ThemeAPI = "/themes";

const accessToken = "testToken";

const [theme, setTheme] = useRecoilState(themeState);
const [themeList, setThemeList] = useRecoilState(themeListState);
const [themeRankList, setThemeRankList] = useRecoilState(themeRankListState);
const [nearByTheme, setNearByTheme] = useRecoilState(themeNearByList);

/**
 * TODO - 테마 정렬 (GET) - getThemeSort
 * /search-service/themes/sorts?keyword={keyword}&sortBy={sort-by}&page={page}&size={size}
 */
export async function getThemeSort({
  keyword = null,
  sortBy = null,
  page = null,
  size = null,
}: {
  keyword?: null | string;
  sortBy?: null | string; // FIXME - 타입 미지정됨 (수정 필요)
  page?: null | number;
  size?: null | number;
}) {
  const curKeyword = keyword;
  const curSortBy = sortBy;
  const curPage = page;
  const curSize = size;

  const response = await axios
    .get(
      `${API_URL}${SearchServicePath}${ThemeAPI}/sorts?keyword=${curKeyword}&sortBy=${curSortBy}&page=${curPage}&size=${curSize}`,
    )
    .then(response => {
      console.log("테마 정렬 성공", response.data);
      setThemeList(response.data.data);
      // const checkData: ThemeSimpleInfoType[] = response.data.data;
      // console.log("테마 정렬 데이터 형태 비교 성공", checkData);
      // setThemeList(checkData);
      // console.log("테마 정렬 결과 삽입 성공");
    })
    .catch(error => {
      console.error("테마 정렬 실패", error);
    });
}

/**
 * TODO - 테마 검색 (GET) - getThemeSearch
 * /search-service/themes/searches?keyword={keyword}&page={page}&size={size}
 */
// getThemeSearch 함수 변경
export async function getThemeSearch({ keyword = "1", page = 1, size = 10 }) {
  try {
    const response = await axios.get(
      `${API_URL}${SearchServicePath}${ThemeAPI}/searches?keyword=${keyword}&page=${page}&size=${size}`,
    );
    console.log("테마 검색 성공", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("getThemeSearch, 테마 검색 실패", error);
    throw error;
  }
}

//////////
// export async function getThemeSearch({
//   keyword = "1",
//   page = 1,
//   size = 10,
// }: {
//   keyword?: string;
//   page?: number;
//   size?: number;
// }) {
//   console.log("테마 검색 성공");
//   const curKeyword = keyword;
//   const curPage = page;
//   const curSize = size;

//   const response = await axios
//     .get(
//       `${API_URL}${SearchServicePath}${ThemeAPI}/searches?keyword=${curKeyword}&page=${curPage}&size=${curSize}`,
//     )
//     .then(response => {
//       console.log("테마 검색 성공!!!!!!!!!!!", response.data.data);
//       // setThemeList(response.data.data);
//       // const checkData: ThemeSimpleInfoType[] = response.data.data;
//       // console.log("테마 검색 데이터 형태 비교 성공", checkData);
//       // setThemeList(checkData);
//       console.log("테마 검색 결과 삽입 성공");
//     })
//     .catch(error => {
//       console.error("getThemeSearch, 테마 검색 실패", error);
//     });
// }

export async function testGetThemeSearch() {
  console.log("테마 검색 진행");
  const curKeyword = "";
  const curPage = 1;
  const curSize = 3;

  const response = await axios
    .get(`${API_URL}${SearchServicePath}${ThemeAPI}/searches`)
    .then(response => {
      console.log("테마 검색 성공", response.data);
      setNearByTheme(response.data.data);
      console.log("테마 검색 결과 삽입 성공");
      // const checkData: ThemeSimpleInfoType[] = response.data.data;
      // console.log("테마 검색 데이터 형태 비교 성공", checkData);
      // setThemeList(checkData);
    })
    .catch(error => {
      console.error("테마 검색 실패", error);
    });
}

/**
 * TODO - 내 주변 테마 검색 (GET) - getUpdateNearByThemeList
 * /search-service/themes/searches?keyword={keyword}&latitude={latitude}&longitude={longitude}&headcount={headcount}&region={region}&page={page}&size={size}
 */
export async function getUpdateNearByThemeList({
  latitude = 37.5013,
  longitude = 127.0396781,
}: {
  latitude?: null | number;
  longitude?: null | number;
}) {
  console.log("테마 검색 성공", nearByTheme);
  const curKeyword = null;
  const curPage = null;
  const curSize = 10;
  const curHeadcount = null;
  const curRegion = null;
  const curSortBy = "DISTANCE";
  // SortBy 종류
  // BOOKMARK, REVIEW, RECOMMEND, DISTANCE

  const response = await axios
    .get(
      `${API_URL}${SearchServicePath}${ThemeAPI}/sorts?keyword=${curKeyword}&size=${curSize}&page=${curPage}&sortBy=${curSortBy}`,
    )
    // .get(
    //   `${API_URL}${SearchServicePath}${ThemeAPI}/sorts?keyword=${curKeyword}&page=${curPage}&size=${curSize}&sortBy=${curSortBy}`,
    // )
    .then(response => {
      console.log("테마 검색 성공", response.data);
      setNearByTheme(response.data);
      // const checkData: ThemeSimpleInfoType[] = response.data.data;
      // console.log("테마 검색 데이터 형태 비교 성공", checkData);
      // setThemeList(checkData);
      // console.log("테마 검색 결과 삽입 성공");
    })
    .catch(error => {
      console.error("내 주변 테마 검색 실패", error);
    });
}

/**
 * TODO - 테마 주차별 랭킹 조회 (GET) - getThemeRanking
 * /search-service/themes/rankings
 */
export async function getThemeRanking() {
  const response = await axios
    .get(`${API_URL}${SearchServicePath}${ThemeAPI}/rankings`)
    .then(response => {
      console.log("테마 상세 조회 성공", response.data);
      setThemeRankList(response.data.data);
    })
    .catch(error => {
      console.error("테마 상세 조회 실패", error);
    });
}

/**
 * TODO - 테마 상세 조회 (GET) - getThemeDetail
 * /search-service/themes/{theme-id}
 */
export async function getThemeDetail(themeId?: string) {
  // FIXME - themeId를 자신의 ID로 등록
  const curThemeId: string = themeId || "1";

  const response = await axios
    .get(`${API_URL}${SearchServicePath}${ThemeAPI}/${curThemeId}`)
    .then(response => {
      console.log("테마 상세 조회 성공", response.data);
      setTheme(response.data.data);
      // const checkData: ThemeDetailInfoType = response.data.data;
      // console.log("테마 상세 조회 데이터 형태 비교 성공", checkData);
      // setTheme(checkData);
      // console.log("테마 상세 조회 삽입 성공");
    })
    .catch(error => {
      console.error("테마 상세 조회 실패", error);
    });
}

/////////////// Custom Hook
export const useUpdateNearByThemeList = () => {
  const setNearByTheme = useSetRecoilState(themeNearByList);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        // 테마 검색 함수 호출
        const response = await getThemeSearch({
          keyword: "특정 키워드", // 필요한 키워드 입력
          page: 1,
          size: 3,
        });

        // 받아온 데이터를 상태에 저장
        if (response && response.data) {
          setNearByTheme(response.data.data); // 여기서 response.data.data 형식이 맞는지 확인하세요
        }
      } catch (error) {
        console.error("테마 검색 실패", error);
      }
    };

    fetchThemes();
  }, []);
};
//////

// export const useUpdateNearByThemeList = () => {
//   const setNearByTheme = useSetRecoilState(themeNearByList);

//   useEffect(() => {
//     const fetchThemes = async () => {
//       try {
//         const response = await getUpdateNearByThemeList({
//           latitude: 37.5642135,
//           longitude: 127.0016985,
//         });
//         if (response && response.data.data) {
//           setNearByTheme(response.data.data); // 상태 업데이트
//         } else {
//           setNearByTheme([]); // 응답이 없거나 예상과 다를 경우 빈 배열 설정
//         }
//       } catch (error) {
//         console.error("테마 검색 실패패패패패패패", error);
//         setNearByTheme([]); // 오류 발생 시 빈 배열 설정
//       }
//     };

//     fetchThemes();
//   }, []);
// };

export const useGetThemeList = () => {
  // const setThemeList = useSetRecoilState(themeListState);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        // 테마 검색 함수 호출
        const response = await getThemeSearch({
          keyword: "1",
          page: 1,
          size: 10,
        });

        // 받아온 데이터를 상태에 저장
        if (response && response.data) {
          // console.log("여기가 에러입니다 에어어어어어어");
          // setThemeList(response); // 여기서 response.data.data 형식이 맞는지 확인하세요
        }
      } catch (error) {
        console.error("useGetThemeList 테마 검색 실패", error);
      }
    };

    fetchThemes();
  }, []);
};
