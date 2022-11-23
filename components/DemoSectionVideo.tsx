import React, { Component, useState } from "react";
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

import { globalStyles } from "../GlobalStyles";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function DemoSectionVideo(props) {
  const [myOpacity, setMyOpacity] = useState(100);
  return (
    <>
      {/**Overlay Image View */}

      {/**Underlay Image View */}
      <View style={{ height: 10 }}></View>

      <View
        style={[
          {
            width: DEVICE_WIDTH - 20,
            height: props.displayHeight,
            marginTop: -props.displayHeight,
            marginLeft: 0,
            opacity: 100,
            borderWidth: 1,
            borderRadius: 0,
            padding: 10,
          },
        ]}
      >
        {props.content}
      </View>

      <View style={{ height: 10 }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    width: DEVICE_WIDTH - 20,
    height: 320,
  },

  card: {
    width: DEVICE_WIDTH,
    height: 300,
    alignSelf: "center",
    opacity: 100,
    marginTop: -18,
    resizeMode: "contain",
  },
});
