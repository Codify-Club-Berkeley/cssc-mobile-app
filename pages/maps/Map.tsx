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
import NavBar from "../../components/maps/NavBar";
import { Studio1Carousel } from "../../components/carousel/data";
import { globalStyles } from "../../GlobalStyles";

import {
  swapExhibit,
  changeModalVisible,
  moveView,
  updateView,
  handleLocationPress,
  nav,
} from "../../functions/map-functions";
import { map1ModalViewData } from "./modalData";

export default function MapObject({ navigation }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  //This creates an object that you can use to modify the view
  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  //array containing visibility state of modals
  const [modalVisible, setModalVisible] = useState([false, false, false]);

  return (
    <View style={styles.container}>
      <View style={globalStyles.mapView}>
        <ReactNativeZoomableView
          ref={zoomableViewRef}
          bindToBorders={true}
          panBoundaryPadding={200}
          maxZoom={10}
          contentWidth={100}
          contentHeight={300}
          style={{ borderWidth: 0 }}
        >
          <View style={{ flex: 1, borderWidth: 0, width: DEVICE_WIDTH }}>
            <ImageBackground
              style={styles.image}
              source={require("../../assets/maps/chabotUpdatedMap1.png")}
            >
              <View style={{ flex: 1 }}>
                <View style={{ top: 200, right: 0 }}>
                  {/**Modals Section */}
                  {/** 
                  
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
                      handleNav={() =>
                        nav(
                          navigation,
                          setModalVisible,
                          modalVisible,
                          "Studio1",
                          0
                        )
                      }
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
                      handleNav={() =>
                        nav(
                          navigation,
                          setModalVisible,
                          modalVisible,
                          "Studio2",
                          1
                        )
                      }
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
                      handleNav={() =>
                        nav(
                          navigation,
                          setModalVisible,
                          modalVisible,
                          "Studio3",
                          2
                        )
                      }
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
                    </Modal>*/}
                  <>
                    {map1ModalViewData.map(
                      ({ Index, Name, NavLocation, Description, carousel }) => (
                        <Modal
                          visible={modalVisible[Index]}
                          transparent={true}
                          animationType="slide"
                          style={{ top: 0, right: 0 }}
                        >
                          <MapDisplay
                            handlePress={() =>
                              changeModalVisible(
                                setModalVisible,
                                modalVisible,
                                Index
                              )
                            }
                            handleNav={() =>
                              nav(
                                navigation,
                                setModalVisible,
                                modalVisible,
                                NavLocation,
                                Index
                              )
                            }
                            handleNext={() =>
                              swapExhibit(
                                setModalVisible,
                                modalVisible,
                                Index,
                                (Index + 1) % 3
                              )
                            }
                            handlePrevious={() =>
                              swapExhibit(
                                setModalVisible,
                                modalVisible,
                                Index,
                                (Index - 1) % 3
                              )
                            }
                            descriptionText={Description}
                            exhibitName={Name}
                            carouselData={carousel}
                          />
                        </Modal>
                      )
                    )}
                  </>
                </View>
                {/**Studio 1 */}

                {/**Map indicator locations */}
                <>
                  {map1ModalViewData.map(({ positionData, Index }) => (
                    <View
                      style={{
                        top: positionData.yPos,
                        left: positionData.xPos,
                        width: 25,
                      }}
                    >
                      <Icon
                        onPress={() => {
                          handleLocationPress(
                            zoomableViewRef,
                            setModalVisible,
                            modalVisible,
                            Index,
                            3,
                            340,
                            470
                          );
                        }}
                        name="location"
                        type="evilicon"
                        size={20}
                      />
                    </View>
                  ))}
                </>
              </View>
            </ImageBackground>
          </View>
        </ReactNativeZoomableView>

        <NavBar
          nav={navigation}
          leftNav={"Map Level 3"}
          rightNav={"Map Level 2"}
          ref={zoomableViewRef}
          iconSize={40}
        ></NavBar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
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
