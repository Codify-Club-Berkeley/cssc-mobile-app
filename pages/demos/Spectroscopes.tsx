import React from "react";
import { Text, ScrollView } from "react-native";
import DemoSection from "../../components/DemoSection";
import { globalStyles } from "../../GlobalStyles";

export default function Spectroscopes() {
  return (
    <ScrollView style={globalStyles.demoScrollView}>
      <DemoSection></DemoSection>
    </ScrollView>
  );
}
