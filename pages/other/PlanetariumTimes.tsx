import { SafeAreaView, TouchableOpacity, Text } from "react-native";

import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default function PlanetariumTimes() {
  //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  //2022-11-04
  let day = yyyy + "-" + mm + "-" + dd;
  let link =
    "https://chabotspace.org/calendar/category/planetarium/" + day + "/";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: link,
        }}
      />
    </SafeAreaView>
  );
}
