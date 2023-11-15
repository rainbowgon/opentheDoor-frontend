import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Button,
  PanResponder,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import Input from "../../components/Input/Input";
import SearchScreenMap from "./components/SearchScreenMap/SearchScreenMap";
import SearchListModal from "./components/SearchScreenMap/SearchListModal";
import Header from "../../components/Header/Header";
import PageContainer, { FixedPageContainer } from "../../styles/commonStyles";
import InfoCard from "../../components/InfoCard/InfoCard";
import { useFocusEffect } from "@react-navigation/native";

const SearchScreenBottomTab = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const handleOpenModal = () => {};
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
      <SearchScreenMap />
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
        <View {...panResponder.panHandlers} style={{ padding: 20 }}>
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

export default SearchScreenBottomTab;
