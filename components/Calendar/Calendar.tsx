import React, { Component, useEffect, useState } from "react";
import { AppRegistry, Text, View } from "react-native";
import moment from "moment";
import { theme } from "../../styles/colors";

import CalendarStrip from "react-native-calendar-strip";
import CustomButton from "../Button/CustomButton";
import { TimeListView } from "./CalendarStyle";
import { themeState } from "../../recoil/theme/theme";
import { useRecoilValue } from "recoil";

let datesWhitelist = [
  {
    start: moment(),
    end: moment().add(7, "days"),
  },
];

let datesBlacklist = [];

const Calendar = ({ onTimeSelect, onDateSelect }) => {
  const themeDetail = useRecoilValue(themeState);
  // useEffect(() => {
  //   console.log("dateList", dateList);
  // }, [])
  const [curDate, setCurDate] = useState(moment());
  const [compareDate, setCompareDate] = useState({
    compareToFullYear: new Date().getFullYear().toString(),
    compareToMonth: (new Date().getMonth() + 1).toString(),
    compareToDate: new Date().getDate().toString(),
  });
  const [onSelectedTime, setOnSelectedTime] = useState<string>("");

  const handleDate = selectedDate => {
    console.log(
      "Calendar에서 선택된 날짜: ",
      selectedDate.format("YYYY-MM-DD"),
    );
    setCurDate(selectedDate);
    onDateSelect(selectedDate.format("YYYY-MM-DD"));
  };

  useEffect(() => {
    console.log(curDate, typeof curDate);
    setCompareDate({
      compareToFullYear: curDate.year().toString(),
      compareToMonth: (curDate.month() + 1).toString(),
      compareToDate: curDate.date().toString(),
    });
  }, [curDate]);

  const onCompareDate = (date: string) => {
    const selectFullYear = date.substring(0, 4);
    const selectMonth = date.substring(5, 7);
    const selectDate = date.substring(8, 10);

    if (selectFullYear !== compareDate.compareToFullYear) return false;
    if (selectMonth !== compareDate.compareToMonth) return false;
    if (selectDate !== compareDate.compareToDate) return false;

    return true;
  };

  const onModeSelected = (time) => {
    if (time.isAvailable === "AVAILABLE" && time.time === onSelectedTime) {
      return "active"
    }
    if (time.isAvailable === "AVAILABLE") {
      return "selected";
    }
    return "inactive";
  };

  return (
    <View>
      <CalendarStrip
        selectedDate={curDate}
        scrollable={true}
        onDateSelected={handleDate}
        calendarAnimation={{ type: "parallel", duration: 20 }}
        // daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
        daySelectionAnimation={{
          type: "background",
          duration: 200,
          highlightColor: `${theme.primary1}`,
        }}
        style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
        calendarHeaderStyle={{ color: `${theme.font5}` }}
        calendarColor={theme.transparent}
        dateNumberStyle={{ color: `${theme.font1_main}` }}
        dateNameStyle={{ color: `${theme.font1_main}` }}
        highlightDateNumberStyle={{ color: `${theme.primary3_main}` }}
        highlightDateNameStyle={{ color: `${theme.primary3_main}` }}
        disabledDateNameStyle={{ color: `${theme.background1}` }}
        disabledDateNumberStyle={{ color: `${theme.background1}` }}
        datesWhitelist={datesWhitelist}
        datesBlacklist={datesBlacklist}
        // iconLeft={require('../../assets/icons/')}
        // iconRight={require('./img/right-arrow.png')}
        iconContainer={{ flex: 0.1 }}
      />
      <TimeListView>
        {themeDetail?.timeSlotList &&
          themeDetail?.timeSlotList.map(timeInfo => (
            <>
              {timeInfo.date &&
                onCompareDate(timeInfo.date) &&
                timeInfo.timeList?.map(time => (
                  <CustomButton
                    mode={onModeSelected(time)}
                    value={time.time}
                    onPress={() => {
                      setOnSelectedTime(time.time);
                      onTimeSelect(time.time);
                    }}
                  />
                ))}
            </>
          ))}
      </TimeListView>
    </View>
  );
};

export default Calendar;
