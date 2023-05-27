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



export default function NASAAerospace() {
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
              NASA's Aerospace Innovation Journey
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
            Dream It, Model It, Make It {"             "}
            NASA’s people test every aerospace innovation before it’s ready for flight, 
            improving the design at every step, turning concepts into working prototypes 
            and finally space-ready inventions. Engineers use these spacecraft models to 
            investigate different aspects of aerodynamic design. 
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
          Illustration of NASA’s Orion spacecraft, featuring the Service Module, 
          the Crew Module, and the Launch Abort System. Credit: NASA 
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
                      source={require("../../assets/images/ti3.jpg")}>
                </Image>
            

          </View>

          <View >
          <Text style={[styles.description, { margin: 30, fontSize: 15, color: "black"}]}>
          Thien-ly Vu, instrumentation technician, connects thermocouple data wires to
         an Orion heat shield test article in the arc jet Interaction Heating Facility. 
         Credit: NASA/Dominic Hart
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
                      source={require("../../assets/images/VIPER_lunar_rover.jpg")}>
                </Image>
            

          </View>

          <View>
          <Text style={[styles.description, { margin: 30, fontSize: 15, color: "black"}]}>
          The Hypervelocity Free-Flight Facility at NASA Ames. Credit: NASA/J.P. Weins
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