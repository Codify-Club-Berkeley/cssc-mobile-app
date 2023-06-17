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



export default function CloudsOnMarble() {
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
            Clouds on the Marble
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
          What makes Earth’s clouds? 
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            On Earth, solar energy evaporates ocean water, which rises into the atmosphere and condenses into clouds.  
            Solar-powered winds then blow the clouds across the ocean and over land, where it eventually falls out as 
            rain or snow, which flows back to the ocean.  This Water Cycle is vital to land-life, not to mention human civilization. 
 
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
                      source={require("../../../assets/images/ti2.jpg")}>
                </Image>
            

          </View>

          <View >
          <Text style={[styles.description, {paddingTop:20, margin: 30, marginBottom: 0, fontSize: 15, color: "black", fontWeight: "bold"}]}>
          WV and SST (Water Vapor and Sea Surface Temperature) - 
          Does the temperature of the oceans affect the water cycle? 
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            In this image, the ocean’s surface temperature is color coded, with red showing the warmest water and blue 
            showing the coldest.  Water vapor in the atmosphere, shown in white, is most abundant over warm, tropical waters.  

            Credit:  University of Wisconsin, Madison
 
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            In this map, ocean surface temperature is color coded, red showing water that is warmer than normal. 
            Look for a large mass of unusually warm water forming at the equator, west of South America.  
            This is called an El Niño.  In years with a strong El Niño, weather here in California is usually warmer and wetter.


 
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