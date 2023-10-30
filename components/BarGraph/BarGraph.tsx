import * as React from 'react';
import { Text, View } from 'react-native';
import BarGraphItem from './components/BarGraphItem/BarGraphItem';

const BarGraph = () => {
  return (
    <View>
      <View>
        {/* TODO - 데이터 수신 */}
        {
          [...Array(3)].map(() => (
            <BarGraphItem />
          ))
        }
      </View>
    </View>
  );
};

export default BarGraph;
