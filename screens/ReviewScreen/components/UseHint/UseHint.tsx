import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import "../../../../styles/colors";
import CustomCheckBox from "../../../../components/CheckBox/CustomCheckBox";
import CustomButton from "../../../../components/Button/CustomButton";

const UseHint = () => {
  const [useHint, setUseHint] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text>힌트</Text>
      <CustomCheckBox
        checked={isEnabled}
        setChecked={setIsEnabled}
        onPress={toggleSwitch}
      />
      <CustomButton
        size="small"
        mode="outline"
        border="square"
        value="1개"
        onPress={() => setUseHint(1)} // 버튼을 누르면 힌트 사용 횟수 설정
      // disabled={!isEnabled} // isEnabled가 false이면 버튼 비활성화
      />
      <CustomButton
        size="small"
        mode="outline"
        border="square"
        value="2개"
        onPress={() => setUseHint(2)}
      // disabled={!isEnabled}
      />
      <CustomButton
        size="small"
        mode="outline"
        border="square"
        value="3개"
        onPress={() => setUseHint(3)}
      // disabled={!isEnabled}
      />
      <CustomButton
        size="small"
        mode="outline"
        border="square"
        value="4개 이상"
        onPress={() => setUseHint(4)} // 4 이상 사용했다고 가정
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
});

export default UseHint;
