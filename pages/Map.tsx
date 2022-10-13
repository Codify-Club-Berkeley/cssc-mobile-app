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

export default function MapObject({ navigation }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  //This creates an object that you can use to modify the view
  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  //Resets view to Zoomlevel and moves the view to xpos, ypos
  function updateView(zoomLevel: number, xPos: number, yPos: number) {
    
    zoomableViewRef.current!.zoomTo(zoomLevel);
    moveView(xPos, yPos);
    //don't mess with these functions, it works and it's not worth it
  }


  //Go to xPos, yPos with timeouts so that it will work
  function moveView(xPos: number, yPos: number) {
    //updateView(1, 154, 193) to reset
    
    //setTimeout allows the moveBy to finish before we start the moveTo
    setTimeout(() => {
      zoomableViewRef.current!.moveBy(1, 1); //don't ask why this is needed, but it is
    }, 500);
    

    setTimeout(() => {
      zoomableViewRef.current!.moveTo(xPos, yPos);
    }, 550);
  }


  //For navigating to a new page from the map
  function handleNav(location: string, clearModal: number) {
    
    //closes modal after navigation
    setModalVisible((modalVisible) => ({
      ...modalVisible,
      [clearModal]: !modalVisible[clearModal],
    }));


    navigation.navigate(location);
    //sublocation: string navigation.navigate(sublocation);
  }

  //This should, zoom to the spot on the map of the visible modal
  //1. Go to correct spot on click from map
  //2. Go to correct spot on nav from another modal
  function handleLocationPress(
    modalNumber: number,
    zoomLevel: number,
    xPos: number,
    yPos: number
  ) {
    

    zoomableViewRef.current!.zoomTo(zoomLevel);
    
    
    moveView(xPos, yPos);

    //close a modal
    setTimeout(() => {
      setModalVisible((modalVisible) => ({
        ...modalVisible,
        [modalNumber]: !modalVisible[modalNumber],
      }));
    }, 600);
  }

  //Close one modal and open another
  //Eventually should also call handleLocationPress to update zoom to new modal zoom
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

  //state array that stores which modals are visisble, should be a max of one at a time
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
              source={require("../assets/maps/chabotUpdatedMap1.png")}
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
                        setModalVisible((modalVisible) => ({
                          ...modalVisible,
                          [0]: !modalVisible[0],
                        }))
                      }
                      handleNav={() => handleNav("cafe", 0)}
                      handleNext={() => swapExhibit(0, 1)}
                      handlePrevious={() => swapExhibit(0, 2)}
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      exhibitName={"Studio 1"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                  {/**Studio 1 */}
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
                      handleNav={() => handleNav("Home2", 1)}
                      handleNext={() => swapExhibit(2, 0)}
                      handlePrevious={() => swapExhibit(2, 1)}
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      exhibitName={"Studio 2"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                  {/**Studio 1 */}
                  <Modal
                    visible={modalVisible[2]}
                    transparent={true}
                    animationType="slide"
                    style={{ top: 0, right: 0 }}
                  >
                    <MapDisplay
                      handlePress={() =>
                        setModalVisible((modalVisible) => ({
                          ...modalVisible,
                          [2]: !modalVisible[2],
                        }))
                      }
                      handleNav={() => handleNav("Nav", 2)}
                      descriptionText={
                        "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists."
                      }
                      handleNext={() => swapExhibit(2, 0)}
                      handlePrevious={() => swapExhibit(2, 1)}
                      exhibitName={"Touch The Sun"}
                      carouselData={Studio1Carousel}
                    />
                  </Modal>
                </View>
                {/**Studio 1 */}

                {/**Map indicator locations */}
                <View style={{ top: 190, left: 165, width: 25 }}>
                  <TouchableOpacity
                    onPress={() => {
                      handleLocationPress(0, 3, 340, 370);
                    }}
                  >
                    <Icon name="location" type="evilicon" size={20} />
                  </TouchableOpacity>
                </View>

                <View style={{ top: 300, left: 50, width: 25 }}>
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
                <View style={{ top: 200, left: 50, width: 25 }}>
                  <TouchableOpacity
                    onPress={() =>
                      setModalVisible((modalVisible) => ({
                        ...modalVisible,
                        [2]: !modalVisible[2],
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
            <TouchableOpacity onPress={() => updateView(1, 154, 193)}>
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
