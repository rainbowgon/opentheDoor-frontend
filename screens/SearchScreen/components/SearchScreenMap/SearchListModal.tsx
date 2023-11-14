import React, { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import InfoCard from "../../../../components/InfoCard/InfoCard";
import { useNavigation } from "@react-navigation/native";

const SearchListModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [selectedMarkerData, setSelectedMarkerData] = useState();

  const handleThemeSelect = (themeId: string) => {
    // getThemeDetail;
    navigation.navigate("themeDetail");
    console.log("themeId는", { themeId: themeId });
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        // style={styles.modalOverlay}
        activeOpacity={1}
        onPressOut={() => {
          setModalVisible(false);
        }}></TouchableOpacity>
      <View>
        <InfoCard
          {...selectedMarkerData}
          onPress={() => handleThemeSelect(selectedMarkerData.themeId)}
        />
      </View>
    </Modal>
  );
};

export default SearchListModal;
