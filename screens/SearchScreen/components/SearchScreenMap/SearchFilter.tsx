import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// conponent
import CustomButton from "../../../../components/Button/CustomButton";
import PageContainer from "../../../../styles/commonStyles";
import Input from "../../../../components/Input/Input";
import Search from "../../../../assets/icons/icon-sarch.png";
import { API_URL } from "../../../../constants/urls";
import axios from "axios";
import { searchResultsState } from "../../../../recoil/search/search";

const headcountOptions = {
  "2인": 2,
  "3인": 3,
  "4인 이상": 4,
};

const regionsMapping = {
  서울: "서울특별시",
  부산: "부산광역시",
  경기: "경기도",
  인천: "인천광역시",
  대전: "대전광역시",
  대구: "대구광역시",
  광주: "광주광역시",
  울산: "울산광역시",
  강원: "강원도",
  충남: "충청남도",
  충북: "충청북도",
  경북: "경상북도",
  경남: "경상남도",
  전북: "전라북도",
  전남: "전라남도",
  제주: "제주도",
};

const SearchFilter = () => {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [selectedHeadcount, setSelectedHeadcount] = useState([]);

  const handleSelectRegion = userFriendlyName => {
    const backendRegionName = regionsMapping[userFriendlyName];
    setSelectedRegions(prevSelectedRegions => {
      if (prevSelectedRegions.includes(backendRegionName)) {
        return prevSelectedRegions.filter(
          region => region !== backendRegionName,
        );
      } else {
        return [...prevSelectedRegions, backendRegionName];
      }
    });
  };

  const handleSelectHeadcount = headcountKey => {
    const headcountValue = headcountOptions[headcountKey];
    setSelectedHeadcount(prevSelectedHeadcount => {
      if (prevSelectedHeadcount.includes(headcountValue)) {
        return prevSelectedHeadcount.filter(hc => hc !== headcountValue);
      } else {
        return [...prevSelectedHeadcount, headcountValue];
      }
    });
  };

  const handleSubmit = async () => {
    // 선택된 지역들을 쿼리 매개변수로 변환
    const regionsQueryParams = selectedRegions
      .map(region => `region=${encodeURIComponent(region)}`)
      .join("&");

    const headcountQueryParam = selectedHeadcount
      .map(hc => `headcount=${hc}`)
      .join("&");
    // 검색 키워드, 위도, 경도 등 기타 필터링 매개변수를 설정
    // 예시 값으로 설정하였으며, 실제 앱에서는 사용자 입력 값을 사용해야 함
    // const keyword = ""; // TODO: 사용자 입력에 따라 설정
    const latitude = ""; // TODO: 현재 위치 또는 선택된 위치에 따라 설정
    const longitude = ""; // TODO: 현재 위치 또는 선택된 위치에 따라 설정
    const page = ""; // 페이지 번호
    const size = ""; // 페이지 당 결과 수
    const sortBy = ""; // 정렬 기준

    const searchUrl = `${API_URL}/search-service/themes/sorts?keyword=${encodeURIComponent(
      keyword,
    )}&latitude=${latitude}&longitude=${longitude}&${headcountQueryParam}&${regionsQueryParams}&page=${page}&size=${size}&sortBy=${sortBy}`;
    try {
      const response = await axios.get(searchUrl);
      console.log(response.data);
      console.log(selectedHeadcount);
      console.log(selectedRegions);
      const searchData = response.data.data;
      setRecoilState(searchResultsState, searchData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer contentContainerStyle={styles.scrollViewContent}>
      <Input
        label="테마 검색"
        icon={Search}
        onChangeText={setKeyword}
        value={keyword}
        onIconPress={handleSubmit}
      />
      <View style={styles.headcountContainer}>
        {Object.keys(headcountOptions).map(option => (
          <CustomButton
            key={option}
            value={option}
            size="small"
            mode={
              selectedHeadcount.includes(headcountOptions[option])
                ? "selected"
                : "outlined"
            }
            border="square"
            onPress={() => handleSelectHeadcount(option)}
            style={styles.button}
          />
        ))}
      </View>
      <View style={styles.container}>
        {Object.keys(regionsMapping).map(regionKey => (
          <CustomButton
            key={regionKey}
            value={regionKey}
            size="small"
            mode={
              selectedRegions.includes(regionsMapping[regionKey])
                ? "selected"
                : "outlined"
            }
            border="square"
            onPress={() => handleSelectRegion(regionKey)}
            style={styles.button}
          />
        ))}
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 16, // 좌우 패딩 조정
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%", // 전체 너비를 사용
  },
  headcountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%", // 전체 너비를 사용
    marginVertical: 8, // 상하 간격 추가
  },
  button: {
    marginBottom: 8,
    width: "45%", // 버튼 너비 조정
    marginHorizontal: 4, // 좌우 간격 추가
  },
});

export default SearchFilter;
