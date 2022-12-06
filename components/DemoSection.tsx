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

export default function DemoSection(props) {
  const [myOpacity, setMyOpacity] = useState(100);
  const [pressable, setPressable] = useState(false);
  // Handles opacity differently based on displayType.
  // Videos should have normal opacity until clicked once, at which point its opacity stays 0.
  // Can be modified to include other displayTypes in the future.
  // Otherwise, opacity should toggle back and forth when clicked.
  function betterOpacity(props) {
    const dispType = props.displayType;
    if (dispType == "Video") {
      setMyOpacity(0);
      setPressable(true);
    } else {
      setMyOpacity(100 - myOpacity);
    }
  }

  return (
    <>
      <TouchableOpacity
        disabled={pressable}
        onPress={() => betterOpacity(props)}
      >
        {/**Overlay Image View */}
        <View
          style={[
            {
              width: DEVICE_WIDTH - 40,
              height: props.displayHeight,

              opacity: myOpacity,
            },
          ]}
        >
          <Image
            style={{
              width: DEVICE_WIDTH - 20,
              height: props.displayHeight,
              resizeMode: "cover",
            }}
            source={{
              uri: props.imageUri,
            }}
          />
          <Text
            style={[
              {
                color: "black",
                alignSelf: "center",
                marginTop: -(props.displayHeight / 1.75),
                fontSize: 30,
                fontFamily: "Futura",
                borderWidth: 3,
                backgroundColor: "white",
                padding: 5,
                opacity: 1,
              },
            ]}
          >
            {props.overlayTitle}
          </Text>
        </View>

        {/**Underlay Image View */}

        <View
          style={[
            {
              width: DEVICE_WIDTH - 20,
              height: props.displayHeight,
              marginTop: -props.displayHeight,
              marginLeft: 0,
              opacity: 100 - myOpacity,
              borderWidth: 1,
              borderRadius: 0,
              padding: 10,
            },
          ]}
        >
          {props.content}
        </View>
      </TouchableOpacity>
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
