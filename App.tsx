import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import Navigation from "./navigation/Navigation";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

function App() {
  return <Navigation />;
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
