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
import TouchTheSun from "../pages/exhibits/TouchTheSun";
import Cafe from "../pages/exhibits/Cafe";
import MapObject2 from "../pages/Map2";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const prefix = Linking.makeUrl("/");

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Studio1" component={Studio1} />
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="TouchTheSun" component={TouchTheSun} />
      <Stack.Screen name="Map2" component={MapObject2} />
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
        <Tab.Screen
          name="Home"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Map"
          component={MapObject}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
