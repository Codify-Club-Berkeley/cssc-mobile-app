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
import Accordion from "react-native-collapsible/Accordion";
import { globalStyles } from "../GlobalStyles";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


import { useFonts } from "expo-font";
import { ListItem } from "react-native-elements";
import { ScreenWidth } from "react-native-elements/dist/helpers";


export default function NavigationPage({ navigation }) {
  let [fontsLoaded] = useFonts({
    Futura: require("../assets/fonts/Futura.otf"),
  });

  const [collapsed, setCollapsed] = useState(false);

  const [activeSections, setActiveSections] = useState([]);

  const DEVICE_WIDTH = Dimensions.get("window").width;

  function Accord (props) {

    const SECTIONS = [
      {
        title: 'Demos',
        content: 'boo bubbles',
        number: 0,
      },
      {
        title: 'Studio 1',
        content: 'Lorem ipsum...',
        number: 1,
      },
      {
        title: 'Studio 2',
        content: 'Lorem ipsum...',
        number: 2,
      },
      {
        title: 'Studio 3',
        content: 'Lorem ipsum...',
        number: 3,
      },
    ];

    const [activeSections, setActive] = useState([]);

    const header = (section) => {
      return ( 
        <View>
          <Text style={styles.button}>{section.title}</Text>
        </View>
      );
    };

    const content = (section) => {
      return ( 
        <View>
          <ListItem styles={styles.content}>
            <Text style={styles.dropdown}>{section.content}</Text>
          </ListItem>
        </View>
      );
    };

    const change = (section) => {
      setActive([section[0]]);
    };

    
    return(
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={header}
        renderContent={content}
        onChange={change}
        //onChange={this._updateSections}
      />
    );
  }

  function ButtonView(props) {
    return (
      <View style={{ paddingTop: 20, paddingBottom: 10 }}>
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
                height: 100 
              },
            ]}
            source={require("../assets/images/logo-mobile.png")}
          />
      <ScrollView>
        <Accord title="Boo Bubbles" header="yuhhh" content="bubbles" change="yes">
          <ButtonView location="Boo Bubbles" text="BOO BUBBLES"></ButtonView>
          <ButtonView location="Studio1" text="STUDIO 1"></ButtonView>
          <ButtonView location="Studio2" text="STUDIO 2"></ButtonView>
          <ButtonView location="Studio3" text="STUDIO 3"></ButtonView>
        </Accord> 
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

  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 26,
    elevation: 3,
    backgroundColor: 'white',
    fontFamily: "Futura",
    color: 'black',
    borderWidth: 5,
  },

  buttonText:{
    color: "white",
    fontWeight: "bold",
    fontFamily: "Futura"
  },

  content: {
    flexDirection: 'column',
    padding: 20,
    fontFamily: "Futura",
    color: 'blue',
  },

  dropdown: {
    fontFamily: "Futura",
  }

});
