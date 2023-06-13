import React, {Component} from "react";
import CarouselCards from "./CarouselCards";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { processFontFamily, useFonts } from "expo-font";
import {
  Studio1Carousel,
  TouchTheSunCarousel,
} from "../components/carousel/data";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { useState } from "react";

import { Icon } from "react-native-elements";

import { globalStyles } from "../GlobalStyles";
import { Link, useNavigation } from "@react-navigation/native";
import { assets } from "../react-native.config";
import ShowDescriptions from "./other/ShowDescripstions";

export default function Home() {
    const [settings, setSettings] = useState("english");
  
    let [fontsLoaded] = useFonts({
      Futura: require("../assets/fonts/Futura.otf"),
    });
  
    if (!fontsLoaded) {
      return null;
    }


    
  
    const DEVICE_WIDTH = Dimensions.get("window").width;
    const DEVICE_HEIGHT = Dimensions.get("window").height;

    

    //#1B2832 another Chabot Website Color
    return (
        <View style={styles.container}>
            <View style={{ height: 130, padding: 0, backgroundColor: "#1B2832" }}>
        <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1, height: 55, marginTop: 55}, 
            ]}
            source={require("../assets/images/logo-mobile.png")}
          />

          </View>

          <View style={{height: 15}}></View>

          <Text style={[globalStyles.titleText, {padding: 10, fontSize: 25}]}>
            DAILY ADMISSION TICKET
          </Text>

          <Text style={[globalStyles.bodyText, {fontSize: 11, paddingHorizontal: DEVICE_WIDTH / 5.2}]}>
            Members, please login to receive your discount.
          </Text>

          <View style={{height: 0}}></View>

          <View style={{height: DEVICE_HEIGHT / 2, width: DEVICE_WIDTH, alignItems: "center", padding: 30}}>
            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                    <Text style={[globalStyles.titleText, {fontSize: 24}]}>
                    Adult
                    </Text>
                    <Text style={[globalStyles.bodyText, {fontSize: 10}]}>
                    ($24)
                    </Text>
                </View>

                <View style={{width: DEVICE_WIDTH * 0.4}}></View>

                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => adultTix = adultTix - 1}
                >
                    <Icon
                    name="remove-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>

                    
                    <Text style={[styles.bodyText, {fontSize: 25, padding: 7}]}>
                    </Text>
                    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => addTicket(adultTix)}
                >
                    <Icon
                    name="add-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>
                </View>
                

            </View>

            <View style={{padding: 5, height: 2, width: DEVICE_WIDTH * 0.82, marginRight: 7, marginBottom: 25, borderBottomColor: "#1B2832", borderBottomWidth: 2}}/>
            
            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                    <Text style={[globalStyles.titleText, {fontSize: 24}]}>
                    Senior
                    </Text>
                    <Text style={[globalStyles.bodyText, {fontSize: 10}]}>
                    ($19)
                    </Text>
                </View>

                <View style={{width: DEVICE_WIDTH * 0.37}}></View>

                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => adultTix = adultTix - 1}
                >
                    <Icon
                    name="remove-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>

                    
                    <Text style={[styles.bodyText, {fontSize: 25, padding: 7}]}>
                        0
                    </Text>
                    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => addTicket(adultTix)}
                >
                    <Icon
                    name="add-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>
                </View>
                

            </View>
            <View style={{padding: 5, height: 2, width: DEVICE_WIDTH * 0.82, marginRight: 7, marginBottom: 25, borderBottomColor: "#1B2832", borderBottomWidth: 2}}/>

            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                    <Text style={[globalStyles.titleText, {fontSize: 24}]}>
                    Youth (2-12)
                    </Text>
                    <Text style={[globalStyles.bodyText, {fontSize: 10}]}>
                    ($19)
                    </Text>
                </View>

                <View style={{width: DEVICE_WIDTH * 0.2}}></View>

                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => adultTix = adultTix - 1}
                >
                    <Icon
                    name="remove-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>

                    
                    <Text style={[styles.bodyText, {fontSize: 25, padding: 7}]}>
                        0
                    </Text>
                    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => addTicket(adultTix)}
                >
                    <Icon
                    name="add-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>
                </View>
                

            </View>
            <View style={{padding: 5, height: 2, width: DEVICE_WIDTH * 0.82, marginRight: 7, marginBottom: 25, borderBottomColor: "#1B2832", borderBottomWidth: 2}}/>

            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                    <Text style={[globalStyles.titleText, {fontSize: 24}]}>
                    Student
                    </Text>
                    <Text style={[globalStyles.bodyText, {fontSize: 10}]}>
                    ($19)
                    </Text>
                </View>

                <View style={{width: DEVICE_WIDTH * 0.34}}></View>

                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => adultTix = adultTix - 1}
                >
                    <Icon
                    name="remove-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>

                    
                    <Text style={[styles.bodyText, {fontSize: 25, padding: 7}]}>
                        0
                    </Text>
                    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => addTicket(adultTix)}
                >
                    <Icon
                    name="add-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>
                </View>
                

            </View>

            <View style={{padding: 5, height: 2, width: DEVICE_WIDTH * 0.82, marginRight: 7, marginBottom: 20, borderBottomColor: "#1B2832", borderBottomWidth: 2}}/>

            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", justifyContent: "flex-start"}}>
                    <Text style={[globalStyles.titleText, {fontSize: 24}]}>
                    Children under 2
                    </Text>
                    <Text style={[globalStyles.bodyText, {fontSize: 10}]}>
                    (FREE)
                    </Text>
                </View>

                <View style={{width: DEVICE_WIDTH * 0.07}}></View>

                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => adultTix = adultTix - 1}
                >
                    <Icon
                    name="remove-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>

                    
                    <Text style={[styles.bodyText, {fontSize: 25, padding: 7}]}>
                        0
                    </Text>
                    
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{padding: 7}}
                    //onPress={() => addTicket(adultTix)}
                >
                    <Icon
                    name="add-circle-outline"
                    type="ionicon"
                    size={30}
                    color= "#1B2832"
                    //tvParallaxProperties={undefined}
                    />
                    </TouchableOpacity>
                </View>
                

            </View>
          </View>

          <View style={{height: 10}}></View>

          <TouchableOpacity 
              style={[styles.button, {width: '80%', height: 50, borderRadius: 50}]}
              activeOpacity={0.8}
              >
                
              <Text style={[styles.buttonText, {fontSize: 20}]}>Add to Cart{"\n"}</Text>
              
            </TouchableOpacity>


            <Text style={[globalStyles.bodyText, {padding: 10, marginTop: 10, marginHorizontal: 15, textAlign: 'center', fontSize: 9 }]}>
                Daily Admission Tickets are valid for any regular museum admission 10 AM - 5 PM Wednesday through Sunday, and do not offer entrance to any special events.
            </Text>


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