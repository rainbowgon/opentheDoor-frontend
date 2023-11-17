import React, { useRef, useState } from "react";
import {
  Modal,
  TouchableOpacity,
  PanResponder,
  View,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import InfoCard from "../../../../components/InfoCard/InfoCard";
import { useNavigation } from "@react-navigation/native";
import PageContainer from "../../../../styles/commonStyles";
import CustomButton from "../../../../components/Button/CustomButton";

const SearchListModal = ({ modalVisible, setModalVisible }) => {
  // const [modalVisible, setModalVisible] = useState(true);
  const [selectedMarkerData, setSelectedMarkerData] = useState();

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

  const navigation = useNavigation();

  const handleOpenModal = () => {};

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
  );
};
///////////////////////////////////////////////////////
//   if (modalVisible) {
//     return (
//       <View style={{ flex: 1 }}>
//         <Modal
//           animationType="slide"
//           transparent={false}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(!modalVisible);
//           }}>
//           <View {...panResponder.panHandlers} style={{ padding: 20 }}>
//             <Text> 지도로 보기 </Text>
//           </View>
//           <PageContainer>
//             {[...Array(10)].map((_, id) => (
//               <InfoCard key={id} />
//             ))}
//           </PageContainer>
//         </Modal>
//       </View>
//     );
//   }
//   return (
//     <View>
//       <CustomButton
//         mode="selected"
//         size="large"
//         value="리스트로 보기"
//         onPress={() => setModalVisible(true)}
//       />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000009fa",
    padding: 15,
  },
});

export default SearchListModal;
