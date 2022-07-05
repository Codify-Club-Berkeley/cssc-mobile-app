import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Linking from "expo-linking";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//page imports
import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import MapObject from "../pages/Map";
import Studio1 from "../pages/exhibits/Studio1";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const prefix = Linking.makeUrl("/");

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Home2" component={Home2} />
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
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Home2" component={Home2} />
        <Tab.Screen name="Map" component={MapObject} />
        <Tab.Screen name="Studio1" component={Studio1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
