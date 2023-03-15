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
import { Link } from "@react-navigation/native";

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
      <ScrollView>
        <View style={{ height: 108, padding: 0, backgroundColor: "#1B2832" }}>
        <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1, height: 60, marginTop: 25}, 
            ]}
            source={require("../assets/images/logo-mobile.png")}
          />
          
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
            <Text style={globalStyles.headerText}>  
              Founded in 1883 as an astronomical observatory, 
              Chabot is located on 13 trail-laced acres in Oakland's 
              Redwood Regional Park within the largest stand of coastal 
              redwoods in the East Bay.
            </Text>
            <Pressable style={[styles.button, {width: '80%', height: 45, borderRadius: 50}]}>
                
              <Text style={styles.buttonText}>Get Tickets{"\n"}</Text>

            </Pressable>
        
        </View>
        
        <View style={{height: 100}}>


        </View>
        {/* <CarouselCards/> */}
        <View
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
        </View>
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
              Wednesday-Sunday 10 a.m.-5 p.m.{"\n"}
              First Friday of the Month: 6-10 p.m. {"\n"}
              Closed Monday and Tuesday {"\n"}
            </Text>
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.header}>Visit</Text>
            <Text style={styles.bodyText}>
              10000 Skyline Blvd. Oakland, {"\n"}
              California 94619 {"\n"}(510) 336 - 7300
            </Text>
          </View>
        </View>

        <Text style={styles.connect}>Connect With Chabot</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync("https://twitter.com/ChabotSpace")
            }
          >
            <Icon
              name="twitter"
              type="entypo"
              size={40}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.facebook.com/ChabotSpace/"
              )
            }
          >
            <Icon
              name="facebook"
              type="entypo"
              size={40}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.instagram.com/chabotspace/"
              )
            }
          >
            <Icon
              name="instagram"
              type="entypo"
              size={40}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        </View>
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
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
  },
  button: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 16,
    color: "black",
    backgroundColor: "#00a6b9",
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
    fontColor: "white",
  },
  information: {
    flexDirection: "row",
  },
});