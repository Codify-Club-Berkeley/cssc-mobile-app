import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import MapObject from "../pages/Map";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={MapObject} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
