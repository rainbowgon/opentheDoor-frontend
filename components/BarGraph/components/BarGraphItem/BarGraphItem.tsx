import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

// icons
import DoorOpen from '../../../../assets/icons/icon-door-open.png';
import ExplanationActivity from '../../../../assets/icons/icon-explanation-activity.png';
import ExplanationCapacity from '../../../../assets/icons/icon-explanation-capacity.png';
import ExplanationDifficulty from '../../../../assets/icons/icon-explanation-difficulty.png';
import ExplanationFear from '../../../../assets/icons/icon-explanation-fear.png';
import ExplanationHint from '../../../../assets/icons/icon-explanation-hint.png';
import ExplanationMachine from '../../../../assets/icons/icon-explanation-machine.png';
import { BarGraphIcon } from "./BarGraphItemStyle";

const BarGraphItem = () => {
  return (
    <View>
      {/* TODO - 수신된 데이터로 그래프 및 아이콘 선택 */}
      <BarGraphIcon source={DoorOpen} />
      <Text>text test</Text>
      <ProgressBar progress={0.5} />
    </View>
  );
};

export default BarGraphItem;