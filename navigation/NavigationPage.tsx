import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from "react-native";

import { Component, useState } from "react";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import Navigation from "./Navigation";

//https://snack.expo.dev/embedded/@aboutreact/collapsible-and-accordion-view-in-react-native?iframeId=h1ftiunob9&preview=true&platform=ios&theme=dark
/*
const SECTIONS = [
    {
      title: 'First Title',
      header: 'First Header',
      content: 'First Content',
      buttonLog: 'first',
      color: 'blue'
    },
    {
      title: 'Second Title',
      header: 'Second Header',
      content: 'Second Content',
      buttonLog: 'second',
      color: 'red'
    },
  ];
*/

function AccordionView() {
  const [activeSections, setActiveSections] = useState([]);

  /*
    _updateSections = (activeSections) => {
        this.setState({ activeSections });
      };
  */

  const RenderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  const RenderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.header}</Text>
      </View>
    );
  };

  const RenderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text style={{ color: section.color }}>{section.content}</Text>
      </View>
    );
  };

  return (
    <Accordion
      sections={SECTIONS}
      activeSections={activeSections}
      renderSectionTitle={RenderSectionTitle}
      renderHeader={RenderHeader}
      renderContent={RenderContent}
      onChange={setActiveSections}
    />
  );
}

export default function NavigationPage({ navigation }) {
  const [collapsed, setCollapsed] = useState(false);

  const [activeSections, setActiveSections] = useState([]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Boo Bubbles")}>
        <Text>place 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Studio1")}>
        <Text>place 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginRight: 5,
  },
});
