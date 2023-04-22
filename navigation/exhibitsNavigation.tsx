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




export default function exhibitsNavigation() {
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
          
        <Text style={{fontFamily: "Futura", fontSize: 28, marginTop: 15, paddingLeft: 20}}>
              Exhibits
          </Text>

        <View>

          <TextInput style={{marginLeft: DEVICE_WIDTH * 0.06, 
                              marginRight: DEVICE_WIDTH * 0.06, 
                              marginTop: 10,
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




          <ScrollView horizontal={false} style={{height: 1000}}>

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
            onPress={() => navigation.navigate("NASA Aerospace")}
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
                          NASA's Aerospace Innovation Journey
                          
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
            onPress={() => navigation.navigate("Onion Crew")}       
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
                            Orion Crew Module and Launch Abort System rocket
                          
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
            onPress={() => navigation.navigate("Dry Ice Comets")}         
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
                            Orion Crew Module test model 
                          
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
            onPress={() => navigation.navigate("Dry Ice Ph")} 
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
                            Ballistics range models  
                          
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
            onPress={() => navigation.navigate("Invisible Bells")}     
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
                            Wind Tunnels
                          
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