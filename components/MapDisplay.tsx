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
import { Studio1Carousel } from "./carousel/data";
import { Icon } from "react-native-elements";

export default function MapDisplay(props: {
  carouselData: any;
  exhibitName: string;
  descriptionText: string;
  handlePress: () => void;
  handleNav: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
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
   *
   * Make it such that when the modal opens, the map behind it zooms to the appropriate part of the map it is representing
   *
   */

  return (
    <View
      style={{
        top: DEVICE_HEIGHT / 2,
        left: 0,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * (1 / 2),
        borderWidth: 12,
        borderRadius: 10,
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

          <Text style={globalStyles.headerText}>{props.exhibitName}</Text>

          <TouchableOpacity
            onPress={() => {
              props.handlePress();
            }}
          >
            <Icon name="close-o" type="evilicon" size={30} />
          </TouchableOpacity>
        </View>
        <CarouselCards imageList={props.carouselData} />
        <View style={{ padding: 8 }}>
          <Text style={globalStyles.bodyText}>{props.descriptionText}</Text>
        </View>
      </ScrollView>
      {/**Controls */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.handlePrevious();
          }}
        >
          <Icon name="arrow-left" type="evilicon" size={40} />
          <Text style={globalStyles.bodyText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.handleNav();
          }}
        >
          <Icon name="play" type="evilicon" size={40} />
          <Text style={globalStyles.bodyText}>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.handleNext();
          }}
        >
          <Icon name="arrow-right" type="evilicon" size={40} />
          <Text style={globalStyles.bodyText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
