import React from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { globalStyles } from "../GlobalStyles";
import { useEffect, useState } from "react";

/**
 * store an object with key @bookmarks
 *
 * {
 * BooBubbles: False,
 * Cladistics: False,
 * DryIceCommets: False,
 * ...
 * }
 *
 * When we change it, then we
 *
 * store an object with key settings
 */

async function handleBookmarkPress(page: String, alter: Function) {
  try {
    //Get value
    let jsonValue = await AsyncStorage.getItem("bookmarks");
    let parsed = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (parsed == null) return;

    //modify value for store and in state
    parsed["BooBubbles"] = !parsed["BooBubbles"];
    alter(parsed["BooBubbles"]);

    //re stringify the json and store it again
    const stringified = JSON.stringify(parsed);
    await AsyncStorage.setItem("bookmarks", stringified);
    console.log("New Value: ", parsed["BooBubbles"]);
  } catch (e) {
    // read error
  }
}

export default function Header(props) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const [marked, setMarked] = useState(false);

  useEffect(() => {
    async function onLoad() {
      let jsonValue = await AsyncStorage.getItem("bookmarks");
      console.log("before: " + jsonValue);
      let parsed = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log("initial value: ", parsed["BooBubbles"]);
      setMarked(parsed["BooBubbles"]);
    }

    onLoad()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    //https://stackoverflow.com/questions/36938742/touchablehighlight-not-clickable-if-position-absolute
    <>
      <Text style={[globalStyles.titleBarText]}>
        {props.title}
        {"\t"}
      </Text>

      {/* <Icon
        name="bookmark"
        type="evilicons"
        size={40}
        color={marked ? "blue" : "black"}
        style={{ opacity: 0 }}
      /> */}
      <Icon
        name="bookmark"
        type="evilicons"
        size={40}
        color={marked ? "blue" : "black"}
        onPress={() => {
          handleBookmarkPress("BooBubbles", setMarked);
        }}
      />
    </>
  );
}
