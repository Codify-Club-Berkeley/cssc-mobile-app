import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import { processFontFamily, useFonts } from "expo-font";
import {
  Studio1Carousel,
  TouchTheSunCarousel,
} from "../components/carousel/data";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { useState } from "react";

import { Icon, Tab } from "react-native-elements";

import { globalStyles } from "../GlobalStyles";
import { Link, NavigationContainer, useNavigation } from "@react-navigation/native";
import { assets } from "../react-native.config";
import BooBubbles from "../pages/demos/BooBubbles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cladistics from "../pages/demos/Cladistics";
import DryIceComets from "../pages/demos/DryIceComets";
import DryIcePh from "../pages/demos/DryIcePh";
import InvisibleBells from "../pages/demos/InvisibleBells";
import SpectraCart from "../pages/demos/SpectraCart";
import Spectroscopes from "../pages/demos/Spectroscopes";
import VacuumChamber from "../pages/demos/VacuumChamber";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accordion from "react-native-collapsible/Accordion";




export default function demosNavigation() {
  const [settings, setSettings] = useState("english");
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  let [fontsLoaded] = useFonts({
    Futura: require("../assets/fonts/Futura.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  const navigation = useNavigation();



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
          
         <View 
         style={{
          flexDirection: 'row',
          height: 50,
          width: 350,
          marginTop: 10, 
          paddingLeft: 35,
          paddingRight: 25,
          left: 0, 
          right: 0,
          justifyContent: "space-between"
          }}>

        <Text style={{fontFamily: "Futura", fontSize: 28, marginTop: 15}}>
              Demos
          </Text>


          <Pressable
          onPress={() => navigation.navigate("Add New Page")}
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1
          }]}
        >
          <View>
            <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#707080',
            marginTop: 15,
            textAlign: 'center',
          }}>
              +
            </Text>
        </View>
        </Pressable>


        </View> 




        <View>

          <TextInput style={{marginLeft: DEVICE_WIDTH * 0.06, 
                              marginRight: DEVICE_WIDTH * 0.06, 
                              marginTop: 20,
                              marginBottom: 10,
                              padding: 5, 
                              backgroundColor: "#D9D9D9", 
                              opacity: 0.75, 
                              borderRadius: 20, 
                              width: DEVICE_WIDTH * 0.85, 
                              height: 30}} 
                              maxLength={40}
                              onChangeText={onChangeNumber}
                              value={number}
                              placeholder="Search"/>
        </View>




          <ScrollView horizontal={false} style={{height: 3600}}>

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
            onPress={() => navigation.navigate("Astrobee Hover Bot")}
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
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
                          source={require("../assets/images/ti1.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.8}]}>
                          Astrobee Hover-Bot
                          
                           </Text>
                        
            </View>
                
          </TouchableOpacity>


            

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
            onPress={() => navigation.navigate("Moonscape Sandbox")}       
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 220, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/ti2.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.8}]}>
                         Moonscape Sandbox
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>


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
            onPress={() => navigation.navigate("Hover Bot")}         
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 410, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/ti3.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.8}]}>
                          Hover-Bot
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

        
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
            onPress={() => navigation.navigate("Sun")} 
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 600, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/ti4.jpeg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.8}]}>
                          The Sun
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Mercury")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 790, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Mercury
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Venus")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 980, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Venus
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>


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
            onPress={() => navigation.navigate("Clouds on the Marble")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 1170, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Clouds on the Marble
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>


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
            onPress={() => navigation.navigate("Surface Temperature")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 1360, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Surface Temperature
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Moon")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 1550, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          The Moon
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Mars")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 1740, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Mars
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Jupiter")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 1930, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Jupiter
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>


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
            onPress={() => navigation.navigate("Saturn")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 2120, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Saturn
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Uranus")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 2310, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Uranus
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Neptune")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 2500, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Neptune
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>

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
            onPress={() => navigation.navigate("Pluto")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 2690, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Pluto
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>



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
            onPress={() => navigation.navigate("Vesta")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 2880, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Vesta
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>



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
            onPress={() => navigation.navigate("Ceres")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 3070, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Ceres
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>


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
            onPress={() => navigation.navigate("Explore the Solar System")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 3260, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Explore the Solar System
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>


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
            onPress={() => navigation.navigate("Wind Tunnel Test Zone")}     
            >

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 3450, 
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
                          style={[globalStyles.image,
                            {width: "100%", 
                             resizeMode:"cover",
                             height: undefined,
                             aspectRatio: 321/150, 
                             marginTop: -16,
                             backgroundColor: "#000000", 
                             borderRadius: 10, 
                            }
                            ]
                          }
                          source={require("../assets/images/VIPER_lunar_rover.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -45, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Wind Tunnel Test Zone
                          
                           </Text>
                        
            </View>
          </TouchableOpacity>



        </ScrollView>









        <Text style={styles.connect}>Connect with Chabot</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync("https://twitter.com/ChabotSpace")
            }
            activeOpacity={0.5}
          >
            <Icon
              name="twitter"
              type="entypo"
              size={40}
              //tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.facebook.com/ChabotSpace/"
              )
            }
            activeOpacity={0.5}
          >
            <Icon
              name="facebook"
              type="entypo"
              size={40}
              //tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.instagram.com/chabotspace/"
              )
            }
            activeOpacity={0.5}
          >
            <Icon
              name="instagram"
              type="entypo"
              size={40}
              //tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        </View>


        <Image style={[globalStyles.image,
                            {width: "100%", 
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: -5,
                             marginBottom: -100,
                             //backgroundColor: "#FFFFFF"
                            } 
                             //borderRadius: 20, 
                             //borderWidth: 0.5}
                            ]
                          }
                          source={require("../assets/images/trees.png")}>

        </Image>
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
  