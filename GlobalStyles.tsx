import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const globalStyles = StyleSheet.create({
  titleText: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
  },
  headerText: {
    fontFamily: "Futura",
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  titleBarText: {
    fontFamily: "Futura",
    fontSize: 25,
  },
  tealText: {
    //Chabot Teal
    color: "#27beb6",
  },

  darkTealText: {
    //Chabot Dark Teal
    color: "#00a6b9",
  },
  darkGreyText: { color: "#1B2832" },
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
  demoSectionImage: {
    width: DEVICE_WIDTH / 1.2,
    height: "100%",
    resizeMode: "contain",
  },
  mapBackgroundImage: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderWidth: 1,
  },
  demoScrollView: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
  },
});

export { globalStyles };
