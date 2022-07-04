import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MapDisplay(props: { handlePress: () => void }) {
  return (
    <View
      style={{
        top: 500,
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
