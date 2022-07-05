import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";

import { globalStyles } from "../GlobalStyles";
import CarouselCards from "./carousel/Carousel";
import { data } from "./carousel/data";
import { Icon } from "react-native-elements";

export default function MapDisplay(props: {
  handlePress: () => void;
  handleNav: () => void;
}) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  /**
   * Close in top right corner x
   * Title x
   * Carousel x
   * Brief Description
   * Controls:
   * Next on floor
   * Go to this page
   * Previous on floor
   *
   */

  return (
    <View
      style={{
        top: DEVICE_HEIGHT,
        left: 0,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * (2 / 3),
        borderWidth: 10,
        borderColor: "#00B1BB",
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ opacity: 0.0 }}>
            <TouchableOpacity
              onPress={() => {
                props.handlePress();
              }}
            >
              <Icon name="close-o" type="evilicon" />
            </TouchableOpacity>
          </View>

          <Text style={globalStyles.headerText}>Information</Text>

          <TouchableOpacity
            onPress={() => {
              props.handlePress();
            }}
          >
            <Icon name="close-o" type="evilicon" />
          </TouchableOpacity>
        </View>
        <CarouselCards imageList={data} />
        <View style={{ padding: 8, borderWidth: 1 }}>
          <Text style={globalStyles.bodyText}>
            Description this is lots and lots of text. If you think it is cool,
            go here! Description this is lots and lots of text. If you think it
            is cool, go here! Description this is lots and lots of text. If you
            think it is cool, go here! Description this is lots and lots of
            text. If you think it is cool, go here!
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.handlePress();
            }}
          >
            <Icon name="arrow-left" type="evilicon" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.handleNav();
            }}
          >
            <Icon name="play" type="evilicon" size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.handleNav();
            }}
          >
            <Icon name="arrow-right" type="evilicon" size={40} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
