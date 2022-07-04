import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import { globalStyles, DEVICE_HEIGHT, DEVICE_WIDTH } from "../../GlobalStyles";

export default function Studio1() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width: DEVICE_WIDTH - 40,
          borderWidth: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={[globalStyles.titleText, globalStyles.tealText]}>
              Studio1
            </Text>

            {/**At some point this will an image carousel */}
            <Image
              style={{
                width: DEVICE_WIDTH - 80,
                height: 100,
                resizeMode: "contain",
              }}
              source={require("../../assets/images/studio1astrobees.jpg")}
            />
          </View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27beb6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
  },
});
