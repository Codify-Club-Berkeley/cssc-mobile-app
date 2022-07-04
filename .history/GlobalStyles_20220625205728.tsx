import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const globalStyles = StyleSheet.create({
  titleText: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 30,
  },
  headerText: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 16,
  },
  bodyText: {
    fontFamily: "Futura",
    fontWeight: "700",
    fontSize: 8,
  },
  tealText: {
    color: "#27beb6",
  },
  darkTealText: {
    color: "#00a6b9",
  },
});

export { globalStyles };
