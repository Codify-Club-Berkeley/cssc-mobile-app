import React, {Component } from "react";
import { useState } from 'react';
import * as RN from "react-native";

import Calendar from 'react-calendar';
import moment from 'moment'

//import 'react-calendar/dist/Calendar.css';
/*
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
*/



class ChabotCalendar extends React.Component {
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 

  nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  state = {
    activeDate: new Date(),
    dateObject: moment().set("month", 1), // placeholder, will be changed when setMonth is ran
  }

  setMonth = (month: string) => {  
    let monthNo = this.months.indexOf(month);// get month number  
    let dateObject = Object.assign({}, this.state.dateObject);  
    dateObject = moment(dateObject).set("month", monthNo); // change month value  
    this.setState({  
    dateObject: dateObject // add to state  
    });  
    };
 
  changeMonth = (n: number) => {
      this.setState(() => {
        this.state.activeDate.setMonth(
          this.state.activeDate.getMonth() + n
        )
        return this.state;
      });
    } 

    //needs to be linked to the website and updated regularly 
  _onPress = (i: number) => {
      <RN.Text>Events of the Day</RN.Text>
  }

  render() {

    var year = this.state.activeDate.getFullYear();
    var month = this.state.activeDate.getMonth();
    var firstDay = new Date(year, month, 1).getDay();

    var maxDays = this.nDays[month];
    if (month == 1) { // February leap year
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {maxDays += 1;}
    } 
    
    //this is a placeholder, matrix needs to be modified for each month
    var matrix = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30]];
    var rows = [];
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        return (
          <RN.Text
            style={{
              flex: 1,
              height: 200,
              textAlign: 'center',
              // Highlight header
              backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
              // Highlight Sundays
              color: colIndex == 0 ? '#a00' : '#000',
              // Highlight current date
              //fontWeight: item == this.state.activeDate.getDate() 
              //                    ? 'bold': ''
            }}
            
            onPress={() => this._onPress(item)}>
            
            {item}
            
          </RN.Text>
        );
      });
      return (
        <RN.View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {rowItems}
        </RN.View>
      );
    }); 
 
    

    return (
      
      <RN.View>


        <RN.Text style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 100,
          textAlign: 'center'
        }}>
          {this.months[this.state.activeDate.getMonth()]}  {this.state.activeDate.getFullYear()}
        </RN.Text> 
        
        <RN.Button title="Previous"
         onPress={() => this.changeMonth(-1)}/>
        <RN.Button title="Next"
         onPress={() => this.changeMonth(+1)}/>



        <RN.Text>
          {rows}
        </RN.Text>



        
      </RN.View>
    );
  }
} 


export default class App extends React.Component {
  render() {
    return <ChabotCalendar/>;
  }
} 