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
import { useRecoilState } from "recoil";
import { themeListState } from "../../recoil/theme/theme";
import styled from "styled-components";

const SearchScreenBottomTab = () => {
  // const [themeList, setThemeList] = useRecoilState(themeListState);
  const [modalVisible, setModalVisible] = useState(true);
  const handleOpenModal = () => {};
  // useGetThemeList();
  useFocusEffect(
    useCallback(() => {
      setModalVisible(true); // 스크린이 포커스를 받을 때 마다 모달 상태를 true로 설정
      return () => {
        // 필요한 경우에는 스크린이 포커스를 잃을 때 실행할 로직을 여기에 추가
      };
    }, []),
  );
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 140) {
          // 아래로 140 픽셀 이상 드래그했을 때 모달 닫기
          setModalVisible(false);
          console.log("모달이 닫혔습니다.");
        } else if (gestureState.dy < -140) {
          // 위로 140 픽셀 이상 쓸어 올렸을 때 모달 다시 띄우기
          handleOpenModal();
        }
      },
    }),
  ).current;

  return (
    <FixedPageContainer>
      <Header back="true" menu="true" />
      <SearchScreenMapBottom />
      {/* <SearchListModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        {/* <View {...panResponder.panHandlers}>
          <CustomButton mode="selected" value="지도로 보기" />
        </View> */}
        <View {...panResponder.panHandlers} style={styles.container}>
          <Text> 지도로 보기 </Text>
        </View>
        <PageContainer>
          <TouchableOpacity
            activeOpacity={1}
            onPressOut={handleOpenModal}
            style={{ flex: 1 }}>
            {[...Array(10)].map((_, id) => (
              <InfoCard key={id} />
            ))}
          </TouchableOpacity>
        </PageContainer>
      </Modal>
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
