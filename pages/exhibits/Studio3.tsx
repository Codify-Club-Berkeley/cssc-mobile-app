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

export default function Studio3() {
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
            titleText={"Play"}
            imageSource={require("../../assets/images/Exhibits/Studio3/play.jpeg")}
            bodyText={
              "Can your design stand up to a Marsquake? Build and test designs for other worlds with shaking tables, snapping circuits and other stations."
            }
          ></ExhibitTile>
          <ExhibitTile
            titleText={"Collaborate"}
            imageSource={require("../../assets/images/Exhibits/Studio3/Collaborate.jpeg")}
            bodyText={
              "Work together with your group, other visitors and even the Chabot team to create and provide feedback. Live feedback helps us improve each other’s designs and the exhibition itself!"
            }
          ></ExhibitTile>
          <ExhibitTile
            titleText={"Test"}
            imageSource={require("../../assets/images/Exhibits/Studio3/test.jpeg")}
            bodyText={
              "How high can your rocket fly? How fast can a train go? Ask questions and perform tests to prepare your creations for launch!"
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
