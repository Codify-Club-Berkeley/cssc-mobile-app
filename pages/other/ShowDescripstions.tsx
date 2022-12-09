import React from "react";
import { View, Text, ScrollView } from "react-native";

import { globalStyles } from "../../GlobalStyles";
import { showData } from "../showData";

export default function ShowDescriptions() {
  return (
    <ScrollView>
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
