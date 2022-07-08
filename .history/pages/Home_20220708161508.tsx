import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import {
  Studio1Carousel,
  TouchTheSunCarousel,
} from "../components/carousel/data";
import CarouselCards from "../components/carousel/Carousel";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { Icon } from "react-native-elements";

import { globalStyles } from "../GlobalStyles";
import { Link } from "@react-navigation/native";

export default function Home() {
  let [fontsLoaded] = useFonts({
    Futura: require("../assets/fonts/Futura.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;
  //#1B2832 another Chabot Website Color
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#1B2832" }}>
          <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1.1, height: 100 },
            ]}
            source={require("../assets/images/logo-mobile.png")}
          />
        </View>

        <Text style={globalStyles.headerTextLeft}>Hours</Text>
        <Text style={globalStyles.bodyText}>
          Wednesday-Sunday 10 a.m.-5 p.m.{"\n"}
          Closed on Monday and Tuesday {"\n"}
          The museum is now closed{" "}
          {/**https://tecadmin.net/get-current-date-time-javascript/#:~:text=Getting%20the%20current%20date%20and,the%20built%2Din%20Date%20object.&text=This%20code%20will%20output%20the%20current%20date%20and%20time%20to%20the%20console. */}
        </Text>
        <Text style={globalStyles.headerText}>Connect With Chabot</Text>
        <View style={{ flexDirection: "row", alignItems: "space-between" }}>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync("https://twitter.com/ChabotSpace")
            }
          >
            <Icon name="sc-twitter" type="evilicon" color="#27beb6" size={60} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.facebook.com/ChabotSpace/"
              )
            }
          >
            <Icon name="sc-facebook" type="evilicon" size={60} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.instagram.com/chabotspace/"
              )
            }
          >
            <Icon
              name="sc-instagram"
              type="evilicon"
              color="#27beb6"
              size={60}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={[globalStyles.image, { width: DEVICE_WIDTH, height: 150 }]}
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
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
