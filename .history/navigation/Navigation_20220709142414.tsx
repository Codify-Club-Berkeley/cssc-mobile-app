import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Linking from "expo-linking";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { globalStyles } from "../GlobalStyles";

//page imports
import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import BooBubbles from "../pages/demos/BooBubbles";
import MapObject from "../pages/Map";
import Studio1 from "../pages/exhibits/Studio1";
import TouchTheSun from "../pages/exhibits/TouchTheSun";
import Cafe from "../pages/exhibits/Cafe";
import MapObject2 from "../pages/Map2";
import MapObject3 from "../pages/Map3";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const prefix = Linking.makeUrl("/");

function ExhibitsStackNavigator() {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Screen name="Boo Bubbles" component={BooBubbles} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Studio1" component={Studio1} />
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="TouchTheSun" component={TouchTheSun} />
    </Stack.Navigator>
  );
}
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitleStyle: globalStyles.titleText }}
      />
    </Stack.Navigator>
  );
}

function MapStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map Level 1" component={MapObject} />
      <Stack.Screen name="Map Level 2" component={MapObject2} />
      <Stack.Screen name="Map Level 3" component={MapObject3} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
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
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Exhibits"
          component={ExhibitsStackNavigator}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
