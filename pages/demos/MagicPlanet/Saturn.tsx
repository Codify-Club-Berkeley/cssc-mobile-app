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



export default function Saturn() {
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
            Saturn
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
          Does something look like it's missing? 
   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            Saturn is commonly known for its distinctive rings, made up of ice, dust, and rocks. Where are they on this globe? 
            If we could project past the surface of this model, the rings would be around the middle. 
 
            </Text>

            <Text style={[styles.description, {paddingTop:0, margin: 30, marginBottom: 0, fontSize: 15, color: "black"}]}>

            Saturn's rings are also VERY thin compared to the planet's size. While Saturn measures over 100,000 kilometers 
            from top to bottom, the rings are less than 1kilometer thick. 

 
            </Text>
            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Hold this card up to the globe with the words facing the ceiling. That is about how thick Saturn's rings are 
            relative to the planet's size.
 
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