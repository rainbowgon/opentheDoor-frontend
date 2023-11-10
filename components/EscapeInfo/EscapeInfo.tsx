import * as React from "react";
import { View, Text } from "react-native";

export interface EscapeInfoProps {
  price?: number;
  date?: Date;
  minPerson?: number;
  maxPerson?: number;
  time?: number;
}

const EscapeInfo = ({
  price,
  date,
  minPerson,
  maxPerson,
  time,
}: EscapeInfoProps) => {
  return (
    <View>
      {price && (
        <View>
          <Text>금액</Text>
          <Text>
            최대 {price}원 (1인 당 {price}원)
          </Text>
        </View>
      )}
      {date && (
        <View>
          <Text>날짜</Text>
          <Text>
            {date.getFullYear()}.{date.getMonth()}.{date.getDate()} (
            {date.getDay()})
          </Text>
        </View>
      )}
      {(minPerson || maxPerson) && (
        <View>
          <Text>인원</Text>
          <Text>
            {minPerson} {minPerson && maxPerson && "~"} {maxPerson} 명
          </Text>
        </View>
      )}
      {time && (
        <View>
          <Text>소요시간</Text>
          <Text>{time} 분 (최대)</Text>
        </View>
      )}
    </View>
  );
};

export default EscapeInfo;
