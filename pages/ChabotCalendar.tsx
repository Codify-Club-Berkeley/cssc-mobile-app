import { SafeAreaView, TouchableOpacity, Text } from "react-native";

import React, {Component} from "react";
import { useState } from 'react';
import { WebView } from "react-native-webview";

import Calendar from 'react-calendar';
import moment from 'moment'

//import 'react-calendar/dist/Calendar.css';

export default function ChabotCalendar() {
  
  return (
    //original link to chabot's website calendar
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://chabotspace.org/events/calendar-view/",
        }}
      />
    </SafeAreaView>
    );

}

/*
import { addMinutes, addHours, subMonths, startOfWeek, endOfWeek, startOfMonth, endOfMonth, addDays, isSameDay, isSameMonth, parse, addMonths, addYears, format } from 'date-fns';

class ChabotCalendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat, { useAdditionalDayOfYearTokens: true })}
        </div>
      );
    }

    return <Text>{days}</Text>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat, { useAdditionalDayOfYearTokens: true });
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default ChabotCalendar;


export default function ChabotCalendar() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </>
  )
}


function ChabotCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default ChabotCalendar;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Container = styled.div`
  width: 300px;
  border: 1px solid black;
  margin: 0 auto;
  box-shadow: 10px 10px 0px black;
`

const MonthText = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDay.getMonth(),
    year: selectedDay.getFullYear(),
  });


  useEffect(() => {}, [])

  return (
    <div style={{ width: '100%', paddingTop: 50 }}>
      <Container>
        <MonthText>
          {months[calendar.month]}
        </MonthText>
      </Container>
    </div>
  );
}

export default App;
*/
