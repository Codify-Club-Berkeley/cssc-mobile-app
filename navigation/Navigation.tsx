import { registerRootComponent } from "expo";
import React from "react";
import { Text, Image } from "react-native";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Linking from "expo-linking";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { globalStyles } from "../GlobalStyles";

//page imports
//general
import Home from "../pages/Home";

//maps
import MapObject from "../pages/maps/Map";
import MapObject2 from "../pages/maps/Map2";
import MapObject3 from "../pages/maps/Map3";
import NavigationPage from "./NavigationPage";

//demos

import BooBubbles from "../pages/demos/BooBubbles";
import Cladistics from "../pages/demos/Cladistics";
import DryIceComets from "../pages/demos/DryIceComets";
import DryIcePh from "../pages/demos/DryIcePh";
import InvisibleBells from "../pages/demos/InvisibleBells";
import SpectraCart from "../pages/demos/SpectraCart";
import Spectroscopes from "../pages/demos/Spectroscopes";
import VacuumChamber from "../pages/demos/VacuumChamber";

//exhibits
import Studio1 from "../pages/exhibits/Studio1";
import Studio2 from "../pages/exhibits/Studio2";
import Studio3 from "../pages/exhibits/Studio3";
import TouchTheSun from "../pages/exhibits/TouchTheSun";
import Cafe from "../pages/exhibits/Cafe";
import ObservationDeck from "../pages/exhibits/ObservationDeck";

//telescopes
import Leah from "../pages/exhibits/Telescopes/Leah";
import Nellie from "../pages/exhibits/Telescopes/Nellie";
import Rachel from "../pages/exhibits/Telescopes/Rachel";

//other
import ShowDescriptions from "../pages/other/ShowDescripstions";
import PlanetariumTimes from "../pages/other/PlanetariumTimes";

//header component
// import Header from "../components/Header";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// npx uri-scheme open exp://192.168.1.121:19000/--/Navigation Page/Studio1 --ios
const prefix = Linking.createURL("/");

/**
 * 
 * screens: {
    HomeStack: {
      screens: {
        Home: 'home',
        Profile: 'user',
      },
    },
    Settings: 'settings',
  },
 * 
 */

const linking: LinkingOptions = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: "Home",
      NavigationPage: {
        initialRouteName: "Navigation Page",
        screens: {
          Cafe: "Cafe",
          "Studio 1": "Studio1",
          "Studio 2": "Studio2",
          "Studio 3": "Studio3",
          "Touch The Sun": "TouchTheSun",
          "Planetarium Schedule": "PlanetariumSchedule",
        },
      },
      Map: "Map",
    },
  },
};

function NavigationPageNavigator() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{ headerShown: false }}
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Futura",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen name="Navigation Page" component={NavigationPage} />
      {/**Demos */}
      <Stack.Screen name="Boo Bubbles" component={BooBubbles} />
      <Stack.Screen
        name="Cladistics"
        component={Cladistics}
        // options={{
        //   headerTitle: (props) => <Header title="Cladistics"></Header>,
        // }}
      />
      <Stack.Screen name="Dry Ice Comets" component={DryIceComets} />
      <Stack.Screen name="Dry Ice Ph" component={DryIcePh} />
      <Stack.Screen name="Invisible Bells" component={InvisibleBells} />
      <Stack.Screen name="Spectra Cart" component={SpectraCart} />
      <Stack.Screen name="Spectroscopes" component={Spectroscopes} />
      <Stack.Screen name="Vacuum Chamber" component={VacuumChamber} />

      {/**Exhibits */}
      <Stack.Screen name="Studio 1" component={Studio1} />
      <Stack.Screen name="Studio 2" component={Studio2} />
      <Stack.Screen name="Studio 3" component={Studio3} />
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="Touch The Sun" component={TouchTheSun} />
      <Stack.Screen name="Observation Deck" component={ObservationDeck} />

      {/* Telescopes */}
      <Stack.Screen name="Nellie" component={Nellie} />
      <Stack.Screen name="Leah" component={Leah} />
      <Stack.Screen name="Rachel" component={Rachel} />

      {/**Other */}
      <Stack.Screen name="Planetarium Schedule" component={PlanetariumTimes} />
      <Stack.Screen name="Show Descriptions" component={ShowDescriptions} />
    </Stack.Navigator>
  );
}
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Page"
        component={Home}
        options={{ headerTitleStyle: globalStyles.titleText }}
      />
    </Stack.Navigator>
  );
}

function MapStackNavigator() {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerBackVisible: false }}>
      <Stack.Screen name="Map Level 1" component={MapObject} />
      <Stack.Screen
        name="Map Level 2"
        component={MapObject2}
        options={{ headerBackVisible: false }}
      />
      <Stack.Screen
        name="Map Level 3"
        component={MapObject3}
        options={{ headerBackVisible: false }}
      />
      <Stack.Screen name="Nav" component={NavigationPageNavigator} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" type="evilicons" size={20} />,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="map" type="evilicons" size={20} />,
          }}
        />
        <Tab.Screen
          name="NavigationPage"
          component={NavigationPageNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="search" type="evilicons" size={20} />,
          }}
        />

        <Tab.Screen
          name="About"
          component={ShowDescriptions}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="info" type="evilicons" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(Navigation);
