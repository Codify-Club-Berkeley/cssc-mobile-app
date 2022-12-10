import { SafeAreaView, TouchableOpacity, Text } from "react-native";

import React from "react";
import { WebView } from "react-native-webview";

export default function Calendar() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://chabotspace.org/events/calendar-view/",
        }}
      />
    </SafeAreaView>
  );
}
