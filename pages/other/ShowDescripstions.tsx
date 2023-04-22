import React from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";

import { globalStyles } from "../../GlobalStyles";
import { showData } from "../showData";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function ShowDescriptions() {
  return (
    <ScrollView>

<View style={{ height: 130, padding: 0, backgroundColor: "#1B2832" }}>
        <Image
            style={[
              globalStyles.image,
              { width: DEVICE_WIDTH / 1, height: 55, marginTop: 55}, 
            ]}
            source={require("../../assets/images/logo-mobile.png")}
          />
          
        </View>

      <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
        {showData.map(({ title, duration, description }) => (
          <View style={{ paddingBottom: 10 }}>
            <Text style={globalStyles.headerText}>{title}</Text>
            <Text style={globalStyles.subHeaderTextLeft}>
              {duration} Minutes
            </Text>
            <Text style={globalStyles.bodyText}>
              {"\t"}

              {description}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
