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



export default function Pluto() {
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
            Pluto (Hubble)
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
          <Text style={[styles.description, {paddingTop:90, margin: 30, marginBottom: 0, fontSize: 15, color: "black", fontWeight: "bold"}]}>
          How do we take pictures of objects that are so far away? 
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            Light from the Sun travels to Pluto, where it is reflected off the surface back into our telescopes. 
            Hubble is a reflecting telescope, so the light that enters the telescope is reflected onto several mirrors 
            before entering the science instruments on Hubble.  
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            Hubble's mirror was also not very wide, which meant it could not resolve small details that far away. 
            That's why this image of Pluto looks more like a golf ball than a planet.
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            Take a look at "Pluto – NH" to see how our imaging has improved over the years!
            </Text>
            
        </View>
    
        <View >
          <Text style={[styles.description, {paddingTop:20, margin: 30, marginBottom: 0, fontSize: 15, color: "black", fontWeight: "bold"}]}>
          How has our imaging improved since Hubble?
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            This image of Pluto was taken by a spacecraft called New Horizons, which flew by Pluto in 2015! Having a camera 
            fly by allowed us to get a much better look at Pluto's features. 
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Compare this image to the image Hubble took of Pluto. Can you determine which of Pluto's surface features in this 
            image correspond to the dark and light patches in the Hubble image?

            Credit:  NASA/New Horizons
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