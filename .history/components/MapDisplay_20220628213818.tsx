import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

import { globalStyles } from "../GlobalStyles";
import CarouselCards from "./carousel/Carousel";
import { data } from "./carousel/data";

export default function MapDisplay(props: { handlePress: () => void }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  /**
   * Close in top right corner
   * Title
   * Carousel
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
        top: DEVICE_HEIGHT * 1.5,
        left: 0,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT / 1.5,
        borderWidth: 10,
        borderColor: "#00B1BB",
        backgroundColor: "white",
      }}
    >
      <Text style={globalStyles.headerText}>Information</Text>
      <CarouselCards imageList={data} />
      <TouchableOpacity
        onPress={() => {
          props.handlePress();
        }}
      >
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
}
