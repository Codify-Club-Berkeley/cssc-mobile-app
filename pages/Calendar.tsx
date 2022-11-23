import {
  SafeAreaView,
} from "react-native";

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://chabotspace.org/calendar/category/planetarium/2022-11-16/' }} 
        />
      </SafeAreaView>
    );
  }
}
export default MyWeb;