import * as React from "react";
import { View, Text } from "react-native";
import { EscapeInfoContent, EscapeInfoTitle, EscapeInfoView, EscapeInfoViewRow } from "./EscapeInfoStyle";
import { PriceList } from "../../recoil/theme/theme";

export interface EscapeInfoProps {
  price?: null | PriceList[];
  date?: null | Date;
  minPerson?: null | number;
  maxPerson?: null | number;
  time?: null | number;
}

const EscapeInfo = ({
  price,
  date,
  minPerson,
  maxPerson,
  time,
}: EscapeInfoProps) => {

  const handlePriceItem = (item: PriceList) => {
    if (item.price && item.headcount) {
      return (item.price * item.headcount);
    }
  }

  return (
    <EscapeInfoView>
      {price && (
        <EscapeInfoViewRow>
          <EscapeInfoTitle>금액</EscapeInfoTitle>

          <View>
            {
              price.map(priceItem => (
                <EscapeInfoContent>
                  [{priceItem.headcount}인] {handlePriceItem(priceItem)}원 (1인 당 {priceItem.price}원)
                </EscapeInfoContent>
              ))
            }
          </View>
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
