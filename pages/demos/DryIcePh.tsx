import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";

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
import DemoSectionVideo from "../../components/DemoSectionVideo";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function DryIcePh() {
  const [myOpacity, setMyOpacity] = useState(100);

  const [selected, setSelected] = useState("5");
  const data = [
    { key: "1", value: "Overview" },
    { key: "2", value: "Experiment" },
    { key: "3", value: "What's going on?" },
    { key: "4", value: "Video" },
  ];

  const cardData = [
    {
      front: {
        text: "Hi",
      },
      back: {
        text: "hihi",
      },
    },
  ];

  return (
    <ScrollView style={styles.scroll}>
      {/**<View style={styles.dropDown}>
          <SelectList data={data} SelectList={setSelected} />
        </View> */}

      {/**Spacer */}

      <DemoSection
        displayHeight={300}
        imageUri={
          "https://m.media-amazon.com/images/I/61y-diS0u7L._CR0,0,1280,675_SR580,306_.jpg"
        }
        overlayTitle={"Experiment"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[
                globalStyles.headerTextLeft,
                {
                  color: "#00B1BB",
                },
              ]}
            >
              Materials
            </Text>

            <Text style={globalStyles.bodyText}>
              Dry Ice, Warm Water, Dish Soap, Plastic Tray, Dry Ice Bubble
              Maker, Gloves, Goggles {"\n"}
            </Text>

            <Text
              style={[
                globalStyles.headerTextLeft,
                {
                  color: "#00B1BB",
                },
              ]}
            >
              Procedure
            </Text>
            <Text style={globalStyles.bodyText}>
              1. Fill tray with a thin layer of water and a few drops of dish
              soap {"\n\n"}
              2. Fill Bubble Maker half way with hot water {"\n\n"}
              3. Using Gloves and Goggles, carefully place a few pieces of dry
              ice into the bubble maker and close the lid {"\n\n"}
              4. Swish the end of the bubble maker in the tray of water to make
              a Boo Bubble! {"\n\n"}
              5. Place your hand in the soapy water of the tray to hold a Boo
              Bubble {"\n\n"}
            </Text>
          </>
        }
      ></DemoSection>

      <DemoSection
        displayHeight={500}
        imageUri={
          "https://s3.amazonaws.com/static.wd7.us/3/36/Dry_Ice_Pellets_Subliming.jpg"
        }
        overlayTitle={"Background"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[
                globalStyles.headerTextLeft,
                {
                  color: "#00B1BB",
                },
              ]}
            >
              Dry Ice
            </Text>
            <Text style={globalStyles.bodyText}>
              {"\n"}Dry ice is frozen carbon dioxide (CO₂), the gas we exhale as
              we breathe. It is much denser and colder than traditional ice.{" "}
              {"\n\n"}
              Dry ice is -109.3 F (-79.5 C). Traditional ice is 32 F (0 C). If
              carbon dioxide is stored at 300psi pressure, then it turns into a
              liquid. When fired into a container, the liquid turns in a white
              powder, which is pressed together to form solid dry ice. {"\n\n"}
              The atmosphere contains about .035% of this gas. CO₂ is a
              greenhouse gas, which means it absorbs light at infrared
              wavelengths. An increase in the concentration of this gas would,
              scientists believe, cause an increase in the atmosphere's average
              temperature. The high concentration of CO₂ in the atmosphere of
              the planet Venus is said to contribute to that planet's high
              average temperature. {"\n\n"}At normal atmospheric pressure on
              Earth, frozen CO₂ does not melt into a liquid, but rather
              evaporates directly into its gaseous form, hence the name dry ice.
              This process is called sublimation. The Boo Bubbles experiment
              relies on this property of dry ice. 1 pound of dry ice, when it
              sublimates (turns to gas), will produce 250 liters of gas at
              atmospheric pressure, enough to fill 125 2-liter bottles. {"\n\n"}
              That's a whole lot of gas! {"\n\n"}Did you know that sound travels
              more slowly in CO₂ than it does in air, just as light travels more
              slowly in glass than in air or vacuum? As a rule, dry ice will
              sublimate at a rate of five to ten pounds every 24 hours in a
              typical ice chest. Therefore, do not take more than you need.
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://s3.amazonaws.com/static.wd7.us/3/36/Dry_Ice_Pellets_Subliming.jpg"
        }
        overlayTitle={"Video"}
        displayType={"Video"}
        content={
          <>
            <YoutubePlayer
              height={300}
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
