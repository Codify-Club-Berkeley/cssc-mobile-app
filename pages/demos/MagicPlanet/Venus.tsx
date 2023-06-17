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



export default function Venus() {
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
            Venus
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
          If you could look at Venus with your naked eye, what would you see?  
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Venus has a very thick atmosphere, so that is what we can see from the outside!  
            But Venus' clouds look a bit different from the ones here on Earth. That is because they are made 
            of a mixture of water and sulfuric acid! Estimates have put the concentration of acid as high as 85%.  

            Credit:  NASA.  This simulation is based on Mariner 10 visible imagery and Galileo ultraviolet data.  
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
          Compare this image to the visible image of Venus.   
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            Radar allows us to see PAST Venus's thick atmosphere all the way to the surface, creating this detailed 
            global map of Venus’ surface features—volcanoes, lava plains, lava channels, basins, and mountains. 
            Look around the projection of Venus and try to identify some of these geological features. 
            What features does Venus have in common with another planet near and dear to us – Earth?
 
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
          Is Venus really rainbow-colored?    
 
            </Text>
            
            <Text style={[styles.description, {paddingTop:0, margin: 30, fontSize: 15, color: "black"}]}>

            In this map, altitudes of Venus’ surface are color-coded to make it easy to see highlands and lowlands
            and the slopes between. Deep blues and violet shows the lowest altitudes, while red and violet represent high altitudes.
            White shows the highest mountaintops. If Venus ever had liquid water, where do you think the oceans might have been?

 
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