import * as React from "react";
import { View, Text } from "react-native";
import { EscapeInfoContent, EscapeInfoTitle, EscapeInfoView, EscapeInfoViewRow } from "./EscapeInfoStyle";

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
    <EscapeInfoView>
      {price && (
        <EscapeInfoViewRow>
          <EscapeInfoTitle>금액</EscapeInfoTitle>
          <EscapeInfoContent>
            최대 {price}원 (1인 당 {price}원)
          </EscapeInfoContent>
        </EscapeInfoViewRow>
      )}
      {date && (
        <EscapeInfoViewRow>
          <EscapeInfoTitle>날짜</EscapeInfoTitle>
          <EscapeInfoContent>
            {date.getFullYear()}.{date.getMonth()}.{date.getDate()} (
            {date.getDay()})
          </EscapeInfoContent>
        </EscapeInfoViewRow>
      )}
      {(minPerson || maxPerson) && (
        <EscapeInfoViewRow>
          <EscapeInfoTitle>인원</EscapeInfoTitle>
          <EscapeInfoContent>
            {minPerson} {minPerson && maxPerson && "~"} {maxPerson} 명
          </EscapeInfoContent>
        </EscapeInfoViewRow>
      )}
      {time && (
        <EscapeInfoViewRow>
          <EscapeInfoTitle>소요시간</EscapeInfoTitle>
          <EscapeInfoContent>{time} 분 (최대)</EscapeInfoContent>
        </EscapeInfoViewRow>
      )}
    </EscapeInfoView>
  );
};

export default EscapeInfo;
