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



export default function UnitaryPlan() {
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
              Unitary Plan Wind Tunnel Fan Blade
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
          This blade was used in the Unitary Plan Wind Tunnel at NASA Ames, which produces wind speeds over 1,000 
          miles per hour—faster than the speed of sound. This supersonic tunnel has helped develop nearly every American 
          commercial transport and military fixed-wing plane since 1960.

 
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
          Unitary Plan 11-by-11-foot Transonic Wind Tunnel fan. Credit: NASA/Dominic Hart
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