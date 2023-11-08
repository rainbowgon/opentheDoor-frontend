import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import CustomCheckBox from "../../../../components/CheckBox/CustomCheckBox";
import { StyleSheet, Text, View } from "react-native";

const ReviewContent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSpoiler, setIsSpoiler] = useState(false);

  const toggleReviewEnabled = () =>
    setIsEnabled(previousState => !previousState);
  const toggleSpoiler = () => setIsSpoiler(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text>리뷰 : </Text>
      <CustomCheckBox
        checked={isEnabled}
        setChecked={setIsEnabled}
        onPress={toggleReviewEnabled}
      />
      <Input
        placeholder="여기에 리뷰 내용을 작성하세요"
        multiline={true}
        disabled={!isEnabled}
      />
      <View>
        <Text>스포일러 포함</Text>
        <CustomCheckBox checked={isSpoiler} onPress={toggleSpoiler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ReviewContent;
