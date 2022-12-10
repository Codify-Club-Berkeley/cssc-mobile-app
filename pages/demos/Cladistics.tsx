import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
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

import { createStorage } from "../../functions/bookmark-functions";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function Cladistics() {
  return (
    <ScrollView style={styles.scroll}>
      {/* <TouchableOpacity
        onPress={() => {
          createStorage();
        }}
      >
        <Text>set</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          console.log(await AsyncStorage.getItem("bookmarks"));
        }}
      >
        <Text>get</Text>
      </TouchableOpacity> */}
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
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={200}
        imageUri={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Darwin%27s_finches_by_Gould.jpg/1200px-Darwin%27s_finches_by_Gould.jpg"
        }
        overlayTitle={"Key Terms"}
        textColor={"black"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[globalStyles.subHeaderTextLeft, globalStyles.tealText]}
            >
              Cladistics
            </Text>
            <Text style={globalStyles.bodyText}>
              Cladistics – the science of studying and classifying organisms
              according to their evolutionary relationships, through a
              comparison of the organisms’ physical characteristics {"\n"}
            </Text>
            <Text
              style={[globalStyles.subHeaderTextLeft, globalStyles.tealText]}
            >
              Evolution
            </Text>
            <Text style={globalStyles.bodyText}>
              Evolution - a theory that the various types of animals and plants
              have their origin in other preexisting types and that the
              distinguishable differences are due to modifications in successive
              generations
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={200}
        imageUri={
          "https://skullsite.com/wp-content/uploads/dbimages/large/athyafuligula_s.jpg"
        }
        overlayTitle={"Experiment"}
        textColor={"black"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[globalStyles.subHeaderTextLeft, globalStyles.tealText]}
            >
              Experiment
            </Text>
            <Text style={globalStyles.bodyText}>
              Match each image with it's corresponding skull. {"\n"}
            </Text>
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
