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
          width: DEVICE_WIDTH,
          borderWidth: 1,
          backgroundColor: "white",
        }}
      >
        <Text style={[globalStyles.titleText, globalStyles.tealText]}>
          Studio1 {DEVICE_WIDTH}
        </Text>
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
