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

import MapDisplay from "../../components/MapDisplay";
import { Studio1Carousel } from "../../components/carousel/data";
import { globalStyles } from "../../GlobalStyles";

import {
  swapExhibit,
  changeModalVisible,
  moveView,
  updateView,
} from "../../functions/map-functions";

export default function MapObject({ navigation }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  //This creates an object that you can use to modify the view
  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  //array containing visibility state of modals
  const [modalVisible, setModalVisible] = useState([false, false, false]);

  //This should, zoom to the spot on the map of the visible modal
  //1. Go to correct spot on click from map
  //2. Go to correct spot on nav from another modal

  //Closes existing modal and navigates to specific page in the NavigationPageNavigator
  function nav(location: String, clearModal: number, nested = true) {
    changeModalVisible(setModalVisible, modalVisible, clearModal);
    if (nested) {
      navigation.navigate("Nav", { screen: location });
    }

    setTimeout(() => {}, 600);
  }

  //This function currently only works for presses from the state where all modals are closed
  //Moves to xPos, yPos, sets zoom to zoomLevel, and opens modalNumber
  function handleLocationPress(
    modalNumber: number,
    zoomLevel: number,
    xPos: number,
    yPos: number
  ) {
    zoomableViewRef.current!.zoomTo(zoomLevel);

    moveView(xPos, yPos, 500, zoomableViewRef);

    //close a modal
    setTimeout(() => {
      changeModalVisible(setModalVisible, modalVisible, modalNumber);
    }, 600);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 1,
          flexShrink: 1,
          height: DEVICE_HEIGHT,
          width: DEVICE_WIDTH,
        }}
      >
        <ReactNativeZoomableView
          ref={zoomableViewRef}
          bindToBorders={true}
          panBoundaryPadding={200}
          maxZoom={10}
          contentWidth={100}
          contentHeight={300}
          style={{ borderWidth: 1 }}
        >
          <View style={{ flex: 1, borderWidth: 1, width: DEVICE_WIDTH }}>
            <ImageBackground
              style={styles.image}
              source={require("../../assets/maps/chabotUpdatedMap1.png")}
            >
              <View style={{ flex: 1 }}>
                <View style={{ top: 200, right: 0 }}>
                  {/**Modals Section */}

                  {/**Studio 1 */}
                  <Modal
                    visible={modalVisible[0]}
                    transparent={true}
                    animationType="slide"
                    style={{ top: 0, right: 0 }}
                  >
                    <MapDisplay
                      handlePress={() =>
                        changeModalVisible(setModalVisible, modalVisible, 0)
                      }
                      handleNav={() => nav("Studio1", 0)}
                      handleNext={() =>
                        swapExhibit(setModalVisible, modalVisible, 0, 1)
                      }
                      handlePrevious={() =>
                        swapExhibit(setModalVisible, modalVisible, 0, 2)
                      }
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      exhibitName={"Studio 1"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                  {/**Studio 2 */}
                  <Modal
                    visible={modalVisible[1]}
                    transparent={true}
                    animationType="slide"
                    style={{ top: 0, right: 0 }}
                  >
                    <MapDisplay
                      handlePress={() =>
                        changeModalVisible(setModalVisible, modalVisible, 1)
                      }
                      handleNav={() => nav("Studio2", 1)}
                      handleNext={() =>
                        swapExhibit(setModalVisible, modalVisible, 1, 2)
                      }
                      handlePrevious={() =>
                        swapExhibit(setModalVisible, modalVisible, 1, 0)
                      }
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      exhibitName={"Studio 2"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                  {/**Studio 3 */}
                  <Modal
                    visible={modalVisible[2]}
                    transparent={true}
                    animationType="slide"
                    style={{ top: 0, right: 0 }}
                  >
                    <MapDisplay
                      handlePress={() =>
                        changeModalVisible(setModalVisible, modalVisible, 2)
                      }
                      handleNav={() => nav("Studio3", 2)}
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      handleNext={() =>
                        swapExhibit(setModalVisible, modalVisible, 2, 0)
                      }
                      handlePrevious={() =>
                        swapExhibit(setModalVisible, modalVisible, 2, 1)
                      }
                      exhibitName={"Studio3"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                </View>
                {/**Studio 1 */}

                {/**Map indicator locations */}

                <View style={{ top: 100, left: 50, width: 25 }}>
                  <TouchableOpacity
                    onPress={() => {
                      handleLocationPress(0, 3, 340, 470);
                    }}
                  >
                    <Icon name="location" type="evilicon" size={20} />
                  </TouchableOpacity>
                </View>

                <View style={{ top: 300, left: 50, width: 25 }}>
                  <TouchableOpacity
                    onPress={() => handleLocationPress(1, 3, 340, 270)}
                  >
                    <Icon name="location" type="evilicon" size={20} />
                  </TouchableOpacity>
                </View>

                <View style={{ top: 200, left: 50, width: 25 }}>
                  <TouchableOpacity
                    onPress={() => handleLocationPress(2, 3, 340, 70)}
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
          <Text style={globalStyles.headerText}>Level 1</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              borderWidth: 1,
            }}
          >
            {/**Map Down */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Map Level 3")}
            >
              <Icon name="arrow-left" type="evilicon" />
              <Text style={globalStyles.bodyText}>Level 3</Text>
            </TouchableOpacity>
            {/**Reset View */}
            <TouchableOpacity
              onPress={() => updateView(1, 154, 193, zoomableViewRef)}
            >
              <Icon name="refresh" type="evilicon" />
              <Text style={globalStyles.bodyText}>Reset Zoom</Text>
            </TouchableOpacity>
            {/**Map Up */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Map Level 2")}
            >
              <Icon name="arrow-right" type="evilicon" />
              <Text style={globalStyles.bodyText}>Level 2</Text>
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
