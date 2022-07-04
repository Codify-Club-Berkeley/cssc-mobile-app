import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

import CarouselCards from "../components/carousel/Carousel";

export default function Home() {
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
        HOME home
      </Text>
      <Text>HOME hi</Text>
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          height: 300,
          borderWidth: 1,
        }}
      >
        <CarouselCards />
      </SafeAreaView>
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
