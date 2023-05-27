import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import YoutubePlayer from "react-native-youtube-iframe";
import { globalStyles } from "../../GlobalStyles";
import Constants from "expo-constants";
import SelectList from "react-native-dropdown-select-list";

import DemoSection from "../../components/DemoSection";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function VacuumChamber() {
  return (
    <View>
        <View style={{ height: 130, padding: 0, backgroundColor: "#1B2832" }}>
        <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1, height: 55, marginTop: 55}, 
            ]}
            source={require("../../assets/images/logo-mobile.png")}
          />
          
        </View>

    <ScrollView>
      <Text>Vacuum Chamber</Text>
    </ScrollView>

    </View>
      
      );
}