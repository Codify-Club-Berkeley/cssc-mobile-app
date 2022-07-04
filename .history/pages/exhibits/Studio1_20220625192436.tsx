import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { globalStyles, DEVICE_HEIGHT, DEVICE_WIDTH } from "../../GlobalStyles";

export default function Studio1() {
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <Text style={[globalStyles.titleText, globalStyles.tealText]}>
          Studio1
        </Text>
        <Image
          style={{ width: DEVICE_WIDTH }}
          source={require("./studio1astrobees.jpg")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderWidth: 1,
  },
});
