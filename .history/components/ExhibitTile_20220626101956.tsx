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

export default function ExhibitTile(props) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return (
    <View style={{ flex: 1, padding: 10 }}>
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
        <Text style={globalStyles.headerText}>{props.titleText}</Text>
        <Image
          style={{
            width: DEVICE_WIDTH - 120,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
            padding: 5,
          }}
          source={props.imageSource}
        />

        <Text style={globalStyles.bodyText}>{props.bodyText}</Text>
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
