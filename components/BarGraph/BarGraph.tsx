import * as React from 'react';
import BarGraphItem from './components/BarGraphItem/BarGraphItem';
import { BarGraphView } from "./BarGraphStyle";

const BarGraph = () => {
  return (
    <BarGraphView>
      {/* TODO - 데이터 수신 */}
      <BarGraphItem
        type={"doorOpen"}
        value={30}
      />
      {/* <BarGraphItem
        type={"activity"}
        value={40}
      /> */}
      {/* <BarGraphItem
        type={"capacity"}
        value={50}
      /> */}
      <BarGraphItem
        type={"difficulty"}
        value={60}
      />
      {/* <BarGraphItem
        type={"fear"}
        value={70}
      /> */}
      <BarGraphItem
        type={"hint"}
        value={80}
      />
      {/* <BarGraphItem
        type={"machine"}
        value={90}
      /> */}
    </BarGraphView>
  );
};

export default BarGraph;