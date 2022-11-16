import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import { createRef, useState } from "react";

//const zoomableViewRef = createRef<ReactNativeZoomableView>();

//Close one modal and open another
//Eventually should also call handleLocationPress to update zoom to new modal zoom
export function swapExhibit(
  setModalVisible: Function,
  modalVisible: Array<boolean>,
  currentModal: number,
  newModal: number
) {
  changeModalVisible(setModalVisible, modalVisible, currentModal);
  changeModalVisible(setModalVisible, modalVisible, newModal);
}

//Sets the modalNumber modal to be the opposite of its current visiblitiy
export function changeModalVisible(
  setModalVisible: Function,
  modalVisible: Array<boolean>,
  modalNumber: number
) {
  setModalVisible((modalVisible: any[]) => ({
    ...modalVisible,
    [modalNumber]: !modalVisible[modalNumber],
  }));
}
//May this function remain forever commented. It does not work.
//The user is just going to have to sit through a one second animation. Too bad.
/*
export function testFunc(zoomLevel = 1, xPos = 154, yPos = 193, ref: any) {
  //await ref.current!.moveTo(xPos, yPos);
  //await ref.current!.zoomTo(zoomLevel);
  //|| ref.current!.offsetX != xPos || ref.current!.offsetY != yPos
  while (ref.current!.zoomLevel != zoomLevel) {
    if (ref.current!.zoomLevel > zoomLevel) {
      setTimeout(() => {
        ref.current!.zoomBy(-0.01);
      }, 5);
    } else {
      setTimeout(() => {
        ref.current!.zoomBy(0.01);
      }, 5);
    }
  }

  //console.log(ref.current!.zoomLevel);
}
*/

//Go to xPos, yPos with timeouts so that it will work
export function moveView(xPos: number, yPos: number, time = 500, ref: any) {
  setTimeout(() => {
    ref.current!.moveBy(1, 1); //don't ask why this is needed, but it is
  }, time);
  setTimeout(() => {
    ref.current!.moveTo(xPos, yPos);
  }, time + 50);
}

//Resets view to Zoomlevel and moves the view to xpos, ypos
export function updateView(zoomLevel = 1, xPos = 154, yPos = 193, ref: any) {
  //updateView(1, 154, 193) to reset
  ref.current!.zoomTo(zoomLevel);
  moveView(xPos, yPos, 1000, ref);
  //don't mess with these functions, it works and it's not worth it
}

//This function currently only works for presses from the state where all modals are closed
//Moves to xPos, yPos, sets zoom to zoomLevel, and opens modalNumber
export function handleLocationPress(
  ref: any,
  setModalVisible: Function,
  modalVisible: Array<boolean>,
  modalNumber: number,
  zoomLevel: number,
  xPos: number,
  yPos: number
) {
  ref.current!.zoomTo(zoomLevel);

  moveView(xPos, yPos, 500, ref);

  //close a modal
  setTimeout(() => {
    changeModalVisible(setModalVisible, modalVisible, modalNumber);
  }, 600);
}

//This should, zoom to the spot on the map of the visible modal
//1. Go to correct spot on click from map
//2. Go to correct spot on nav from another modal

//Closes existing modal and navigates to specific page in the NavigationPageNavigator
export function nav(
  nav: any,
  setModalVisible: Function,
  modalVisible: Array<boolean>,
  location: String,
  clearModal: number,
  nested = true
) {
  changeModalVisible(setModalVisible, modalVisible, clearModal);
  if (nested) {
    nav.navigate("Nav", { screen: location });
  }

  setTimeout(() => {}, 600);
}
