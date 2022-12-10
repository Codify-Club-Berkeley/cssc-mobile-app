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
import {
  Studio1Carousel,
  TouchTheSunCarousel,
} from "../../components/carousel/data";

export default function Studio2() {
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
            {/**At some point this will an image carousel */}
            <CarouselCards imageList={Studio1Carousel} />
            <Text style={globalStyles.bodyText}>
              Explore how humans are expanding our boundaries by moving farther
              into the Universe than ever before. With inspiration and content
              provided by NASA’s Ames Research Center, Caltech’s Jet Propulsion
              Laboratory, Planet, and SpaceX, the exhibit traces our journey
              through the cosmos, and where we are headed.
            </Text>
          </View>

          <ExhibitTile
            titleText={"Pilot a Rover from Mission Control"}
            imageSource={require("../../assets/images/Exhibits/Studio2/mission-control.jpeg")}
            bodyText={
              "Experience the sights and sounds of Chabot’s Mission Control, modeled after the Jet Propulsion Laboratory’s Mission Control. Step up to any station to be the next Flight Director! Pilot a rover across our very own Chaos Terrain, a Mars-like surface scattered with knobs and cones of rocks! and build rovers, planes and space robots for exploration. Then, test them in extraordinary environments like those at NASA’s Ames Research Center. These challenges spark curiosity around the scientific process of engineering!"
            }
          ></ExhibitTile>
          <ExhibitTile
            titleText={"Get Up Close to Spacecraft"}
            imageSource={require("../../assets/images/Exhibits/Studio2/spacecraft.jpeg")}
            bodyText={
              "See out-of-this world objects, from the space program workhorse, an authentic 7K-OK Russian Soyuz Descent Module, to a Dove Cube Satellite Model, an example of the next generation of Nano satellites used to gather Earth imagery from space."
            }
          ></ExhibitTile>
          <ExhibitTile
            titleText={"Learn How Scientist's Career's Took Flight"}
            imageSource={require("../../assets/images/Exhibits/Studio2/careers.jpeg")}
            bodyText={
              "Imagine what your career will be in space —a rover pilot? A martian geologist?  A space suit designer? Learn about intriguing new jobs for the next generation of space exploration."
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
