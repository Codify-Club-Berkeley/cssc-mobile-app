import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { data3, data2 } from "../components/carousel/data";
import CarouselCards from "../components/carousel/Carousel";

export default function Home2() {
  let [fontsLoaded] = useFonts({
    Futura: require("../assets/fonts/Futura.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
