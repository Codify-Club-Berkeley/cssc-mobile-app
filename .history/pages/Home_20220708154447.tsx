import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import {
  Studio1Carousel,
  TouchTheSunCarousel,
} from "../components/carousel/data";
import CarouselCards from "../components/carousel/Carousel";

import { globalStyles } from "../GlobalStyles";

export default function Home() {
  let [fontsLoaded] = useFonts({
    Futura: require("../assets/fonts/Futura.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{ fontFamily: "Futura", color: "#00B1BB", fontWeight: "600" }}
        >
          HOME home
        </Text>
        <Image
          style={[globalStyles.image, { width: DEVICE_WIDTH, height: 100 }]}
          source={require("../assets/images/trees.png")}
        />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
