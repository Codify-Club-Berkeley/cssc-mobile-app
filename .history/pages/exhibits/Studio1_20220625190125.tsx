import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { globalStyles } from "../../GlobalStyles";

export default function Studio1() {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.titleText, globalStyles.tealText]}>
        Studio1
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
