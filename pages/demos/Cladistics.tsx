import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Cladistics() {
  const [opacityi, setOpacity] = useState(100);
  return (
    <View
      style={{
        justifyContent: "top",
        alignItems: "center",
        flex: 1,
        paddingTop: 50,
      }}
    >
      <Text style={styles.titleText}>Cladistics</Text>
      <View style={{ borderTopWidth: 3, borderBottomWidth: 3, width: 350 }}>
        <Text style={styles.subTitleText}>Set Up</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 5,
            opacity: [opacityi],
          }}
        >
          <Text>
            1. Archaeopteryx {"\n"}2. Velociraptor {"\n"}3. Goose Caiman {"\n"}
            4. California condor {"\n"}5. Deinonychus
          </Text>
          <Image
            style={{ height: 100, width: 150 }}
            source={require("../../assets/images/Demos/Cladistics/dino.png")}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorView: {
    backgroundColor: "blue",
    flex: 100,
    width: 200,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Futura",
    color: "#00B1BB",
  },
  subTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
});
