import axios from "axios";
import { API_URL } from "../../constants/urls";
import { useRecoilState } from "recoil";
import {
  ThemeDetailInfoType,
  ThemeSimpleInfoType,
  themeListState,
  themeNearByList,
  themeRankListState,
  themeState,
} from "./theme";

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
export async function getThemeSearch({
  keyword = "1",
  page = 1,
  size = 10,
}: {
  keyword?: string;
  page?: number;
  size?: number;
}) {
  console.log("테마 검색 성공");
  const curKeyword = keyword;
  const curPage = page;
  const curSize = size;

  const response = await axios
    .get(
      `${API_URL}${SearchServicePath}${ThemeAPI}/searches?keyword=${curKeyword}&page=${curPage}&size=${curSize}`,
    )
    .then(response => {
      console.log("테마 검색 성공", response.data);
      setNearByTheme(response.data.data);
      // const checkData: ThemeSimpleInfoType[] = response.data.data;
      // console.log("테마 검색 데이터 형태 비교 성공", checkData);
      // setThemeList(checkData);
      // console.log("테마 검색 결과 삽입 성공");
    })
    .catch(error => {
      console.error("테마 검색 실패", error);
    });
}

export async function testGetThemeSearch() {
  console.log("테마 검색 진행");
  const curKeyword = "";
  const curPage = 1;
  const curSize = 10;

  const response = await axios
    .get(
      `${API_URL}${SearchServicePath}${ThemeAPI}/searches`,
    )
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
  console.log("테마 검색 성공");
  const curKeyword = "";
  const curPage = 1;
  const curSize = 10;
  const curHeadcount = null;
  const curRegion = null;

  const response = await axios
    .get(
      `${API_URL}${SearchServicePath}${ThemeAPI}/searches?keyword=${curKeyword}&latitude=${latitude}&longitude=${longitude}&headcount=${curHeadcount}&region=${curRegion}&page=${curPage}&size=${curSize}`,
    )
    .then(response => {
      console.log("테마 검색 성공", response.data);
      setNearByTheme(response.data.data);
      // const checkData: ThemeSimpleInfoType[] = response.data.data;
      // console.log("테마 검색 데이터 형태 비교 성공", checkData);
      // setThemeList(checkData);
      // console.log("테마 검색 결과 삽입 성공");
    })
    .catch(error => {
      console.error("테마 검색 실패", error);
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
