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
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export default function MapObject({ navigation }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  //This creates an object that you can use to modify the view
  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  //array containing visibility state of modals
  //ONCHANGE the number of falses is the number of modals
  const [modalVisible, setModalVisible] = useState([
    false,
    false,
    false,
    false,
  ]);

  return (
    <View style={styles.container}>
      <View style={globalStyles.mapView}>
        <ReactNativeZoomableView
          ref={zoomableViewRef}
          bindToBorders={true}
          panBoundaryPadding={200}
          maxZoom={10}
          minZoom={0.5}
          contentWidth={100}
          contentHeight={300}
          style={{ borderWidth: 0 }}
        >
          <View style={{ flex: 1, borderWidth: 0, width: DEVICE_WIDTH }}>
            <ImageBackground
              style={globalStyles.mapBackgroundImage}
              source={require("../../assets/maps/chabotUpdatedMap1.png")}
            >
              <View style={{ flex: 1 }}>
                <View style={{ top: 200, right: 0 }}>
                  {/**Modals Section */}

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
                            //ONCHANGE, the index % 4 is for four modal displays on the page
                            handleNext={() =>
                              swapExhibit(
                                setModalVisible,
                                modalVisible,
                                Index,
                                (Index + 1) % 4
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
                            positionData.xPos,
                            positionData.yPos + DEVICE_HEIGHT / 3
                          );
                        }}
                        name="location"
                        type="evilicon"
                        size={30}
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
});
