import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Linking,
} from "react-native";



export default function LADEE() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;

  return (
    <View style={{flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,}}> 
    

    <ScrollView 
        bounces={true}>
        <View style={{flex: 1, height: 300, padding: 0, backgroundColor: "#1B2832" }}>
        
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <Text style={{fontFamily: "Futura", color: "white", fontSize: 28, marginTop: 50, padding: 10, paddingHorizontal: 30, alignItems: "center", justifyContent: "center"}}>
            LADEE: Lunar Atmosphere Dust and Environment Explorer  
          </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              padding: 20,
            }}
          >
            
            <Image
                style={
                    {width: "90%", 
                     resizeMode:"cover",
                     height: undefined,
                     aspectRatio: 5/4, 
                    }
                            
                  }
                      source={require("../../assets/images/ti1.jpg")}>
                </Image>
            

          </View>
          </View>

        <View >
          <Text style={[styles.description, {paddingTop:120, margin: 30, fontSize: 15, color: "black"}]}>
          These are two models of the LADEE spacecraft–a robot that launched in 2013 and orbited the Moon to study 
          its atmosphere and surface. The smaller model is 3D printed and the larger is a full-scale structural frame model.


 
            </Text>
            
        </View>
        
        <View
            style={{
              alignItems: "center",
              padding: 20,
              paddingBottom: 0,
            }}
          >
            
            <Image
                style={
                    {width: "90%", 
                     resizeMode:"cover",
                     height: undefined,
                     aspectRatio: 3/2, 
                    }
                            
                  }
                      source={require("../../assets/images/ti2.jpg")}>
                </Image>
            

          </View>

          <View >
          <Text style={[styles.description, { margin: 30, fontSize: 15, color: "black"}]}>
          Jason Lee tests and measures LADEE in Ames Clean Room after return from shake tests in Southern California.
            </Text>
            
        </View>

    

        </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  description: {
    padding: 0,
    fontFamily: "Futura",
    fontSize: 10,
    textAlign: "center",
  },
});