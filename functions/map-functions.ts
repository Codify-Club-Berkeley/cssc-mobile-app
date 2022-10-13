import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import { createRef, useState } from "react";

const zoomableViewRef = createRef<ReactNativeZoomableView>();
/*
const modalViewData: {
  "Studio 1": {
    "Nav Location": "Home2";
    Description: "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists.";
    "Exhibit Title": "Studio 1";
  };
};
*/

export function swapExhibit(
  setModalVisible: Function,
  modalVisible: Array<boolean>,
  currentModal: number,
  newModal: number
) {
  setModalVisible((modalVisible: any[]) => ({
    ...modalVisible,
    [currentModal]: !modalVisible[currentModal],
  }));
  setModalVisible((modalVisible: any[]) => ({
    ...modalVisible,
    [newModal]: !modalVisible[newModal],
  }));
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
export function moveView(xPos: number, yPos: number, time = 500) {
  setTimeout(() => {
    zoomableViewRef.current!.moveBy(1, 1); //don't ask why this is needed, but it is
  }, time);
  setTimeout(() => {
    zoomableViewRef.current!.moveTo(xPos, yPos);
  }, time + 50);
}

export function updateView(zoomLevel = 1, xPos = 154, yPos = 193) {
  //updateView(1, 154, 193) to reset
  zoomableViewRef.current!.zoomTo(zoomLevel);
  moveView(xPos, yPos);
  //don't mess with these functions, it works and it's not worth it
}
