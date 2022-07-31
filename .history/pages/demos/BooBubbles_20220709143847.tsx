import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import YoutubePlayer from "react-native-youtube-iframe";

export default function BooBubbles() {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "Futura", color: "#00B1BB", fontWeight: "600" }}
      >
        boo boo
      </Text>
      <Text>HOME </Text>
      <YoutubePlayer height={300} videoId={"iee2TATGMyI"} />
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
