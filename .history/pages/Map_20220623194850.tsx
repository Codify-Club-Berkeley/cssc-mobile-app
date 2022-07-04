import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import { createRef, useState } from "react";
import { useFonts } from "expo-font";
import { Icon } from "react-native-elements";

export default function Map() {
  const zoomableViewRef = createRef<ReactNativeZoomableView>();

  function resetZoom() {
    zoomableViewRef.current!.zoomTo(1);
  }

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Level 1</Text>
      <View style={{ borderWidth: 1, flexShrink: 1, height: 500, width: 310 }}>
        <ReactNativeZoomableView
          ref={zoomableViewRef}
          bindToBorders={true}
          panBoundaryPadding={200}
          maxZoom={300}
          // Give these to the zoomable view so it can apply the boundaries around the actual content.
          // Need to make sure the content is actually centered and the width and height are
          // dimensions when it's rendered naturally. Not the intrinsic size.
          // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
          // Therefore, we'll feed the zoomable view the 300x150 size.
          //00B1BB
          contentWidth={300}
          contentHeight={180}
        >
          <View style={{ flex: 1, borderWidth: 1, width: 180 }}>
            <ImageBackground
              style={styles.image}
              source={require("../assets/maps/chabot-maps1.png")}
            >
              <View style={{ flex: 1 }}>
                <Modal visible={modalVisible} transparent={true}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Icon name="arrow-dropdown-circle" />
                    </TouchableOpacity>
                  </View>
                </Modal>
                <View style={{ top: 50, right: -50, width: 50 }}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Icon name="arrow_drop_down_circle" />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ReactNativeZoomableView>
      </View>
      <Button onPress={() => resetZoom()} title="press me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  image: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
