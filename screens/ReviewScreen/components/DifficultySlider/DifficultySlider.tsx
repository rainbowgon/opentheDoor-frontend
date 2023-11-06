import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import "../../../../styles/colors";
import CustomCheckBox from "../../../../components/CheckBox/CustomCheckBox";

const DifficultySlider = () => {
  const [difficulty, setDifficulty] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const difficultyText = value => {
    if (!isEnabled) {
      return "";
    }
    switch (value) {
      case 1:
        return "매우 쉬움";
      case 2:
        return "쉬움";
      case 3:
        return "보통";
      case 4:
        return "어려움";
      case 5:
        return "매우 어려움";
      default:
        return "난이도를 선택하세요";
    }
  };

  return (
    <View style={styles.container}>
      <CustomCheckBox
        checked={isEnabled}
        setChecked={setIsEnabled}
        onPress={toggleSwitch}
      />
      <Text>난이도: {difficultyText(difficulty)}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={isEnabled ? difficulty : 0}
        onValueChange={setDifficulty}
        minimumTrackTintColor="#682FB2FF"
        maximumTrackTintColor="#BAB2FFFF"
        thumbTintColor="#682FB2FF"
        disabled={!isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default DifficultySlider;
