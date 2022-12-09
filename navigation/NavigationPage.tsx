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

import { Component, useEffect, useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { globalStyles } from "../GlobalStyles";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

import { useFonts } from "expo-font";
import { ListItem } from "react-native-elements";
import { ScreenWidth } from "react-native-elements/dist/helpers";

import { getStorage } from "../functions/bookmark-functions";

const DEVICE_WIDTH = Dimensions.get("window").width;

//https://snack.expo.dev/embedded/@aboutreact/collapsible-and-accordion-view-in-react-native?iframeId=h1ftiunob9&preview=true&platform=ios&theme=dark

function Accord(props) {
  const constantSECTIONS = [
    {
      title: "Demos",
      number: 0,
      subsections: [
        {
          Name: "Boo Bubbles",
          Path: "Boo Bubbles",
        },
        {
          Name: "Cladistics",
          Path: "Cladistics",
        },
        {
          Name: "Dry Ice Comets",
          Path: "Dry Ice Comets",
        },
        {
          Name: "Dry Ice Ph",
          Path: "Dry Ice Ph",
        },
      ],
    },
    {
      title: "Exhibits",

      number: 1,
      subsections: [
        {
          Name: "Studio 1",
          Path: "Studio 1",
        },
        {
          Name: "Studio 2",
          Path: "Studio 2",
        },
      ],
    },
    {
      title: "Other",

      number: 2,
      subsections: [
        {
          Name: "Planetarium Schedule",
          Path: "Planetarium Schedule",
        },
        {
          Name: "Show Descriptions",
          Path: "Show Descriptions",
        },
      ],
    },
  ];
  const [SECTIONS, setSECTIONS] = useState(constantSECTIONS);

  const [activeSections, setActive] = useState([]);

  //This is an awful way to implement this. I should do something to fetch the data when the button is clicked, but this will have to suffice for now
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     //console.log("This will be called every 5 seconds");
  //     //Pull the data into an object
  //     //Append each True item into a subsections array
  //     //If there are any true items, then setSECTIONS with constantSECTIONS and all of the true sections
  //     try {
  //       //Pull in the data as an object
  //       let store = getStorage("bookmarks");
  //       //create an array
  //       let bookmarkSubsections = [];

  //       //store the keys and values in arrays
  //       const keys = Object.keys(store);
  //       const values = Object.values(store);

  //       //iterate through the indicies of the arrays
  //       for (let index = 0; index < keys.length; index++) {
  //         //if the store value equals 1
  //         if (values[index]) {
  //           //Push another
  //           bookmarkSubsections.push({
  //             Name: String(keys[index]),
  //             Path: String(keys[index]),
  //           });
  //         }
  //       }
  //       //finally, set the state
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);
  const header = (section) => {
    return (
      <View style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{section.title}</Text>
        </View>
      </View>
    );
  };

  const content = (section) => {
    return (
      <View>
        {section.subsections.map(({ Name, Path }) => (
          <ButtonView location={Path} text={Name} nav={props.nav}></ButtonView>
        ))}
      </View>
    );
  };

  const change = (section) => {
    setActive([section[0]]);
  };

  return (
    <Accordion
      sections={SECTIONS}
      activeSections={activeSections}
      renderHeader={header}
      renderContent={content}
      onChange={change}
    />
  );
}

function ButtonView(props) {
  return (
    <View style={{ paddingTop: 5, paddingBottom: 5, alignSelf: "center" }}>
      <TouchableOpacity onPress={() => props.nav.navigate(props.location)}>
        <View style={styles.button2}>
          <Text style={styles.buttonText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function NavigationPage({ navigation }) {
  let [fontsLoaded] = useFonts({
    Futura: require("../assets/fonts/Futura.otf"),
  });

  const DEVICE_WIDTH = Dimensions.get("window").width;

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
      <ScrollView>
        <Accord nav={navigation} />
        {/* <Accord nav={navigation} /> */}
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

  button2: {
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

  button: {
    width: 260,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,

    borderRadius: 26,
    elevation: 3,
    backgroundColor: "white",
    fontFamily: "Futura",
    color: "black",
    borderWidth: 5,
  },

  buttonText: {
    color: "black",
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

  content: {
    flexDirection: "column",
    padding: 20,
    fontFamily: "Futura",
    color: "blue",
  },

  dropdown: {
    fontFamily: "Futura",
  },
});
