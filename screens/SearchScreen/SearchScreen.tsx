import React, { useState } from "react";
import { View, Button } from "react-native";
import Input from "../../components/Input/Input";
import SearchScreenMap from "./components/SearchScreenMap/SearchScreenMap";
import SearchListModal from "./components/SearchScreenMap/SearchListModal";
import Header from "../../components/Header/Header";
import { FixedPageContainer } from "../../styles/commonStyles";

const SearchScreen = () => {
  const [listModalVisible, setListModalVisible] = useState(false);

  return (
    <FixedPageContainer>
      <Header back="true" menu="true" />
      <SearchScreenMap />
    </FixedPageContainer>
  );
};

export default SearchScreen;
