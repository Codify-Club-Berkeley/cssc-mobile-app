import { registerRootComponent } from "expo";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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

//other
import ShowDescriptions from "../pages/ShowDescripstions";
import PlanetariumTimes from "../pages/PlanetariumTimes";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const prefix = Linking.createURL("/");

function NavigationPageNavigator() {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Screen name="Navigation Page" component={NavigationPage} />
      {/**Demos */}
      <Stack.Screen name="Boo Bubbles" component={BooBubbles} />
      <Stack.Screen name="Cladistics" component={Cladistics} />
      <Stack.Screen name="DryIceComets" component={DryIceComets} />
      <Stack.Screen name="DryIcePh" component={DryIcePh} />
      <Stack.Screen name="InvisibleBells" component={InvisibleBells} />
      <Stack.Screen name="SpectraCart" component={SpectraCart} />
      <Stack.Screen name="Spectroscopes" component={Spectroscopes} />
      <Stack.Screen name="VacuumChamber" component={VacuumChamber} />

      {/**Exhibits */}
      <Stack.Screen name="Studio1" component={Studio1} />
      <Stack.Screen name="Studio2" component={Studio2} />
      <Stack.Screen name="Studio3" component={Studio3} />
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="Touch The Sun" component={TouchTheSun} />

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
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: "Home",
        Home2: "Home2",
        Studio1: "Studio1",
      },
    },
  };

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
