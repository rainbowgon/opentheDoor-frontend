import React, { useState } from "react";
import axios from "axios";
import Input from "../../../../components/Input/Input";
import CustomButton from "../../../../components/Button/CustomButton";
import { InputHeadlineView } from "./InputHeadlineStyle";
import { API_URL } from "../../../../constants/urls";
import { searchResultsState } from "../../../../recoil/search/search";
import { useSetRecoilState } from "recoil";
import Search from "../../../../assets/icons/icon-sarch.png";
import { useNavigation } from "@react-navigation/native";

const InputHeadline = () => {
  const setSearchResults = useSetRecoilState(searchResultsState);
  const [searchText, setSearchText] = useState("");

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
      setSearchResults(response.data.data);
      navigation.navigate("searchResult");
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
