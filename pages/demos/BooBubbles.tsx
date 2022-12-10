import React, { Component, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
//https://react-native-async-storage.github.io/async-storage/docs/api/
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import YoutubePlayer from "react-native-youtube-iframe";
import { globalStyles } from "../../GlobalStyles";
import Constants from "expo-constants";
import SelectList from "react-native-dropdown-select-list";

import DemoSection from "../../components/DemoSection";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

// async function setData(value) {
//   console.log("setting data to " + value);
//   try {
//     await AsyncStorage.setItem("@storage_Key", value);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function getData() {
//   try {
//     const value = await AsyncStorage.getItem("@storage_Key");
//     if (value !== null) {
//       console.log("retrieved value is " + value);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

export default function BooBubbles() {
  return (
    <ScrollView style={globalStyles.demoScrollView}>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://m.media-amazon.com/images/I/61y-diS0u7L._CR0,0,1280,675_SR580,306_.jpg"
        }
        overlayTitle={"Experiment"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              Materials
            </Text>

            <Text style={globalStyles.bodyText}>
              Dry Ice, Warm Water, Dish Soap, Plastic Trey, Dry Ice Bubble
              Maker, Gloves, Goggles {"\n"}
            </Text>

            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              Proceedure
            </Text>
            <Text style={globalStyles.bodyText}>
              1. Fill trey with a thin layer of water and a few drops of dish
              soap {"\n"}
              2. Fill Bubble Maker half way with hot water {"\n"}
              3. Using Gloves and Goggles, carefully place a few pieces of dry
              ice into the bubble maker and close the lid {"\n"}
              4. Swish the end of the bubble maker in the trey of water to make
              a Boo Bubble! {"\n"}
              5. Place your hand in the soapy water of the trey to hold a boo
              bubble {"\n"}
            </Text>
          </>
        }
      ></DemoSection>

      <DemoSection
        displayHeight={300}
        imageUri={
          "data:image/jpeg;base64,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"
        }
        overlayTitle={"Background"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              What is Dry Ice?
            </Text>
            <Text style={globalStyles.bodyText}>
              Dry ice is frozen Carbon Dioxide, or CO2, the gas we exhale as we
              breathe. It is much denser and colder than traditional ice. Dry
              Ice is -109.3 ° F (-79.5° C). Traditional ice is 32° F (0 degrees
              C).
            </Text>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              Does Dry Ice Melt?
            </Text>
            <Text style={globalStyles.bodyText}>
              Dry Ice doesn't melt - it sublimates. Sublimation is the process
              of going directly from a solid to a gas. Dry Ice by-passes the
              liquid form, giving it its name "Dry" Ice.
            </Text>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              Can I Touch Dry Ice?
            </Text>
            <Text style={globalStyles.bodyText}>
              NO! Dry ice can burn. Therefore, under no uncertain terms may you
              or any visitor touch, taste, or handle the dry ice without proper
              the gear. Dry ice can only be handled with gloves and goggles to
              properly protect yourself.
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={200}
        imageUri={
          "data:image/jpeg;base64,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"
        }
        overlayTitle={"Video"}
        displayType={"Video"}
        content={
          <>
            <YoutubePlayer
              height={200}
              width={DEVICE_WIDTH - 40}
              videoId={"BJyX3b6-KGk"}
              play={false}
            />
          </>
        }
      ></DemoSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  dropDown: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  card: {
    width: DEVICE_WIDTH - 300,
    height: 300,
    alignSelf: "center",
    opacity: 0.5,
    marginTop: -18,
  },
});
