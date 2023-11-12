import * as React from 'react';
import { Text, View } from 'react-native';
import BarGraphItem from './components/BarGraphItem/BarGraphItem';
import { BarGraphView } from "./BarGraphStyle";

const BarGraph = () => {
  return (
    <BarGraphView>
      <View>
        {/* TODO - 데이터 수신 */}
        {
          [...Array(3)].map(() => (
            <BarGraphItem />
          ))
        }
      </View>
    </BarGraphView>
  );
};

export default BarGraph;