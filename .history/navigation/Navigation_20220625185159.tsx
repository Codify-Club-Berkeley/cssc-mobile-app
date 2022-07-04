import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createStackNavigator } from "@react-navigation/stack";

//page imports
import Home from "../pages/Home";
import MapObject from "../pages/Map";
import Studio1 from "../pages/exhibits/Studio1";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={MapObject} />
        <Tab.Screen name="Studio1" component={Studio1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
