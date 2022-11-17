import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import { Component, useState } from "react";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import Navigation from "./Navigation";
import { globalStyles } from "../GlobalStyles";

import { useFonts } from "expo-font";

const DEVICE_WIDTH = Dimensions.get("window").width;

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
  let [fontsLoaded] = useFonts({
    Futura: require("../assets/fonts/Futura.otf"),
  });

  const [collapsed, setCollapsed] = useState(false);

  const [activeSections, setActiveSections] = useState([]);

  function ButtonView(props) {
    return (
      <View style={{ paddingTop: 20, paddingBottom: 10, alignSelf: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate(props.location)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{props.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={[
          globalStyles.image,
          {
            backgroundColor: "#1B2832",
            width: DEVICE_WIDTH / 1.05,
            height: 100,
          },
        ]}
        source={require("../assets/images/logo-mobile.png")}
      />
      <ScrollView style={{ width: DEVICE_WIDTH / 1.1, borderWidth: 0 }}>
        <ButtonView location="Boo Bubbles" text="BOO BUBBLES"></ButtonView>
        <ButtonView location="Studio1" text="STUDIO 1"></ButtonView>
        <ButtonView location="Studio2" text="STUDIO 2"></ButtonView>
        <ButtonView location="Studio3" text="STUDIO 3"></ButtonView>
        <ButtonView location="Calendar" text="Calendar"></ButtonView>
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

  button: {
    shadowOpacity: 5,
    shadowOffset: { width: 1, height: 5 },
    backgroundColor: "#00a6b9",
    borderRadius: 50,
    width: DEVICE_WIDTH / 1.2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Futura",
  },

  titleText: {
    padding: 20,
    backgroundColor: "white",
    width: "100%",
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Futura",
  },
});
