import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Linking,
} from "react-native";

import { globalStyles } from "../../GlobalStyles";

import ExhibitTile from "../../components/ExhibitTile";

import CarouselCards from "../../components/carousel/Carousel";
import { data, data2 } from "../../components/carousel/data";

export default function Studio1() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width: DEVICE_WIDTH - 40,
          backgroundColor: "white",
          flexGrow: 1,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text style={[globalStyles.titleText, globalStyles.tealText]}>
              Studio1
            </Text>

            {/**At some point this will an image carousel */}
            <CarouselCards imageList = {data}>
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                borderWidth: 10,
                borderColor: "#27beb6",
                alignSelf: "flex-start",
                borderRadius: 10,
                padding: 8,
              }}
            >
              <Text style={globalStyles.headerText}>NASA's Viper Rover</Text>
              <Image
                style={{
                  width: DEVICE_WIDTH - 120,
                  height: 100,
                  resizeMode: "contain",
                  alignSelf: "center",
                  padding: 5,
                }}
                source={require("../../assets/images/VIPER_lunar_rover.jpg")}
              />

              <Text style={globalStyles.bodyText}>
                See a full-scale model of NASA’s Artemis rover, the Volatiles
                Investigating Polar Exploration Rover, or VIPER. This towering
                8-foot replica has never been seen by the public! Launching next
                year, this rover is heading to the Moon to answer big questions
                about lunar water and how it can be used for future human space
                exploration.
              </Text>
              <Text
                style={globalStyles.linkText}
                onPress={() => Linking.openURL("https://www.nasa.gov/viper")}
              >
                {" "}
                Click to learn more!
              </Text>
            </View>
          </View>
          <ExhibitTile
            titleText={"Embark on Hands on Challenges"}
            imageSource={require("../../assets/images/roversParking.jpg")}
            bodyText={
              "Design and build rovers, planes and space robots for exploration. Then, test them in extraordinary environments like those at NASA’s Ames Research Center. These challenges spark curiosity around the scientific process of engineering!"
            }
            linkText={"hi"}
            linkUrl={
              "https://chabotspace.org/visit/exhibits/the-nasa-experience/"
            }
          ></ExhibitTile>
        </View>
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
  },
});
