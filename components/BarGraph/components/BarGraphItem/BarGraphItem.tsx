import * as React from 'react';
import { Image, Text, View } from 'react-native';

import { BarGraphIcon, BarGraphItemView, ProgressBar, ProgressBarFill } from "./BarGraphItemStyle";

// icons
import DoorOpen from '../../../../assets/icons/icon-door-open.png';
import Activity from '../../../../assets/icons/icon-explanation-activity.png';
import Capacity from '../../../../assets/icons/icon-explanation-capacity.png';
import Difficulty from '../../../../assets/icons/icon-explanation-difficulty.png';
import Fear from '../../../../assets/icons/icon-explanation-fear.png';
import Hint from '../../../../assets/icons/icon-explanation-hint.png';
import Machine from '../../../../assets/icons/icon-explanation-machine.png';

export interface BarGraphItemProps {
  type: null | "doorOpen" | "activity" | "capacity" | "difficulty" | "fear" | "hint" | "machine";
  value: null | number;
}

const BarGraphItem = ({ type, value }: BarGraphItemProps) => {

  const handleIcon = (icon: null | string) => {
    if (icon === "doorOpen") {
      return <BarGraphIcon source={DoorOpen} />
    }
    if (icon === "activity") {
      return <BarGraphIcon source={Activity} />
    }
    if (icon === "capacity") {
      return <BarGraphIcon source={Capacity} />
    }
    if (icon === "difficulty") {
      return <BarGraphIcon source={Difficulty} />
    }
    if (icon === "fear") {
      return <BarGraphIcon source={Fear} />
    }
    if (icon === "hint") {
      return <BarGraphIcon source={Hint} />
    }
    if (icon === "machine") {
      return <BarGraphIcon source={Machine} />
    }
    return <BarGraphIcon source={Activity} />
  };

  return (
    <BarGraphItemView>
      {/* TODO - 수신된 데이터로 그래프 및 아이콘 선택 */}
      <View>
        {
          handleIcon(type)
        }
      </View>
      <ProgressBar>
        <ProgressBarFill percent={value || 0} />
      </ProgressBar>
    </BarGraphItemView>
  );
};

export default BarGraphItem;