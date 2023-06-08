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

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")
              
            }
            activeOpacity={0.5}
            style={{alignSelf: 'flex-end', padding: 20, marginTop: -60}}
          >
            <Icon
              name="person-circle-outline"
              type="ionicon"
              size={40}
              color= "#FFFFFF"
              //tvParallaxProperties={undefined}
            />
            </TouchableOpacity>
          
        </View>
        
            <Image
                style={[
                  globalStyles.image,
                  {width: '100%', height: undefined, aspectRatio: 2.65, opacity: .75, backgroundColor: "#000000",  }
                ]}
                source={require("../assets/images/chabot_home_header.png")}
            />
          
          
      
        <View style={{justifyContent: "center", 
                      position: "absolute", 
                      left: 20, marginTop: 213, 
                      height: 250, 
                      width: '90%', 
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
            <Text style={globalStyles.titleText}>
              Welcome!
              </Text>

            <Text style={[globalStyles.headerText, {marginBottom: 5}]}>  
              Founded in 1883 as an astronomical observatory, 
              Chabot is located on 13 trail-laced acres in Oakland's 
              Redwood Regional Park within the largest stand of coastal 
              redwoods in the East Bay.
            </Text>

            <TouchableOpacity 
              style={[styles.button, {width: '90%', height: 50, borderRadius: 50}]}
              //onPress={() => Linking.openURL("https://14884.blackbaudhosting.com/14884/tickets?tab=3&txobjid=3d868201-c3eb-4a0c-9dd5-2ba9d2a188e4")}
              onPress={() => navigation.navigate("Tickets")
            
            }
              activeOpacity={0.8}
              >
                
              <Text style={[styles.buttonText, {fontSize: 20}]}>Get Tickets{"\n"}</Text>
              
            </TouchableOpacity>
        
        </View>

          <Text style={{fontFamily: "Futura", fontSize: 28, marginTop: 240, paddingLeft: 20}}>
              Shows Happening Today
          </Text>

          <ScrollView horizontal={true} style={{height: 380}}>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      right: 20,
                      height: 310, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: -10,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/astronaut-mars-collage.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -40, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Astronaut
                          
                           </Text>
                        
                        <Text style={[styles.description, {padding: 10, marginTop: 15}]}>
                          What does it take to be part of this incredible journey?
                           Experience a rocket launch from inside the body 
                           of an astronaut.
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6}
                              ]
                            }
                            activeOpacity={0.8}
                            
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>


            </View>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      height: 310, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: -10,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/universe-projection.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 5, marginTop: -40, fontSize: 17, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Phantom of the Universe
                          
                           </Text>
                        
                        <Text style={[styles.description, {padding: 10, marginTop: 18}]}>
                          An exciting exploration of dark matter, from the Big Bang
                           to its anticipated discovery at the Large Hadron Collider.
                           Lorem ipsum dolor. 
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6,
                                }
                              ]
                            }
                            activeOpacity={0.8}
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>


            </View>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      height: 310, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: -10,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/crescent-moon.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -40, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Lunaverse
                          
                           </Text>
                        
                        <Text style={[styles.description, {padding: 10, marginTop: 15}]}>
                          The story unfolds as a conversation between a curious young 
                          child and the Moon - Luna - over the course of a night, 
                          from moonrise to moonset.
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6}
                              ]
                            }
                            activeOpacity={0.8}
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>


            </View>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      height: 310, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: -10,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/sun-at-sea.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -40, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Sunstruck
                          
                           </Text>
                        
                        <Text style={[styles.description, {padding: 10, marginTop: 15}]}>
                        Explore the sun in all its glory in this fulldome show. Sunstruck 
                        takes us on a journey to discover the wonders of our magnificent sun.
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6}
                              ]
                            }
                            activeOpacity={0.8}
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>


            </View>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      height: 310, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: -10,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/chabot-telescopes.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -40, fontSize: 20, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                          Telescope Viewing
                          
                           </Text>
                        
                        <Text style={[styles.description, {padding: 10, marginTop: 15}]}>
                          Lorem ipsum dolor sit amet, eam dicant splendide eu. Cu sonet 
                          omnesque ponderum vim, eum ex augue suscipiantur, graeco 
                          invenire te sit.
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6}
                              ]
                            }
                            activeOpacity={0.8}
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>


            </View>

            <View style={{width: 40}}>

            </View>

          </ScrollView>

          <View style={{height: 10}}></View> 

          <TouchableOpacity style={[styles.button, {width: '80%', height: 50, borderRadius: 50, margin: 0}]}
                     activeOpacity={0.8}
                     onPress={() => navigation.navigate("Show Descriptions")}
            >

          <Text style={[styles.buttonText, {fontSize: 20}]}>View All Shows{"\n"}</Text>

          </TouchableOpacity>

        

        <View style={{height: 50}}>

        </View>

        
          <Text style={{fontFamily: "Futura", fontSize: 28, marginTop: 0, paddingLeft: 20}}>
              Current Exhibitions
          </Text>

          <ScrollView horizontal={true} style={{height: 450}}>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      right: 20,
                      height: 380, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: 0,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/chabot.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -50, fontSize: 13, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        NASA's Aerospace Innovation Journey
                          
                           </Text>
                        
                        <Text style={[styles.description, {padding: 10, marginTop: 12}]}>
                        NASA’s people test every aerospace innovation before it’s ready for flight, 
                        improving the design at every step, turning concepts into working prototypes 
                        and finally space-ready inventions. Engineers use these spacecraft models to 
                        investigate different aspects of aerodynamic design. 
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6}
                              ]
                            }
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("NASA Aerospace")}
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>


            </View>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      right: 20,
                      height: 380, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: 0,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/chabot-deck.jpg")}>


                        </Image>
                        
                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -58, fontSize: 13, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Orion Crew Module and Launch Abort System rocket
                          
                           </Text>

                        <Text style={[styles.description, {padding: 10, justifyContent: "center", marginTop: 30}]}>
                        This is a model of the Orion Crew Module escape rocket system that would carry astronauts
                        to safety in the event of a launch emergency. Some wind tunnel models are painted with a
                        pink coating that changes color with air pressure. 
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6,
                                }
                              ]
                            }
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("Onion Crew")}    
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>


            </View>

            <View style={{justifyContent: "center", 
                      margin: 10,
                      marginTop: 30, 
                      left: 20, 
                      height: 380, 
                      width: 205, 
                      backgroundColor: "#FFFFFF", 
                      borderWidth: 0.5, 
                      borderRadius: 20, 
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
                             height: undefined,
                             aspectRatio: 1.01, 
                             marginTop: 0,
                             backgroundColor: "#000000", 
                             borderRadius: 20, 
                            }
                            ]
                          }
                          source={require("../assets/images/chabot-activities.jpg")}>


                        </Image>

                        <Text style={[styles.description, {padding: 0, paddingLeft: 20, marginTop: -53, fontSize: 13, color: "black", backgroundColor:"white", opacity: 0.75}]}>
                        Orion Crew Module test model
                          
                           </Text>
                        
                        <Text style={[styles.description, {padding: 10, marginTop: 30}]}>
                        This wind tunnel model, of the world’s only deep space crewed vehicle helps engineers understand how air 
                        flows around the c apsule when it re-enters Earth’s atmosphere. Astronauts will spend most of their journey
                        living and working in this capsule. 
                          
                           </Text>
                        

                           <TouchableOpacity 
                              style={[
                                styles.button, 
                                {width: '70%', 
                                height: 25, 
                                borderRadius: 50, 
                                padding: 6}
                              ]
                            }
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("Onion Crew Test")}      
                          >
                
                              <Text style={[
                                styles.buttonText, 
                                {fontSize: 10}
                              ]
                            }
                          >
                                  Learn More{"\n"}
                                  
                              </Text>
              
            </TouchableOpacity>
          
          </View>

            
          <View style={{width: 40}}>

          </View>


          </ScrollView>


        <View style={{height: 20, opacity: 0}}>

        </View>

        <View style={{height: 10}}></View> 

        <TouchableOpacity style={[styles.button, {width: '80%', height: 50, borderRadius: 50, margin: 0}]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Exhibits")}>

        <Text style={[styles.buttonText, {fontSize: 20}]}>View All Exhibits{"\n"}</Text>

        </TouchableOpacity>

        <View style={{height: 30, opacity: 0}}></View>
        
        {/* <CarouselCards/> */}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingBottom: 20,
            marginTop: 150,
          }}
        >
          <Pressable
            style={[styles.button, { width: DEVICE_WIDTH / 3 }]}
            onPress={() =>
              Linking.openURL(
                "https://14884.blackbaudhosting.com/14884/tickets?tab=3&txobjid=3d868201-c3eb-4a0c-9dd5-2ba9d2a188e4"
              )
            }
          >
            <Text style={styles.buttonText}>Buy Tickets{"\n"}</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { width: DEVICE_WIDTH / 3 }]}
            onPress={() =>
              Linking.openURL(
                "https://14884.blackbaudhosting.com/14884/Memberships-2021"
              )
            }
          >
            <Text style={styles.buttonText}>Become a Member</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Pressable
            style={[styles.button, { width: DEVICE_WIDTH / 3 }]}
            onPress={() =>
              Linking.openURL(
                "https://14884.blackbaudhosting.com/14884/Support-Science-Education-2"
              )
            }
          >
            <Text style={styles.buttonText}>Support Chabot</Text>
          </Pressable>

          <Pressable
            style={[styles.button, { width: DEVICE_WIDTH / 3 }]}
            onPress={() => Linking.openURL("https://chabotspace.org/")}
          >
            <Text style={styles.buttonText}>Chabot Website</Text>
          </Pressable>
        </View> */}

        
        

        

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 10,
            flex: 1,
          }}
        >
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.header}>Hours</Text>
            <Text style={styles.bodyText}>
              Wednesday-Sunday:{"\n"}10 AM - 5 PM{"\n"}
              First Friday of the Month: {"\n"}6 PM - 10 PM {"\n"}
              Monday and Tuesday: {"\n"} Closed
            </Text>
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.header}>Visit</Text>
            <Text style={styles.bodyText}>
              10000 Skyline Blvd. {"\n"}Oakland, 
              California 94619 {"\n"}(510) 336 - 7300
            </Text>
          </View>
        </View>

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