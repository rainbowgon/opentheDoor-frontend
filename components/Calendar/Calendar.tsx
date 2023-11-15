import React, { Component, useEffect, useState } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import moment from 'moment';
import { theme } from "../../styles/colors";

import CalendarStrip from 'react-native-calendar-strip';
import CustomButton from "../Button/CustomButton";
import { TimeListView } from "./CalendarStyle";

let datesWhitelist = [{
  start: moment(),
  end: moment().add(3, 'days')  // total 4 days enabled
}];

let datesBlacklist = [moment().add(2, 'days')]; // 1 day disabled

const curDate = new Date;

const Calendar = () => {
  // useEffect(() => {
  //   console.log(curDate);
  // }, [curDate])
  const [date, setDate] = useState(new Date);

  const handleDate = (date) => {
    setDate(date);
    console.log(date);
  }

  return (
    <View>
      <CalendarStrip
        selectedDate={curDate}
        onDateSelected={handleDate}
        calendarAnimation={{ type: 'parallel', duration: 20 }}
        // daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
        daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: `${theme.primary1}` }}
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
        <CustomButton mode="selected" value="07:00" />
        <CustomButton mode="selected" value="08:30" />
        <CustomButton mode="selected" value="10:00" />
        <CustomButton mode="inactive" value="11:30" />
        <CustomButton mode="selected" value="13:00" />
        <CustomButton mode="inactive" value="14:30" />
        <CustomButton mode="selected" value="16:00" />
        <CustomButton mode="inactive" value="17:30" />
        <CustomButton mode="selected" value="19:00" />
        <CustomButton mode="inactive" value="20:30" />
      </TimeListView>
    </View >
  )
};

export default Calendar;