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
    alignSelf: "center",
    textAlign: "center",
  },
  headerTextLeft: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "flex-start",
    textAlign: "center",
  },
  subHeaderTextLeft: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 14,
    alignSelf: "flex-start",
    textAlign: "center",
  },
  bodyText: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 12,
    alignSelf: "flex-start",
  },
  linkText: {
    fontFamily: "Futura",
    fontWeight: "700",
    fontSize: 12,
    color: "#0000FF",
    alignSelf: "center",
  },
  tealText: {
    //Chabot Teal
    color: "#27beb6",
  },

  darkTealText: {
    //Chabot Dark Teal
    color: "#00a6b9",
  },
  image: {
    resizeMode: "contain",
  },
  mapView: {
    borderWidth: 0,
    flexShrink: 1,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: "white",
  },
});

export { globalStyles };
