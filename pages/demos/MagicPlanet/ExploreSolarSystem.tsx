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



export default function ExploreSolarSystem() {
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
            Explore the Solar System!
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
          
            
            <Text style={[styles.description, {paddingTop:120, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            What do our planets (and other celestial bodies) look like up close? Why do they look like that? What do they have in common?
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            Using the second dropdown menu on the monitor, navigate through the solar system images to see how different 
            celestial bodies look on the globe. Use the “Rotation” and “Pole location” menus to explore around the globes.
  
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>
            Find out more about each image in the bin below!
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