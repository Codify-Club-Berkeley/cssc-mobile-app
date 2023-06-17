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



export default function WindTunnelFanBlade() {
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
        <View style={{flex: 1, height: 300, width: DEVICE_WIDTH, padding: 0, backgroundColor: "#1B2832" }}>
        
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <Text style={{fontFamily: "Futura", color: "white", fontSize: 28, marginTop: 50, padding: 10, paddingHorizontal: 30, alignItems: "center", justifyContent: "center"}}>
              Wind Tunnel Fan Blade
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
          <Text style={[styles.description, {paddingTop:100, margin: 30, fontSize: 15, color: "black"}]}>
          This wooden fan blade is from the biggest wind tunnel in the world, located in the National Full-Scale 
          Aerodynamics Complex operated by the U.S. Air Force at NASA Ames. Here, engineers test the aerodynamics 
          of full-size planes and other vehicles, including the parachute that landed the Mars rover Curiosity on 
          the surface of Mars!
 
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
          Group photo of the Blue Angels crew and aerodynamics interns in front of the fan drive of 
          the NFAC 80-by-120-foot wind tunnel. Credit: NASA/Dominic Hart
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