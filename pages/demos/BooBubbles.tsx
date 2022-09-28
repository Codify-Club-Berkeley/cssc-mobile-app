import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import { useFonts } from "expo-font";
import YoutubePlayer from "react-native-youtube-iframe";
import { globalStyles } from "../../GlobalStyles";

export default function BooBubbles() {
  return (
    <View style={styles.container}>
      <ScrollView>
      
      <Image
            style={[
              globalStyles.image,
              { width: 200, height: 100 },
            ]}
            source={require("../../assets/images/ti1.jpg")}
          />
      <Text
        style={{ fontFamily: "Futura", color: "#00B1BB", fontWeight: "600", alignSelf: "flex-start", paddingLeft: 20 }}
      >
        Materials
      </Text>
      <Text
        style={{ fontFamily: "Futura", fontWeight: "600", alignSelf: "flex-start", paddingLeft: 20, fontSize:12 }}
      >
        Dry Ice, Warm Water, Dish Soap, Plastic Trey, Dry Ice Bubble Maker, Gloves, Goggles {"\n"}
      </Text>
      <Text
        style={{ fontFamily: "Futura", color: "#00B1BB", fontWeight: "600", alignSelf: "flex-start", paddingLeft: 20 }}
      >
        Proceedure 
      </Text>
      <Text
        style={{ fontFamily: "Futura", fontWeight: "600", alignSelf: "flex-start", paddingLeft: 20, fontSize:12 }}
      >
        1. Fill trey with a thin layer of water and a few drops of dish soap {"\n"}
        2. Fill Bubble Maker half way with hot water {"\n"}
        3. Using Gloves and Goggles, carefully place a few pieces of dry ice into the bubble maker and close the lid {"\n"}
        4. Swish the end of the bubble maker in the trey of water to make a Boo Bubble! {"\n"}
        5. Place your hand in the soapy water of the trey to hold a boo bubble {"\n"}
        {"\n"}
      </Text>
      <Text
        style={{ fontFamily: "Futura", color: "#00B1BB", fontWeight: "600", alignSelf: "flex-start", paddingLeft: 20 }}
      >
        What's Going on?
      </Text>
      <Text
        style={{ fontFamily: "Futura", fontWeight: "600", alignSelf: "flex-start", paddingLeft: 20, fontSize:12 }}
      >
        While blowing bubbles indoors, you might have noticed the occasional bubble that fell to the carpet but didn’t pop. Regular bubbles burst when they come in contact with just about anything. Why? A bubble’s worst enemies are oil and dirt. Boo Bubbles will bounce off of a surface if it is free of oil or dirt particles that would normally breakdown the soap film. That’s why you’re wearing knit gloves.
What is dry ice? Does dry ice melt? In addition, Dry Ice doesn't melt - it sublimates. Sublimation is the process of going directly from a solid to a gas. Dry Ice by-passes the liquid form, giving it its name "Dry" Ice.
{"\n"}
      </Text>
      <YoutubePlayer
        height={200}
        width={300}
        videoId={"BJyX3b6-KGk"}
        play={true}
      />
      <StatusBar style="auto" />
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
  },
});
