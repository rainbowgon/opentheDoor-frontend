import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Button,
  PanResponder,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import Input from "../../components/Input/Input";
import SearchScreenMap from "./components/SearchScreenMap/SearchScreenMap";
import SearchListModal from "./components/SearchScreenMap/SearchListModal";
import Header from "../../components/Header/Header";
import PageContainer, { FixedPageContainer } from "../../styles/commonStyles";
import InfoCard from "../../components/InfoCard/InfoCard";
import { useFocusEffect } from "@react-navigation/native";
import SearchScreenMapBottom from "./components/SearchScreenMap/SearchScreenMapBottom";
import { useGetThemeList } from "../../recoil/theme/themeFeature";
import { useRecoilValue } from "recoil";
import { themeListState } from "../../recoil/theme/theme";
import styled from "styled-components";

const SearchScreenBottomTab = () => {
  const themeList = useRecoilValue(themeListState);
  const [modalVisible, setModalVisible] = useState(true);
  const handleOpenModal = () => { };
  // useGetThemeList();
  useFocusEffect(
    useCallback(() => {
      setModalVisible(true); // 스크린이 포커스를 받을 때 마다 모달 상태를 true로 설정
      return () => { };
    }, []),
  );

  return (
    <FixedPageContainer>
      <Header back="true" filter="true" />
      <SearchScreenMapBottom />
    </FixedPageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000009fa",
    padding: 15,
  },
});
export default SearchScreenBottomTab;
