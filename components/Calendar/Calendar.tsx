import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import moment from 'moment';

import CalendarStrip from 'react-native-calendar-strip';

let datesWhitelist = [{
  start: moment(),
  end: moment().add(3, 'days')  // total 4 days enabled
}];

let datesBlacklist = [moment().add(2, 'days')]; // 1 day disabled

const curDate = new Date;

const Calendar = () => (
  <View>
    <CalendarStrip
      selectedDate={curDate}
      calendarAnimation={{ type: 'sequence', duration: 30 }}
      daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
      style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
      calendarHeaderStyle={{ color: 'white' }}
      calendarColor={'#7743CE'}
      dateNumberStyle={{ color: 'white' }}
      dateNameStyle={{ color: 'white' }}
      highlightDateNumberStyle={{ color: 'yellow' }}
      highlightDateNameStyle={{ color: 'yellow' }}
      disabledDateNameStyle={{ color: 'grey' }}
      disabledDateNumberStyle={{ color: 'grey' }}
      datesWhitelist={datesWhitelist}
      datesBlacklist={datesBlacklist}
      // iconLeft={require('./img/left-arrow.png')}
      // iconRight={require('./img/right-arrow.png')}
      iconContainer={{ flex: 0.1 }}
    />
  </View>
);

export default Calendar;