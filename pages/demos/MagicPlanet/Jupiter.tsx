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



export default function Jupiter() {
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
            Jupiter (Upside Down)
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
          Is that an eye staring at us? 
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            No! The Great Red Spot in Jupiter's southern hemisphere is actually a massive storm twice as far across as the Earth. 
            This storm has been swirling over Jupiter for at least 190 years, and possibly MUCH longer than that. 
 
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            As a gas giant, Jupiter is mostly gas, with an extremely thick atmosphere made up of hydrogen and helium.  
            All those different cloud colors are from ammonia, ammonium hydrosulfide, and water.

 
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
          Io - What are all those spots? 
   
 
            </Text>
            
        <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

        Most of them are volcanoes! Io is the most volcanically active world in our solar system. Io orbits Jupiter and is the 
        closest to Jupiter out of the four Galilean Moons. 
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Io is constantly being tugged on by Jupiter and two other Galilean Moons – Europa and Ganymede. 
            This tugging squishes Io around, causing all the volcanoes!
 
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
          Europa - Is it possible that life beyond Earth is right within our Solar System? 
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            Scientists have found that life (as we know it) requires three ingredients: liquid water, carbon, 
            and energy such as sunlight. Europa, the second of the four Galilean Moons, seems to have all three ingredients. 
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Underneath its icy shell is a salty ocean covering the entire moon. The cracks across its surface indicate 
            geologic activity that might move material from the surface into the ocean.
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
          Ganymede - What is a magnetosphere and what does a celestial body need to produce one?
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            You might be able to figure it out from the name – a magnet-o-sphere! It is a magnetic field generated by the rotating, 
            liquid metal core of a celestial body. Earth has a magnetosphere, which creates our North and South Poles. 
            The Sun has a magnetosphere too. Ganymede is the only moon in our solar system to have its own magnetic field! 
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Ganymede is the largest of Jupiter's Galilean moons and is also the largest moon in our solar system!
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
          Callisto - Callisto looks like a starry sky!  
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            But those white spots aren't stars, they're craters. The white coloring is most likely ice that was ejected from 
            the surface when space material collided with it. Can you think of another celestial body we can see that has lots 
            of craters?
 

            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Callisto has the widest orbit and is the second largest of Jupiter's four Galilean Moons.  
            At night, the Galilean moons are visible through the telescopes on the Observation Deck at Chabot!
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