import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { globalStyles } from "../../GlobalStyles";

export default function Studio1() {
  return (
    <ScrollView>
      <Text style={[globalStyles.titleText, globalStyles.tealText]}>
        Studio1
      </Text>
    </ScrollView>
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
