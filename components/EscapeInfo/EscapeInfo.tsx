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

  const handleDate = () => {
    const day = date?.getDay();
    if (day) {
      if (day === 0) {
        return "일";
      }
      if (day === 1) {
        return "월";
      }
      if (day === 2) {
        return "화";
      }
      if (day === 3) {
        return "수";
      }
      if (day === 4) {
        return "목";
      }
      if (day === 5) {
        return "금";
      }
      if (day === 6) {
        return "토";
      }
    }
    return "-";
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
            {handleDate()})
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
