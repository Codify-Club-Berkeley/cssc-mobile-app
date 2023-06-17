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



export default function Ceres() {
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
            Ceres
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
                      source={require("../../../assets/images/ti1.jpg")}>
                </Image>
            

          </View>
          </View>

          <View >
          
            
            <Text style={[styles.description, {paddingTop:90, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            That's no moon! Ceres may look very similar to our moon, but it is actually a dwarf planet orbiting the Sun in the asteroid belt.  
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            The asteroid belt is a region between Mars and Jupiter containing hundreds of thousands of asteroids. 
  
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Astronomers think that all the mass in the asteroid belt could have formed a planet in the early years of the solar
             system. We have the asteroid belt instead because Jupiter's gravity was so strong that it affected the asteroids' 
             ability to clump up into one big planet.
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