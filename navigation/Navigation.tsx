import { registerRootComponent } from "expo";
import React from "react";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Linking from "expo-linking";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements/dist/icons/Icon";

import { globalStyles } from "../GlobalStyles";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { processFontFamily, useFonts } from "expo-font";
import {
  Studio1Carousel,
  TouchTheSunCarousel,
} from "../components/carousel/data";
import * as WebBrowser from "expo-web-browser";

import { useState } from "react";

import { Link } from "@react-navigation/native";
import { assets } from "../react-native.config";

//page imports
//general
import Home from "../pages/Home";
import Login from "../pages/Login"
import Tickets from "../pages/Tickets"

//maps
import MapObject from "../pages/maps/Map";
import MapObject2 from "../pages/maps/Map2";
import MapObject3 from "../pages/maps/Map3";
import NavigationPage from "./NavigationPage";
import demosNavigation from "./demosNavigation";

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
import NASAAerospace from "../pages/exhibits/NASAAerospace";
import OnionCrew from "../pages/exhibits/OnionCrew";
import OnionCrewTest from "../pages/exhibits/OnionCrewTest";
import BallisticsRangeModel from "../pages/exhibits/BallisticsRangeModel";
import WindTunnelTestZone from "../pages/exhibits/WindTunnelTestZone";
import WindTunnels from "../pages/exhibits/WindTunnels";
import WindTunnelFanBlade from "../pages/exhibits/WindTunnelFanBlade";
import UnitaryPlan from "../pages/exhibits/UnitaryPlan";
import ADEPT from "../pages/exhibits/ADEPT";
import LADEE from "../pages/exhibits/LADEE";
import SuperBallBot from "../pages/exhibits/SuperBallBot";
import MADCAT from "../pages/exhibits/MADCAT";
import HighEfficiencyAircraftModels from "../pages/exhibits/HighEfficiencyAircraftModels";
import Pioneer10Model from "../pages/exhibits/Pioneer10Model";
import FiberOpticHelmet from "../pages/exhibits/FiberOpticHelmet";
import CubeSat from "../pages/exhibits/CubeSat";
import ArcJetTestSample from "../pages/exhibits/ArcJetTestSample";
import VerticalMotionSimulator from "../pages/exhibits/VerticalMotionSimulator";

//telescopes
import Leah from "../pages/exhibits/Telescopes/Leah";
import Nellie from "../pages/exhibits/Telescopes/Nellie";
import Rachel from "../pages/exhibits/Telescopes/Rachel";

//other
import ShowDescriptions from "../pages/other/ShowDescripstions";
import PlanetariumTimes from "../pages/other/PlanetariumTimes";

//calendar
import ChabotCalendar from "../pages/ChabotCalendar";
import Header from "../components/Header";
import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import exhibitsNavigation from "./exhibitsNavigation";
import Accordion from "react-native-collapsible/Accordion";


//header component
// import Header from "../components/Header";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// npx uri-scheme open exp://192.168.1.121:19000/--/Studio1 --ios
const prefix = Linking.createURL("/");

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
      ChabotCalendar: "Calendar", 
    },
  },
};



function NavigationPageNavigator() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;
  return (

    <Stack.Navigator
      defaultScreenOptions={{ headerShown: false }}
      screenOptions={{
        
        headerShown: true
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
      <Stack.Screen name="Exhibits" component={exhibitsNavigation}/>

    </Stack.Navigator>
  
  );
}
function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        
        
      />

    <Stack.Screen name="Login" component={LoginStackNavigator} />
    <Stack.Screen name="Tickets" component={Tickets} />
    <Stack.Screen name="Show Descriptions" component={ShowDescriptions} />
    <Stack.Screen name="Exhibits" component={exhibitsNavigation}/>
    <Stack.Screen name="NASA Aerospace" component={NASAAerospace} />
    <Stack.Screen name="Onion Crew" component={OnionCrew} />
    <Stack.Screen name="Onion Crew Test" component={OnionCrewTest} />
    <Stack.Screen name="Ballistics Range Model" component={BallisticsRangeModel} />
    <Stack.Screen name="Wind Tunnel Test Zone" component={WindTunnelTestZone} />
    <Stack.Screen name="Wind Tunnels" component={WindTunnels} />
    <Stack.Screen name="Wind Tunnel Fan Blade" component={WindTunnelFanBlade} />
    <Stack.Screen name="Unitary Plan Wind Tunnel Fan Blade" component={UnitaryPlan} />
    <Stack.Screen name="ADEPT Wind Tunnel Model" component={ADEPT} />
    <Stack.Screen name="LADEE: Lunar Atmosphere Dust and Environment Explorer" component={LADEE} />
    <Stack.Screen name="Super Ball Bot" component={SuperBallBot} />
    <Stack.Screen name="MADCAT Wind Tunnel Model" component={MADCAT} />
    <Stack.Screen name="High Efficiency Aircraft Models" component={HighEfficiencyAircraftModels} />
    <Stack.Screen name="Pioneer 10 Model" component={Pioneer10Model} />
    <Stack.Screen name="Fiber Optic Helmet" component={FiberOpticHelmet} />
    <Stack.Screen name="CubeSat" component={CubeSat} />
    <Stack.Screen name="Arc Jet Test Sample" component={ArcJetTestSample} />
    <Stack.Screen name="Vertical Motion Simulator" component={VerticalMotionSimulator} />

    </Stack.Navigator>
  );
}

function LoginStackNavigator() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return(
      <Stack.Navigator
        screenOptions={{headerShown: false, navigationBarHidden: true}}>

          <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false, navigationBarHidden: true}}/>
          

      </Stack.Navigator>

  )

}

function DemosStackNavigator() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;
  return (
      <Stack.Navigator
        defaultScreenOptions={{ headerShown: false}}
        screenOptions={{
          
          headerShown: false,
        }}
      >
  
        <Stack.Screen name="Demos" component={demosNavigation}/>
       {/**Demos */}
        <Stack.Screen name="Boo Bubbles" component={BooBubbles} 
        />
        <Stack.Screen name="Cladistics" component={Cladistics} />
        <Stack.Screen name="Dry Ice Comets" component={DryIceComets} />
        <Stack.Screen name="Dry Ice Ph" component={DryIcePh} />
        <Stack.Screen name="Invisible Bells" component={InvisibleBells} />
        <Stack.Screen name="Spectra Cart" component={SpectraCart} />
        <Stack.Screen name="Spectroscopes" component={Spectroscopes} />
        <Stack.Screen name="Vacuum Chamber" component={VacuumChamber} />
  
    </Stack.Navigator>
  );
}


function MapStackNavigator() {
  return (
    <Stack.Navigator 
    
    screenOptions={{headerShown: false
    }}>
      
      <Stack.Screen
        name="Map Level 1"
        component={MapObject}
        options={{
          headerBackVisible: true,
          headerTitleStyle: globalStyles.titleText,
        }}
      />
      <Stack.Screen
        name="Map Level 2"
        component={MapObject2}
        options={{
          headerBackVisible: false,
          headerTitleStyle: globalStyles.titleText,
        }}
      />
      <Stack.Screen
        name="Map Level 3"
        component={MapObject3}
        options={{
          headerBackVisible: false,
          headerTitleStyle: globalStyles.titleText,
        }}
      />
      <Stack.Screen
        name="Nav"
        component={NavigationPageNavigator}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}


function CalendarStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Calendar"
        component={ChabotCalendar}
        
        
        //options={{ headerTitleStyle: globalStyles.titleText }}
      />
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
          
            tabBarIcon: () => <Icon name="home" type="ionicon" size={25} color={"#1B2832"}/>,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="location" type="ionicon" size={25} color={"#1B2832"}/>,
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={CalendarStackNavigator}
          options={{
            headerShown: false,
          
            tabBarIcon: () => <Icon name="calendar" type="ionicon" size={25} color={"#1B2832"}/>,
          }}
        />
        <Tab.Screen
          name="Demos"
          component={DemosStackNavigator}
          options={{
            headerShown: false,

            tabBarIcon: () => <Icon name="science" type="materials" size={30} color={"#1B2832"}/>,
          }}
        />

        {/* <Tab.Screen
          name="About"
          component={ShowDescriptions}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="info" type="evilicons" size={20} />,
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(Navigation);

/*
#The navigation page is hidden 
        <Tab.Screen
          name="Navigation"
          component={NavigationPageNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="search" type="evilicons" size={25} color={"#1B2832"}/>,
          }}
          
        />
*/
