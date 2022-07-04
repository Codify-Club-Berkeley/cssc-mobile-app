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
        left: 50,
        width: 200,
        borderWidth: 1,
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
