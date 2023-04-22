import React from "react";
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
  
    const navigation = useNavigation();
  
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

          <Text style={[globalStyles.titleText, {padding: 20}]}>
            Welcome!
          </Text>

          <Text style={[globalStyles.bodyText, {padding: 5, marginLeft: DEVICE_WIDTH * 0.1, fontSize: 15}]}>
            Email
          </Text>

          <TextInput style={{padding: 5, backgroundColor: "#D9D9D9", opacity: 0.75, borderRadius: 8, width: DEVICE_WIDTH * 0.8, height: 30}}
                     maxLength={40}
                      />

            <View style={{height: 15}}>

            </View>

          
          <Text style={[globalStyles.bodyText, {padding: 5, marginLeft: DEVICE_WIDTH * 0.1, fontSize: 15}]}>
            Password            
          </Text>

          <TextInput style={{padding: 5, backgroundColor: "#D9D9D9", opacity: 0.75, borderRadius: 8, width: DEVICE_WIDTH * 0.8, height: 30}}
                     maxLength={40}
                      />
        <TouchableOpacity style={{marginLeft: -DEVICE_WIDTH * 0.65}}>
        <Text style={[globalStyles.bodyText, {opacity: 0.4, padding: 5, marginLeft: DEVICE_WIDTH * 0.1, fontSize: 11}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
          
        <View style={{height: 10}}></View>


        <TouchableOpacity 
              style={[styles.button, {width: '60%', height: 40, borderRadius: 50}]}
              //onPress={() => }
              activeOpacity={0.8}
              >
                
              <Text style={[styles.buttonText, {fontSize: 17}]}>Sign In{"\n"}</Text>
              
            </TouchableOpacity>   

            <View style={{height: 15}}></View>
          

            <TouchableOpacity style={{marginLeft: -DEVICE_WIDTH * 0.1}}>
        <Text style={[globalStyles.bodyText, {color: "#000000", opacity: 0.4, padding: 5, marginLeft: DEVICE_WIDTH * 0.1, fontSize: 13, fontWeight: 'bold'}]}>
            Log In as Guest
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={{marginLeft: -DEVICE_WIDTH * 0.1, padding: 10}}>
        <Text style={[globalStyles.bodyText, {color: "#000000", opacity: 0.4, padding: 5, marginLeft: DEVICE_WIDTH * 0.1, fontSize: 13, fontWeight: 'bold', textDecorationLine: 'underline'}]}>
            Click Here for Admin Login
          </Text>
        </TouchableOpacity>

        <Image style={[globalStyles.image,
                            {width: DEVICE_WIDTH * 1.8, 
                             height: DEVICE_HEIGHT / 2.5,
                             aspectRatio: 1.7, 
                             marginTop: -20,
                             opacity: 0.75
                             //backgroundColor: "#FFFFFF"
                            } 
                             //borderRadius: 20, 
                             //borderWidth: 0.5}
                            ]
                          }
                          source={require("../assets/images/trees.png")}>

        </Image>


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