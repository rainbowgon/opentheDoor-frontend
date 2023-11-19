import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import "../../../styles/colors";
// import CustomCheckBox from "../../../../components/CheckBox/CustomCheckBox";

const HeadCountSlider = () => {
  const [headCount, setHeadCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const HeadCountText = value => {
    if (!isEnabled) {
      return "";
    }
    switch (value) {
      case 1:
        return "1명";
      case 2:
        return "2명";
      case 3:
        return "3명";
      case 4:
        return "4명";
      case 5:
        return "5명";
      default:
        return "인원을 선택하세요";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sliderText}>인원: {HeadCountText(headCount)}</Text>
      {/* <CustomCheckBox
        checked={isEnabled}
        setChecked={setIsEnabled}
        onPress={toggleSwitch}
      /> */}
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={isEnabled ? headCount : 0}
        onValueChange={setHeadCount}
        minimumTrackTintColor="#682FB2FF"
        maximumTrackTintColor="#BAB2FFFF"
        thumbTintColor="#682FB2FF"
        // disabled={!isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sliderText: {
    color: "#FFFFFF", // 여기에서 글자 색상을 변경합니다.
    fontSize: 16,
    textAlign: "center",
    margin: 10,
  },
});

export default HeadCountSlider;
