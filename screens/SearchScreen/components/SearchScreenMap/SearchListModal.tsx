import React, { useRef, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  PanResponder,
} from "react-native";
import InfoCard from "../../../../components/InfoCard/InfoCard";
import { useRecoilValue } from "recoil";
import { themeListState } from "../../../../recoil/theme/theme";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { SearchFilterIcon, SearchFilterIconView } from "./SearchListModalStyle";

import Expandmore from "../../../../assets/icons/icon-expandmore.png"

const SearchListModal = ({ modalVisible, setModalVisible }) => {
  const [selectedMarkerData, setSelectedMarkerData] = useState();
  const themeList = useRecoilValue(themeListState);

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
  useFocusEffect(
    React.useCallback(() => {
      // 화면으로 돌아올 때 모달 상태를 확인하고 필요한 조치를 취합니다
      // 예: 모달을 닫거나 상태를 업데이트
      setModalVisible(false);
    }, []),
  );

  // ... 나머지 코드

  const navigation = useNavigation();

  const handleOpenModal = () => { };

  const handleThemeSelect = (themeId: string) => {
    navigation.navigate("themeDetail");
    console.log("themeId는", { themeId: themeId });
  };

  const renderTheme = ({ item }) => (
    <InfoCard
      key={item.themeId}
      {...item}
      onPress={() => handleThemeSelect(item.themeId)}
    />
  );

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      {modalVisible && (
        <View style={styles.container}>
          <SearchFilterIconView  {...panResponder.panHandlers}>
            <SearchFilterIcon
              source={Expandmore}
            />
          </SearchFilterIconView>
          <FlatList
            data={themeList}
            renderItem={renderTheme}
            keyExtractor={item => item.themeId}
          />
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#030303",
    padding: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
});

export default SearchListModal;
