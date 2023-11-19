import React, { useState } from "react";
import { View, Button } from "react-native";
import Input from "../../components/Input/Input";
import SearchScreenMap from "./components/SearchScreenMap/SearchScreenMap";
import SearchListModal from "./components/SearchScreenMap/SearchListModal";
import SearchResultMap from "./components/SearchScreenMap/SearchResultMap";
import Header from "../../components/Header/Header";
import { FixedPageContainer } from "../../styles/commonStyles";

const SearchResultScreen = () => {
  const [listModalVisible, setListModalVisible] = useState(false);

  return (
    <FixedPageContainer>
      <Header back="true" menu="true" />
      <SearchResultMap />
    </FixedPageContainer>
  );
};

export default SearchResultScreen;
