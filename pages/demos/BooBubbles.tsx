import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import YoutubePlayer from "react-native-youtube-iframe";
import { globalStyles } from "../../GlobalStyles";
import Constants from "expo-constants";
import SelectList from "react-native-dropdown-select-list";
import Cladistics from "./Cladistics";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function BooBubbles() {
  const [myOpacity, setMyOpacity] = useState(100);

  const [selected, setSelected] = React.useState("5");
  const data = [
    { key: "1", value: "Overview" },
    { key: "2", value: "Experiment" },
    { key: "3", value: "What's going on?" },
    { key: "4", value: "Video" },
  ];

  const cardData = [
    {
      front: {
        text: "Hi",
      },
      back: {
        text: "hihi",
      },
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/**<View style={styles.dropDown}>
          <SelectList data={data} SelectList={setSelected} />
        </View> */}

        <TouchableOpacity onPress={() => setMyOpacity(100 - myOpacity)}>
          {/**Overlay Image View */}
          <View
            style={[
              {
                width: DEVICE_WIDTH,
                height: 265,
                alignSelf: "center",
                backgroundColor: "black",
                opacity: myOpacity,
              },
            ]}
          >
            <Image
              style={[globalStyles.image, styles.card]}
              source={require("../../assets/images/Demos/Boo Bubbles/booBubble.jpeg")}
            />
            <Text
              style={[
                {
                  color: "white",
                  alignSelf: "center",
                  marginTop: -170,
                  fontSize: 30,
                  fontFamily: "Futura",
                },
              ]}
            >
              Experiment
            </Text>
          </View>

          {/**Underlay Image View */}
          <View
            style={[
              {
                width: DEVICE_WIDTH,
                height: 265,
                marginTop: -260,
                marginLeft: 10,
                opacity: 100 - myOpacity,
              },
            ]}
          >
            <Text
              style={{
                fontFamily: "Futura",
                color: "#00B1BB",
                fontWeight: "600",
                alignSelf: "flex-start",
                paddingLeft: 20,
              }}
            >
              Materials
            </Text>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Futura",
                  fontWeight: "600",
                  alignSelf: "flex-start",
                  padding: 20,
                  fontSize: 12,
                }}
              >
                Dry Ice, Warm Water, Dish Soap, Plastic Trey, Dry Ice Bubble
                Maker, Gloves, Goggles {"\n"}
              </Text>
            </View>

            <Text
              style={{
                fontFamily: "Futura",
                color: "#00B1BB",
                fontWeight: "600",
                alignSelf: "flex-start",
                paddingLeft: 20,
              }}
            >
              Proceedure
            </Text>
            <Text
              style={{
                fontFamily: "Futura",
                fontWeight: "600",
                alignSelf: "flex-start",
                paddingLeft: 20,
                fontSize: 12,
              }}
            >
              1. Fill trey with a thin layer of water and a few drops of dish
              soap {"\n"}
              2. Fill Bubble Maker half way with hot water {"\n"}
              3. Using Gloves and Goggles, carefully place a few pieces of dry
              ice into the bubble maker and close the lid {"\n"}
              4. Swish the end of the bubble maker in the trey of water to make
              a Boo Bubble! {"\n"}
              5. Place your hand in the soapy water of the trey to hold a boo
              bubble {"\n"}
              {"\n"}
            </Text>
          </View>
        </TouchableOpacity>

        {/**<Text
          style={{
            fontFamily: "Futura",
            color: "#00B1BB",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
          }}
        >
          What's Going on?
        </Text>
        <Text
          style={{
            fontFamily: "Futura",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
            fontSize: 12,
          }}
        >
          While blowing bubbles indoors, you might have noticed the occasional
          bubble that fell to the carpet but didn’t pop. Regular bubbles burst
          when they come in contact with just about anything. Why? A bubble’s
          worst enemies are oil and dirt. Boo Bubbles will bounce off of a
          surface if it is free of oil or dirt particles that would normally
          breakdown the soap film. That’s why you’re wearing knit gloves. What
          is dry ice? Does dry ice melt? In addition, Dry Ice doesn't melt - it
          sublimates. Sublimation is the process of going directly from a solid
          to a gas. Dry Ice by-passes the liquid form, giving it its name "Dry"
          Ice.
          {"\n"}
        </Text>

        <StatusBar style="auto" />

        <Text
          style={{
            fontFamily: "Futura",
            color: "#00B1BB",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
          }}
        >
          Materials
        </Text>
        <Text
          style={{
            fontFamily: "Futura",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
            fontSize: 12,
          }}
        >
          Dry Ice, Warm Water, Dish Soap, Plastic Trey, Dry Ice Bubble Maker,
          Gloves, Goggles {"\n"}
        </Text>
        <Text
          style={{
            fontFamily: "Futura",
            color: "#00B1BB",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
          }}
        >
          Proceedure
        </Text>
        <Text
          style={{
            fontFamily: "Futura",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
            fontSize: 12,
          }}
        >
          1. Fill trey with a thin layer of water and a few drops of dish soap{" "}
          {"\n"}
          2. Fill Bubble Maker half way with hot water {"\n"}
          3. Using Gloves and Goggles, carefully place a few pieces of dry ice
          into the bubble maker and close the lid {"\n"}
          4. Swish the end of the bubble maker in the trey of water to make a
          Boo Bubble! {"\n"}
          5. Place your hand in the soapy water of the trey to hold a boo bubble{" "}
          {"\n"}
          {"\n"}
        </Text>
        <Text
          style={{
            fontFamily: "Futura",
            color: "#00B1BB",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
          }}
        >
          What's Going on?
        </Text>
        <Text
          style={{
            fontFamily: "Futura",
            fontWeight: "600",
            alignSelf: "flex-start",
            paddingLeft: 20,
            fontSize: 12,
          }}
        >
          While blowing bubbles indoors, you might have noticed the occasional
          bubble that fell to the carpet but didn’t pop. Regular bubbles burst
          when they come in contact with just about anything. Why? A bubble’s
          worst enemies are oil and dirt. Boo Bubbles will bounce off of a
          surface if it is free of oil or dirt particles that would normally
          breakdown the soap film. That’s why you’re wearing knit gloves. What
          is dry ice? Does dry ice melt? In addition, Dry Ice doesn't melt - it
          sublimates. Sublimation is the process of going directly from a solid
          to a gas. Dry Ice by-passes the liquid form, giving it its name "Dry"
          Ice.
          {"\n"}
        </Text>
        <YoutubePlayer
          height={200}
          width={300}
          videoId={"BJyX3b6-KGk"}
          play={false}
        />
        <StatusBar style="auto" /> */}
      </ScrollView>
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
  scroll: {
    flex: 1,
    margin: 0,
    disableScrollViewPanResponder: true,
  },
  dropDown: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  card: {
    width: DEVICE_WIDTH,
    height: 300,
    alignSelf: "center",
    opacity: 0.5,
    marginTop: -18,
  },
});
