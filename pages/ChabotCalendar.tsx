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
  var matrix = [];
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
        /*var item = (n: number) => {
          <View>
            <Button title={d.toString()}
            onPress={() => selectDate(d)}/>
          </View>
        }*/
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
              height: 20,
              fontSize: 13,
              marginTop: 5,
              textAlign: 'center',
              // Highlight header
              backgroundColor: 'white',
              // Highlight Sundays
              color: '#707080',
              // Highlight current date
              fontWeight: 'normal'
            }}
            >
            {day}
          </Text>
          
        );
  });

  var today = new Date();
  var todayDate = today.getDate();
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth();

  var matrix = buildMatrix(dateObject);
  var rows = [];

  function highlightToday(item: number) {
    if (todayDate != item || todayYear != dateObject.getFullYear() || todayMonth != dateObject.getMonth()) {
      return (
        <Text
        style={{
          flex: 1,
          height: 18,
          fontSize: 13,
          marginTop: 5,
          textAlign: 'center',
          // Highlight header
          backgroundColor: '#fff',
          // Highlight Sundays
          color: '#303050',
          // Highlight current date
          fontWeight: 'normal'
        }}>
        {item != -1 ? item : ''}
        </Text>)
    } else {
      return (            
      <Text
        style={{
          flex: 1,
          height: 18,
          fontSize: 13,
          marginTop: 5,
          textAlign: 'center',
          // Highlight header
          backgroundColor: '#303050',
          // Highlight Sundays
          color: 'white',
          // Highlight current date
          fontWeight: 'bold'
        }}>
        {item}
      </Text>)
    }
  }

  rows = matrix.map((row, rowIndex) => {
    var rowItems = row.map((item, colIndex) => {
      if (todayMonth === dateObject.getMonth()) {
          return (highlightToday(item))
      }

      return (

        <Text
          style={{
            flex: 1,
            height: 18,
            fontSize: 13,
            marginTop: 5,
            textAlign: 'center',
            // Highlight header
            backgroundColor: '#fff',
            // Highlight Sundays
            color: '#303050',
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
          padding: 20,
          paddingLeft: 30,
          paddingRight: 30,
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
          paddingLeft: 30,
          paddingRight: 30,
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
  const navigation = useNavigation();


  var year = state.getFullYear();
  var month = state.getMonth();
  var firstDay = new Date(year, month, 1).getDay();

  var maxDays = nDays[month];
  if (month == 1) { // February leap year
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  } 

  
  const setMonth = (month: number, reset: boolean) => {    
    var newYear = state.getFullYear();
    var momentObject = moment().set({'month': month, 'year': newYear}); // change month value  

    if (reset) {
      momentObject = moment().set({'month': new Date().getMonth(), 'year': new Date().getFullYear()}); // change month value    
    } else {
      if (state.getMonth() === 11 && month === 0) {
        newYear = newYear + 1;
      } else if (state.getMonth() === 0 && month === 11) {
        newYear = newYear - 1;
      }
    momentObject = moment().set({'month': month, 'year': newYear});
    } // change month value  
    setState(momentObject.toDate());  // add to state   
    };   

  function changeMonth(n: number) {
    var currentMon = state.getMonth();
    var newMon = (currentMon + n) % 12;
    setState(() => {
      setMonth(newMon, false)
      return state;
    });
} 

  function resetMonth() {
    var originalMon = new Date().getMonth();
    setState(() => {
      setMonth(originalMon, true)
      return state;
    });
  }

  const leftarrow = '<';
  const rightarrow = '>';
  const divider = '_______________________________________________';

  return (

      <View style={styles.container}>
      <ScrollView 
        bounces={true}>
      <ScrollView horizontal={false} style={{height: 1200}}>
        <View style={{ height: 130, padding: 0, backgroundColor: "#1B2832" }}>
        <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1, height: 55, marginTop: 55}, 
            ]}
            source={require("../assets/images/logo-mobile.png")}
          />
         </View>


        <View style={{paddingTop: 35}}>
          <Text style={{    
            paddingLeft: 30,
            fontFamily: "Futura",
            fontWeight: "600",
            fontSize: 28,
            alignSelf: "flex-start",
            textAlign: "center",
            color: "black"
          }}>
            Calendar
          </Text>
        </View>



        <View style={{justifyContent: "flex-start", 
                      marginTop: 20, 
                      left: 20,
                      height: 380, 
                      width: 350, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 15, 
                      borderColor: "#FFFFFF", 
                      shadowColor: "#000000", 
                      shadowOffset: 
                        {height: 1, 
                          width: 1}, 
                      shadowRadius: 3, 
                      shadowOpacity: 0.5}}>

        <View style={{
          flexDirection: 'row',
          height: 50,
          width: 350,
          marginTop: 10, 
          paddingLeft: 35,
          paddingRight: 35,
          left: 0, 
          right: 20,
          justifyContent: "space-between"
          }}>  


          <Pressable
          onPress={() => resetMonth()}
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1
          }]}
        >
          <View>
            <Text style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#303050',
            backgroundColor: 'white',
            paddingTop: 22,
            paddingLeft: 2,
            textAlign: 'left'
          }}>
              {months[state.getMonth()]}  {state.getFullYear()}
            </Text>
          </View>
          </Pressable>

          <View style={{
            flexDirection: 'row',
            justifyContent: "space-between"
          }}>

          <Pressable
          onPress={() => changeMonth(-1)}
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1
          }]}
        >
          <View>
            <Text style={{
            fontWeight: 'normal',
            fontSize: 18,
            color: '#707080',
            paddingTop: 20,
            paddingRight: 15,
            textAlign: 'center'
          }}>
              {leftarrow}
            </Text>
          </View>
          </Pressable>
 
        <Pressable
          onPress={() => changeMonth(+1)}
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1
          }]}
        >
          <View>
            <Text style={{
            fontWeight: 'normal',
            fontSize: 18,
            color: '#707080',
            paddingTop: 20,
            paddingLeft: 15,
            paddingRight: 10,
            textAlign: 'center'
          }}>
              {rightarrow}
            </Text>
        </View>
        </Pressable>
        </View>

        </View>

        <View>
          <Text style={{
            fontSize: 10,
            color: '#707080',
            paddingLeft: 15,
            paddingRight: 10,
            textAlign: 'center'
          }}>
            {divider}
          </Text>
        </View>
        

        <View>{CalendarMatrix(state)}</View>
        </View>   
        

        <View style={{marginTop: 35}}>
          <Text style={{    
            paddingLeft: 30,
            fontFamily: "Futura",
            fontWeight: "600",
            fontSize: 28,
            alignSelf: "flex-start",
            textAlign: "center",
            color: "black"
          }}>
            Exhibitions
          </Text>
        </View>

        <ScrollView horizontal={true} style={{height: 200}}>
        <View style={{
          height: 200,
          width: 350,
          marginTop: 10
          }}>
        <TouchableOpacity 
              style={[
                styles.button, 
                {width: '100%', 
                height: 0, 
                borderRadius: 0, 
                padding: 0}
              ]
            }     
            activeOpacity={0.8}
            onPress={() => null}
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 10, 
                      left: 20, 
                      right: 20,
                      height: 150, 
                      width: 320, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 10, 
                      borderColor: "#FFFFFF", 
                      shadowColor: "#000000", 
                      shadowOffset: 
                        {height: 1, 
                          width: 1}, 
                      shadowRadius: 3, 
                      shadowOpacity: 0.5}}>

                        <Image
                          style={
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            
                          }
                          source={require("../assets/images/astronaut-mars-collage.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 5, marginTop: -40, fontSize: 17, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Astronaut
                          
                           </Text>
                        
            </View>
                
          </TouchableOpacity>

          </View>

          <View style={{
          height: 200,
          width: 350,
          marginTop: 10
          }}>
        <TouchableOpacity 
              style={[
                styles.button, 
                {width: '100%', 
                height: 0, 
                borderRadius: 0, 
                padding: 0}
              ]
            }     
            activeOpacity={0.8}
            onPress={() => null}
            >

            <View style={{justifyContent: "center", 
                      margin: 10, 
                      left: 20, 
                      right: 20,
                      height: 150, 
                      width: 320, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 10, 
                      borderColor: "#FFFFFF", 
                      shadowColor: "#000000", 
                      shadowOffset: 
                        {height: 1, 
                          width: 1}, 
                      shadowRadius: 3, 
                      shadowOpacity: 0.5}}>

                        <Image
                          style={
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            
                          }
                          source={require("../assets/images/crescent-moon.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 5, marginTop: -40, fontSize: 17, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Lunaverse
                          
                           </Text>
                        
            </View>
                
          </TouchableOpacity>
          </View>

          <View style={{
          height: 200,
          width: 350,
          marginTop: 10
          }}>
        <TouchableOpacity 
              style={[
                styles.button, 
                {width: '100%', 
                height: 0, 
                borderRadius: 0, 
                padding: 0}
              ]
            }     
            activeOpacity={0.8}
            onPress={() => null}
            >

            <View style={{justifyContent: "center", 
                      margin: 10, 
                      left: 20, 
                      right: 20,
                      height: 150, 
                      width: 320, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 10, 
                      borderColor: "#FFFFFF", 
                      shadowColor: "#000000", 
                      shadowOffset: 
                        {height: 1, 
                          width: 1}, 
                      shadowRadius: 3, 
                      shadowOpacity: 0.5}}>

                        <Image
                          style={
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            
                          }
                          source={require("../assets/images/sun-at-sea.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 5, marginTop: -40, fontSize: 17, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Sunstruck
                          
                           </Text>
                        
            </View>
                
          </TouchableOpacity>
          </View>

          <View style={{width: 40}}>

          </View>

          </ScrollView>

        <View style={{marginTop: 10}}>
          <Text style={{    
            paddingLeft: 30,
            fontFamily: "Futura",
            fontWeight: "600",
            fontSize: 28,
            alignSelf: "flex-start",
            textAlign: "center",
            color: "black"
          }}>
            Shows
          </Text>
        </View>

        <ScrollView horizontal={true} style={{height: 200}}>
        <View style={{
          height: 200,
          width: 350,
          marginTop: 10
          }}>
          <TouchableOpacity 
              style={[
                styles.button, 
                {width: '100%', 
                height: 0, 
                borderRadius: 0, 
                padding: 0}
              ]
            }     
            activeOpacity={0.8}
            onPress={() => null}
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 10, 
                      left: 20, 
                      right: 20,
                      height: 150, 
                      width: 320, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 10, 
                      borderColor: "#FFFFFF", 
                      shadowColor: "#000000", 
                      shadowOffset: 
                        {height: 1, 
                          width: 1}, 
                      shadowRadius: 3, 
                      shadowOpacity: 0.5}}>

                        <Image
                          style={
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            
                          }
                          source={require("../assets/images/chabot.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 5, marginTop: -40, fontSize: 17, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Lorem Ipsum
                          
                           </Text>
                        
            </View>

                
          </TouchableOpacity>
          </View>


          <View style={{
          height: 200,
          width: 350,
          marginTop: 10
          }}>
          <TouchableOpacity 
              style={[
                styles.button, 
                {width: '100%', 
                height: 0, 
                borderRadius: 0, 
                padding: 0}
              ]
            }     
            activeOpacity={0.8}
            onPress={() => null}
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 10, 
                      left: 20, 
                      right: 20,
                      height: 150, 
                      width: 320, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 10, 
                      borderColor: "#FFFFFF", 
                      shadowColor: "#000000", 
                      shadowOffset: 
                        {height: 1, 
                          width: 1}, 
                      shadowRadius: 3, 
                      shadowOpacity: 0.5}}>

                        <Image
                          style={
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            
                          }
                          source={require("../assets/images/universe-projection.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 5, marginTop: -40, fontSize: 17, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Lorem Ipsum
                          
                           </Text>
                        
            </View>

                
          </TouchableOpacity>



          </View>

          <View style={{width: 40}}></View>
          </ScrollView>
          </ScrollView>
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
    backgroundColor: "#999999",
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