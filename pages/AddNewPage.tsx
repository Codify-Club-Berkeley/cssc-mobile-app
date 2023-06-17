import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  Image,
  Dimensions,
  Linking,
  Pressable,
  TextInput,
} from "react-native";



export default function AddNewPage() {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;
    const [input, setInput] = useState(
        {
            pageType: "",
            title: "",
            image: "",
            body: "",
        }
    );


    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput((prev) => {
            return { ...prev, [name]: value };
        });
    }

    const handleSubmit = () => {
        console.log(input);
    }
 

  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={{flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,}}> 
    

    <ScrollView 
        bounces={true}>
        <View style={{flex: 1, height: 150, width: DEVICE_WIDTH, padding: 0, backgroundColor: "#1B2832" }}>
        
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <Text style={{fontFamily: "Futura", color: "white", fontSize: 28, marginTop: 50, padding: 10, paddingHorizontal: 30, alignItems: "center", justifyContent: "center"}}>
            Add New Page
          </Text>
          </View>

          </View>


          <View style={{
          flexDirection: 'row',
          height: 60,
          width: 350,
          marginTop: 15, 
          paddingLeft: 50,
          paddingRight: 50,
          borderWidth: 3, 
          borderRadius: 10,
          borderColor: "#1B2832",
          left: 20, 
          right: 0,
          justifyContent: "space-between"}}>

          <Pressable
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1,
          }]}
        >
          <View>
            <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#1B2832',
            marginTop: 15,
            fontFamily: 'Futura',
            textAlign: 'center',
          }}>
              Exhibit
            </Text>
        </View>
        </Pressable>

        <Pressable
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1,
          }]}
        >
          <View>
            <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#1B2832',
            marginTop: 15,
            fontFamily: 'Futura',
            textAlign: 'center',
          }}>
              Demo
            </Text>
        </View>
        </Pressable>
            </View>



        <View style={{
          flexDirection: 'row',
          height: 50,
          width: DEVICE_WIDTH,
          marginTop: 15, 
          paddingLeft: 35,
          paddingRight: 25,
          left: 0, 
          right: 0,
          justifyContent: "space-between"}}> 
          
          
          <Text style={{
            fontWeight: 'normal',
            fontFamily: 'Futura',
            fontSize: 20,
            color: 'black',
            marginTop: 15,
            marginRight: 15,
            textAlign: 'center',
          }}>
              Page Title:
            </Text>
          
            <TextInput style={{marginRight: 20,
                              marginTop: 10,
                              padding: 10, 
                              backgroundColor: "#D9D9D9", 
                              opacity: 0.75, 
                              borderRadius: 5, 
                              width: 200, 
                              height: 40}} 
                              maxLength={60}
                              onChangeText={onChangeNumber}
                              value={number}
                              placeholder="Input Title"/>
                              
        
          
          
          </View>

          <View style={{
          flexDirection: 'row',
          height: 50,
          width: 350,
          marginTop: 10, 
          paddingLeft: 20,
          paddingRight: 20,
          left: 15, 
          right: 0,
          justifyContent: "space-between"}}>

          <Pressable
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1,

          }]}
        >
          <View>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#1B2832',
            marginTop: 15,
            fontFamily: 'Futura',
            textAlign: 'center',}}>
              + Add Image
            </Text>
        </View>
        </Pressable>

        <Pressable
          style={({pressed}) => [{
            opacity: pressed ? 0.2 : 1,
     
          }]}
        >
          <View>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#1B2832',
            marginTop: 15,
            fontFamily: 'Futura',
            textAlign: 'center',
          }}>
              + Add Text
            </Text>
        </View>
        </Pressable>
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