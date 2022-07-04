import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

export default function MapDisplay(props: { handlePress: () => void }) {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return (
    <View
      style={{
        top: DEVICE_HEIGHT / 2,
        left: 0,

        width: DEVICE_WIDTH,
        borderWidth: 10,
        borderColor: "#00B1BB",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.handlePress();
        }}
      >
        <Text>Information</Text>
      </TouchableOpacity>
    </View>
  );
}
