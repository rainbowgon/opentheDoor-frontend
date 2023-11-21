import React, { useState } from "react";
import axios from "axios";
import Input from "../../../../components/Input/Input";
import CustomButton from "../../../../components/Button/CustomButton";
import { InputHeadlineView } from "./InputHeadlineStyle";
import { API_URL } from "../../../../constants/urls";
import { searchResultsState } from "../../../../recoil/search/search";
import { useRecoilState, useSetRecoilState } from "recoil";
import Search from "../../../../assets/icons/icon-sarch.png";
import { useNavigation } from "@react-navigation/native";
import { themeListState } from "../../../../recoil/theme/theme";
import { myRegionState } from "../../../../recoil/map/map";

const InputHeadline = () => {
  const [themeList, setThemeList] = useRecoilState(themeListState);
  const [searchText, setSearchText] = useState("");
  const [myRegion, setMyRegion] = useRecoilState(myRegionState);

  const navigation = useNavigation();
  const handleSearchChange = text => {
    setSearchText(text);
  };

  const executeSearch = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/search-service/themes/searches`,
        {
          params: { keyword: searchText },
        },
      );
      // setThemeList(response.data.data);
      const searchData = response.data.data;
      setThemeList(searchData);
      // setMyRegion(searchData);
      if (searchData.length > 0) {
        const topResult = searchData[0];
        setMyRegion({
          latitude: parseFloat(topResult.latitude),
          longitude: parseFloat(topResult.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      }
      navigation.navigate("searchBottomTab");
    } catch (error) {
      console.error("검색 실패", error);
    }
  };

  return (
    <InputHeadlineView>
      <Input
        label="테마 검색"
        value={searchText}
        onChangeText={handleSearchChange}
        icon={Search}
        onIconPress={executeSearch}
        // 추가적으로 필요한 props를 전달할 수 있습니다.
      />
      {/* 검색 결과를 표시하는 로직을 여기에 추가 */}
    </InputHeadlineView>
  );
};

export default InputHeadline;
