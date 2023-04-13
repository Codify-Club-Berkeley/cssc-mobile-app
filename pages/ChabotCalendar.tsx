import React, {Component } from "react";
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button, 
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";

import Calendar from 'react-calendar';
import moment from 'moment';
import { processFontFamily, useFonts } from "expo-font";

import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { globalStyles } from "../GlobalStyles";
import { Link, useNavigation } from "@react-navigation/native";
import { assets } from "../react-native.config";
import ShowDescriptions from "./other/ShowDescripstions";
import { ButtonGroup } from "react-native-elements";




const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 

var nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function buildMatrix(dateObject: Date) {
  var state =  dateObject;
  var matrix = []
  var year = state.getFullYear();
  var month = state.getMonth();
  var firstDay = new Date(year, month, 1).getDay();

  var maxDays = nDays[month];
  if (month == 1) { // February leap year
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  }

  var d = 1;
  var currentDay = firstDay;

  for (let x = 0; x < 7; x++) {
    var row = [];
    for (let y = 0; y < 7; y++) {
      if (x === 0 && y < firstDay) {
        row.push(-1);
      } else if (x > 0 && d > maxDays) {
        row.push(-1);
      } else {
        row.push(d);
        d += 1;
      }
    }
    matrix.push(row);
    if (d > maxDays) {break;}
  }

  return matrix;

}


function CalendarMatrix(dateObject: Date) {

  var dayHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var header = dayHeader.map((day) => {
        return (
          <Text
            style={{
              flex: 1,
              height: 18,
              marginTop: 5,
              textAlign: 'center',
              // Highlight header
              backgroundColor: '#1B2832',
              // Highlight Sundays
              color: 'white',
              // Highlight current date
              fontWeight: 'bold'
            }}
            >
            {day}
          </Text>
          
        );
  });

  var today = new Date();
  var todayDate = today.getDate;
  var todayYear = today.getFullYear;
  var todayMonth = today.getMonth;

  var matrix = buildMatrix(dateObject);
  var rows = [];

  rows = matrix.map((row, rowIndex) => {
    var rowItems = row.map((item, colIndex) => {
      return (
        <Text
          style={{
            flex: 1,
            height: 18,
            marginTop: 5,
            textAlign: 'center',
            // Highlight header
            backgroundColor: '#fff',
            // Highlight Sundays
            color: '#000',
            // Highlight current date
            fontWeight: 'normal'
          }}
          //onPress={() => this._onPress(item)}
          >
          {item != -1 ? item : ''}
        </Text>
        
      );
    });

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>

        {rowItems}
      </View>
    );
  }); 
  
  return (
  <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>

        {header}
      </View>

    {rows}
    </View>);
}


  

export default function ChabotCalendar() {


  const [state, setState] = useState(new Date());


  var year = state.getFullYear();
  var month = state.getMonth();
  var firstDay = new Date(year, month, 1).getDay();

  var maxDays = nDays[month];
  if (month == 1) { // February leap year
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  } 

  
  const setMonth = (month: number) => {    
    var newYear = state.getFullYear();
    if (state.getMonth() === 11 && month === 0) {
      newYear = newYear + 1;
    } else if (state.getMonth() === 0 && month === 11) {
      newYear = newYear - 1;
    }
    var momentObject = moment().set({'month': month, 'year': newYear}); // change month value  
    setState(momentObject.toDate());  // add to state   
    };   

  function changeMonth(n: number) {
    var currentMon = state.getMonth();
    var newMon = (currentMon + n) % 12;
    setState(() => {
      setMonth(newMon)

      return state;
    });
} 



  return (

      <View style={styles.container}>
      <ScrollView 
        bounces={true}>
        <View style={{ height: 130, padding: 0, backgroundColor: "#1B2832" }}>
        <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1, height: 55, marginTop: 55}, 
            ]}
            source={require("../assets/images/logo-mobile.png")}
          />
          
        </View>
          
        <Text style={{
          fontWeight: 'bold',
          fontSize: 25,
          marginTop: 20,
          paddingLeft: 20,
          textAlign: 'left'
        }}>
          {months[state.getMonth()]}  {state.getFullYear()}
          &emsp;&emsp;
          <Button title="<"
          onPress={() => changeMonth(-1)}/>
          &ensp;
          <Button title=">"
          onPress={() => changeMonth(+1)}/>
        </Text> 



        <View>{CalendarMatrix(state)}</View>
          
        
      </ScrollView>
      </View>


  );
}
 








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    paddingTop: 10,
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 20,
    alignSelf: "flex-start",
    textAlign: "center",
    fontColor: "white",
  },
  connect: {
    padding: 10,
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    padding: 10,
    fontFamily: "Futura",
    fontSize: 10,
    textAlign: "left",
  },
  button: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 16,
    color: "black",
    backgroundColor: "#1B2832",
    padding: 10,

    alignSelf: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  bodyText: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 12,
    alignSelf: "flex-start",
    fontColor: "black",
  },
  footerText: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 12,
    alignSelf: "flex-start",
    fontColor: "#000000", 
  },
  information: {
    flexDirection: "row",
  },
});