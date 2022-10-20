import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  ScrollView,
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

//Usable AccordionView example component
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

  function ButtonView(props) {
    return (
      <View style={{ paddingTop: 5, paddingBottom: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate(props.location)}>
          <View
            style={{
              backgroundColor: "white",
              borderColor: "blue",
              borderWidth: 5,
              borderRadius: 10,
              width: 200,
              height: 50,
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <Text>{props.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Boo Bubbles")}>
          <Text>place 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Studio1")}>
          <Text>place 2</Text>
        </TouchableOpacity>
        <ButtonView location="Studio3" text="Studio 3"></ButtonView>
        <ButtonView location="Studio3" text="Studio 3"></ButtonView>
        <ButtonView location="Studio3" text="Studio 3"></ButtonView>
      </ScrollView>
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
