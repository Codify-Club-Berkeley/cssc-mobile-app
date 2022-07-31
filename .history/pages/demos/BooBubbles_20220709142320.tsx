import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

export default function BooBubbles() {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "Futura", color: "#00B1BB", fontWeight: "600" }}
      >
        Home 2 Home 2
      </Text>
      <Text>HOME </Text>

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
