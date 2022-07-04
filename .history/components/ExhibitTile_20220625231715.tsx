import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Linking,
} from "react-native";

import { globalStyles } from "../GlobalStyles";

export default function ExhibitTile() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;
  return (
    <View style={{ flex: 1, padding: 10, borderWidth: 1, borderRadius: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          borderWidth: 10,
          borderColor: "#27beb6",
          alignSelf: "flex-start",
          borderRadius: 10,
          padding: 8,
        }}
      >
        <Text style={globalStyles.headerText}>NASA's Viper Rover</Text>
        <Image
          style={{
            width: DEVICE_WIDTH - 120,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
            padding: 5,
          }}
          source={require("../assets/images/VIPER_lunar_rover.jpg")}
        />

        <Text style={globalStyles.bodyText}>
          See a full-scale model of NASA’s Artemis rover, the Volatiles
          Investigating Polar Exploration Rover, or VIPER. This towering 8-foot
          replica has never been seen by the public! Launching next year, this
          rover is heading to the Moon to answer big questions about lunar water
          and how it can be used for future human space exploration.
        </Text>
        <Text
          style={globalStyles.linkText}
          onPress={() => Linking.openURL("https://www.nasa.gov/viper")}
        >
          {" "}
          Click to learn more!
        </Text>
      </View>
    </View>
  );
}
