import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { globalStyles } from "../../GlobalStyles";

import { updateView } from "../../functions/map-functions";

const NavBar = React.forwardRef(
  (
    props: { nav: any; leftNav: String; rightNav: String; iconSize: number },
    ref
  ) => (
    <View style={{ flex: 0.1, borderWidth: 0, backgroundColor: "white" }}>
      {/**Bottom Navigation Pannel */}
      {/**  <Text style={globalStyles.headerText}>Level 1</Text>
       */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          borderWidth: 0,
        }}
      >
        {/**Map Down */}
        <TouchableOpacity onPress={() => props.nav.navigate(props.leftNav)}>
          <Icon name="arrow-left" type="evilicon" size={props.iconSize} />
          <Text style={globalStyles.bodyText}>{props.leftNav.slice(4)}</Text>
        </TouchableOpacity>
        {/**Reset View */}
        <TouchableOpacity onPress={() => updateView(1, 154, 193, ref)}>
          <Icon name="refresh" type="evilicon" size={props.iconSize} />
          <Text style={globalStyles.bodyText}>Reset Zoom</Text>
        </TouchableOpacity>
        {/**Map Up */}
        <TouchableOpacity onPress={() => props.nav.navigate(props.rightNav)}>
          <Icon name="arrow-right" type="evilicon" size={props.iconSize} />
          <Text style={globalStyles.bodyText}>{props.rightNav.slice(4)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
);

export default NavBar;
