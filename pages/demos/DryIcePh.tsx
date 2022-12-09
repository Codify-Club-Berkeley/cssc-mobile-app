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

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function DryIcePh() {
  return (
    <ScrollView style={styles.scroll}>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://m.media-amazon.com/images/I/61y-diS0u7L._CR0,0,1280,675_SR580,306_.jpg"
        }
        overlayTitle={"Experiment"}
        displayType={"Text"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              Procedure
            </Text>
            <Text style={globalStyles.bodyText}>
              SAFETY: Wear eye protection and use gloves to handle the dry ice
              since it can cause severe frost burns. 1. Start with 250 ml of
              water in each cylinder. {"\n\n"}
              2. Add enough indicator to give an easily visible green color.{" "}
              {"\n\n"}
              3. Add a small piece of dry ice, or half of a larger piece. Note
              as the solution turns yellow and then orange. {"\n\n"}
              4. Start adding small pinches of baking soda, noting the changes
              in color. The solution will first turn yellow and then turn green.{" "}
              {"\n\n"}
              5. In one beaker create a gradient {"\n\n"}
              a. Add about half a spoonful of baking soda to the existing
              solution {"\n\n"}
              b. Add a small amount of vinegar. The upper portion of the
              solution should turn yellow. {"\n\n"}
              c. Add more vinegar, making sure it stays near the surface.x-ou
              should now have a gradient with green(7-8) at the bottom,
              yellow(6-6.5) in the middle and orange(5.5) at the top {"\n\n"}
              6. You can also create a more reactive baking soda and vinegar
              reaction{"\n\n"}
              a. Add a spoonful of baking soda to an existing solution {"\n\n"}
              i. If you add it to a solution gradient solution you can get a
              layer of blue bubbles at the top {"\n\n"}
              b. Add a small amount of vinegar. The solution will foam, forming
              red-orange bubbles. {"\n\n"}
              7. You can use the three beakers if you want to show the
              variations in the solutions. Keeping on permanently yellow-orange
              with the acid and one green with the case and performing demos in
              the third.
            </Text>
          </>
        }
      ></DemoSection>

      <DemoSection
        displayHeight={300}
        imageUri={
          "https://s3.amazonaws.com/static.wd7.us/3/36/Dry_Ice_Pellets_Subliming.jpg"
        }
        overlayTitle={"pH Scale"}
        displayType={"Text"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              pH Scale
            </Text>
            <Image
              style={globalStyles.demoSectionImage}
              source={{
                uri: "https://sciencenotes.org/wp-content/uploads/2020/09/The-pH-Scale-scaled.jpg",
              }}
            />
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://s3.amazonaws.com/static.wd7.us/3/36/Dry_Ice_Pellets_Subliming.jpg"
        }
        overlayTitle={"Materials"}
        displayType={"Text"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              Materials
            </Text>
            <Text style={globalStyles.bodyText}>
              Eye protection, Measuring cylinders as many as the number of
              indicators to be used, Expanded polystyrene cool-box to store the
              dry ice, Tongs or large spoon/scoop for transferring dry ice, Long
              stirring rod Gloves (leather or insulated) for handling dry ice,
              Dry ice — allow 100 g for each indicator Universal Indicator
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
              videoId={"BjQgvXpzEoY"}
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
