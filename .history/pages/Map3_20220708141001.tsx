import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import { createRef, useState } from "react";
import { useFonts } from "expo-font";
import { Icon } from "react-native-elements";

import MapDisplay from "../components/MapDisplay";
import { Studio1Carousel } from "../components/carousel/data";
import { globalStyles } from "../GlobalStyles";

export default function MapObject3({ navigation }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  function updateView() {
    updateZoom(1);
    setTimeout(console.log("hi"), 2000);
  }

  function updateZoom(zoomLevel: number) {
    zoomableViewRef.current!.zoomTo(zoomLevel);
  }

  function updatePosition(xPos: number, yPos: number) {
    zoomableViewRef.current!.moveTo(xPos, yPos);
  }

  function handleNav(location: string, clearModal: number) {
    setModalVisible((modalVisible) => ({
      ...modalVisible,
      [clearModal]: !modalVisible[clearModal],
    }));
    navigation.navigate(location);
  }

  function swapExhibit(currentModal: number, newModal: number) {
    setModalVisible((modalVisible) => ({
      ...modalVisible,
      [currentModal]: !modalVisible[currentModal],
    }));
    setModalVisible((modalVisible) => ({
      ...modalVisible,
      [newModal]: !modalVisible[newModal],
    }));
  }

  const [modalVisible, setModalVisible] = useState([false, false, false]);

  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 1, flexShrink: 1, height: 500, width: 310 }}>
        <ReactNativeZoomableView
          ref={zoomableViewRef}
          bindToBorders={true}
          panBoundaryPadding={200}
          maxZoom={10}
          contentWidth={100}
          contentHeight={300}
          style={{ borderWidth: 1 }}
        >
          <View style={{ flex: 1, borderWidth: 1, width: 220 }}>
            <ImageBackground
              style={styles.image}
              source={require("../assets/maps/chabotUpdatedMap3.png")}
            >
              <View style={{ flex: 1 }}>
                <View style={{ top: 200, right: 0 }}>
                  {/**
                   * put modals here
                   *
                   */}
                </View>
                <View style={{ top: 190, left: 165, width: 25 }}>
                  <TouchableOpacity
                    onPress={() =>
                      setModalVisible((modalVisible) => ({
                        ...modalVisible,
                        [0]: !modalVisible[0],
                      }))
                    }
                  >
                    <Icon name="location" type="evilicon" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ReactNativeZoomableView>
        <View style={{ flex: 0.25, borderWidth: 1 }}>
          {/**Bottom Navigation Pannel */}
          <Text style={globalStyles.headerText}>Level 3</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              borderWidth: 1,
            }}
          >
            {/**Map Down */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Map Level 2")}
            >
              <Icon name="arrow-left" type="evilicon" />
              <Text style={globalStyles.bodyText}>Level 2</Text>
            </TouchableOpacity>
            {/**Reset View */}
            <TouchableOpacity onPress={() => updateView()}>
              <Icon name="refresh" type="evilicon" />
              <Text style={globalStyles.bodyText}>Reset Zoom</Text>
            </TouchableOpacity>
            {/**Map Up */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Map Level 1")}
            >
              <Icon name="arrow-right" type="evilicon" />
              <Text style={globalStyles.bodyText}>Level 1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  image: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
