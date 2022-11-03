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
  return (
    <>
      <TouchableOpacity onPress={() => setMyOpacity(100 - myOpacity)}>
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
                color: "white",
                alignSelf: "center",
                marginTop: -(props.displayHeight / 1.75),
                fontSize: 30,
                fontFamily: "Futura",
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
