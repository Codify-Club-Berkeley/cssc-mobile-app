import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { globalStyles } from "../GlobalStyles";

// export defualt function Card(props) {

//
// }

export default function Card(props) {
  const [myOpacity, setMyOpacity] = useState(100);

  return (
    <TouchableOpacity onPress={() => setMyOpacity(100 - myOpacity)}>
      <View
        style={[
          {
            width: 350,
            height: 265,
            alignSelf: "center",
            backgroundColor: "black",
            opacity: myOpacity,
          },
        ]}
      >
        <Image
          style={[globalStyles.image, styles.card]}
          source={props.myImage}
        />
        <Text
          style={[
            {
              color: "white",
              alignSelf: "center",
              marginTop: -170,
              fontSize: 30,
              fontFamily: "Futura",
            },
          ]}
        >
          {props.title}
        </Text>
      </View>

      <View
        style={[
          {
            width: 350,
            height: 265,
            alignSelf: "center",
            marginTop: -260,
            marginLeft: 0,
            opacity: 100 - myOpacity,
          },
        ]}
      >
        <View style={[{ borderColor: "black", borderWidth: 1, padding: 10 }]}>
          {props.body}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // dropDown: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  //   padding: 8
  // },
  card: {
    width: 350,
    height: 300,
    alignSelf: "center",
    opacity: 0.5,
    marginTop: -18,
  },
});
