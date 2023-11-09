import React from "react";
import { View, Button } from "react-native";
import Input from "../../components/Input/Input";
import SearchScreenMap from "./components/SearchScreenMap/SearchScreenMap";
import PageContainer from "../../styles/commonStyles";

const SearchScreen = () => {
  return (
    <PageContainer>
      <SearchScreenMap />
    </PageContainer>
  );
};

export default SearchScreen;
