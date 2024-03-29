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

export default function MapObject({ navigation }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  function resetZoom() {
    zoomableViewRef.current!.zoomTo(2);
    zoomableViewRef.current!.moveTo(300, 350);
  }

  function handleNav(location: any) {
    //setModalVisible(!modalVisible);
    navigation.navigate(location);
  }

  const [modalVisible, setModalVisible] = useState([false, false]);

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
              source={require("../assets/maps/chabotUpdatedMap1.png")}
            >
              <View style={{ flex: 1 }}>
                <View style={{ top: 200, right: 0 }}>
                  <Modal
                    visible={modalVisible[0]}
                    transparent={true}
                    animationType="slide"
                    style={{ top: 0, right: 0 }}
                  >
                    <MapDisplay
                      handlePress={() =>
                        setModalVisible((modalVisible) => ({
                          ...modalVisible,
                          [0]: !modalVisible[0],
                        }))
                      }
                      handleNav={() => handleNav("Home2")}
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      exhibitName={"Studio 1"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                  <Modal
                    visible={modalVisible[1]}
                    transparent={true}
                    animationType="slide"
                    style={{ top: 0, right: 0 }}
                  >
                    <MapDisplay
                      handlePress={() =>
                        setModalVisible((modalVisible) => ({
                          ...modalVisible,
                          [1]: !modalVisible[1],
                        }))
                      }
                      handleNav={() => handleNav("Home2")}
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      exhibitName={"Studio 2"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                </View>
                <View
                  style={{ top: 190, left: 165, borderWidth: 1, width: 25 }}
                >
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
                <View
                  style={{ top: 300, left: 100, borderWidth: 1, width: 25 }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      setModalVisible((modalVisible) => ({
                        ...modalVisible,
                        [1]: !modalVisible[1],
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
          <Text>Level 1</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              borderWidth: 1,
            }}
          >
            {/**Map Down */}
            <TouchableOpacity>
              <Icon name="location" type="evilicon" />
            </TouchableOpacity>
            {/**Reset View */}
            <TouchableOpacity
              onPress={() =>
                console.log(
                  DEVICE_WIDTH + " width, " + DEVICE_HEIGHT + " height\n"
                )
              }
            >
              <Icon name="location" type="evilicon" />
            </TouchableOpacity>
            {/**Map Up */}
            <TouchableOpacity onPress={() => resetZoom()}>
              <Icon name="location" type="evilicon" />
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
