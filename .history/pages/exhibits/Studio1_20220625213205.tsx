import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import { globalStyles } from "../../GlobalStyles";

export default function Studio1() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width: DEVICE_WIDTH - 40,
          borderWidth: 1,
          backgroundColor: "white",
          flexGrow: 1,
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
            }}
          >
            <Text style={[globalStyles.titleText, globalStyles.tealText]}>
              Studio1
            </Text>

            {/**At some point this will an image carousel */}
            <Image
              style={{
                width: DEVICE_WIDTH - 80,
                height: 100,
                resizeMode: "contain",
              }}
              source={require("../../assets/images/studio1astrobees.jpg")}
            />
          </View>
          <View
            style={{ flex: 1, padding: 20, borderWidth: 1, borderRadius: 10 }}
          >
            <View>
              <Text style={globalStyles.headerText}>NASA's Viper Rover</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                borderWidth: 1,
                alignSelf: "flex-start",
                borderRadius: 10,
              }}
            >
              <View style={{ borderWidth: 1 }}>
                <Image
                  style={{
                    width: 100,
                    height: 60,
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/images/VIPER_lunar_rover.jpg")}
                />
              </View>
              <Text style={globalStyles.bodyText}>
                See a full-scale model of NASA’s Artemis rover, the Volatiles
                Investigating Polar Exploration Rover, or VIPER. This towering
                8-foot replica has never been seen by the public! Launching next
                year, this rover is heading to the Moon to answer big questions
                about lunar water and how it can be used for future human space
                exploration.
              </Text>
            </View>
          </View>
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
    borderWidth: 1,
  },
});
