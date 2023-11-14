import React from "react";
import { View, Button } from "react-native";
import Input from "../../components/Input/Input";
import SearchScreenMap from "./components/SearchScreenMap/SearchScreenMap";
import SearchListModal from "./components/SearchScreenMap/SearchListModal";

const SearchScreenBottomTab = () => {
  return (
    <View>
      <SearchScreenMap />
      <SearchListModal />
    </View>
  );
};

export default SearchScreenBottomTab;
