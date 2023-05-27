import React from "react";

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

import DemoSection from "../../components/DemoSection";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function DryIceComets() {
  return (
    <View>
        <View style={{ height: 130, padding: 0, backgroundColor: "#1B2832" }}>
        <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1, height: 55, marginTop: 55}, 
            ]}
            source={require("../../assets/images/logo-mobile.png")}
          />
          
        </View>
    <ScrollView>
      {/* <DemoSection
        displayHeight={300}
        imageUri={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fish_cladogram.svg/800px-Fish_cladogram.svg.png"
        }
        overlayTitle={"Overview"}
        textColor={"black"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[globalStyles.subHeaderTextLeft, globalStyles.tealText]}
            >
              Cladistics
            </Text>
            <Text style={globalStyles.bodyText}>
              Cladistics – the science of studying and classifying organisms
              according to their evolutionary relationships, through a
              comparison of the organisms’ physical characteristics {"\n"}
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fish_cladogram.svg/800px-Fish_cladogram.svg.png"
        }
        overlayTitle={"Recipe"}
        textColor={"black"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[globalStyles.subHeaderTextLeft, globalStyles.tealText]}
            >
              Cladistics
            </Text>
            <Text style={globalStyles.bodyText}>
              Cladistics – the science of studying and classifying organisms
              according to their evolutionary relationships, through a
              comparison of the organisms’ physical characteristics {"\n"}
            </Text>
          </>
        }
      ></DemoSection>
      https://www.youtube.com/watch?v=2lk874N7AjQ
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fish_cladogram.svg/800px-Fish_cladogram.svg.png"
        }
        overlayTitle={"Video"}
        textColor={"black"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[globalStyles.subHeaderTextLeft, globalStyles.tealText]}
            >
              Cladistics
            </Text>
            <Text style={globalStyles.bodyText}>
              Cladistics – the science of studying and classifying organisms
              according to their evolutionary relationships, through a
              comparison of the organisms’ physical characteristics {"\n"}
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fish_cladogram.svg/800px-Fish_cladogram.svg.png"
        }
        overlayTitle={"Recipe"}
        textColor={"black"}
        displayType={"Text"}
        content={
          <>
            <Text
              style={[globalStyles.subHeaderTextLeft, globalStyles.tealText]}
            >
              Cladistics
            </Text>
            <Text style={globalStyles.bodyText}>
              Cladistics – the science of studying and classifying organisms
              according to their evolutionary relationships, through a
              comparison of the organisms’ physical characteristics {"\n"}
            </Text>
          </>
        }
      ></DemoSection> */}
      <Text>Dry Ice Comets</Text>
    </ScrollView>

    </View>
  );
}
