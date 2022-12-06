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

export default function Cladistics() {
  const [opacityi, setOpacity] = useState(100);
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
        textColor={"white"}
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
        displayHeight={300}
        imageUri={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fish_cladogram.svg/800px-Fish_cladogram.svg.png"
        }
        overlayTitle={"Background"}
        textColor={"black"}
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
              Cladistics
            </Text>
            <Text style={globalStyles.bodyText}>
              {"\n"}Cladistics is the science of studying and classifying
              organisms according to their evolutionary relationships, through a
              comparison of the organisms’ physical characteristics.
              {"\n\n"}Similarities among organisms are found in internal
              anatomical features and patterns of development that can be used
              to infer the degree of relatedness among organisms.
              {"\n\n"}Fossils can be compared to one another and to living
              organisms based on their similarities and differences. Some
              organisms that lived long ago are similar to existing organisms,
              but some are quite different. This helps scientists decide how
              animals evolved from prehistoric times.
              {/* (While the actual “rules” of cladistics classifications are often the subject 
              of intense scientific debate, this cart makes no attempt to impose a set of 
              rules as facts to be learned. The cart does, however, attempt to show that 
              groups of organisms can be sorted according to characteristics within a group, 
              and gives hands-on experience sorting fossils and fossil replicas into groups.) */}
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
        textColor={"white"}
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
  colorView: {
    backgroundColor: "blue",
    flex: 100,
    width: 200,
  },
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
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Futura",
    color: "#00B1BB",
  },
  dropDown: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  subTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
  card: {
    width: DEVICE_WIDTH - 300,
    height: 300,
    alignSelf: "center",
    opacity: 0.5,
    marginTop: -18,
  },
});
