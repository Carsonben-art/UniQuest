import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const UniversityDetails = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Pressable style={{ flexDirection: "row", backgroundColor: "#d0d0d0", padding:10}}>
        <View>
          <ImageBackground
            style={{ aspectRatio: 5 / 6, height: 150 }}
            imageStyle={{ borderRadius: 10 }}
            source={require("../assets/images/class.jpg")}
          >
            <AntDesign
              style={{ position: "absolute", top: 10, right: 10 }}
              name="hearto"
              size={24}
              color="#fff"
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: "800" }}>
            Havard University
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3 }}>4.7</Text>
            <Text style={{ marginLeft: 10 }}>|</Text>
            <Text style={{ marginLeft: 10, fontSize: 13, color: "#493d8a" }}>
              4.2M
            </Text>
            <Text style={{ color: "#493d8a", fontSize: 13, marginLeft: 10 }}>
              Scholarships
            </Text>
          </View>
          <Text style={{marginTop: 10}}> 201K International Students</Text>
      <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center"}}>
            <EvilIcons name="location" size={24} color="black" />
            <Text style={{marginLeft: 5, fontWeight: "500"}}>Cambridge, Massachusetts.</Text>
          </View>
        </View>
      </Pressable>

      <Pressable style={{ flexDirection: "row", backgroundColor: "#d0d0d0", padding:10}}>
        <View>
          <ImageBackground
            style={{ aspectRatio: 5 / 6, height: 150 }}
            imageStyle={{ borderRadius: 10 }}
            source={require("../assets/images/class2.jpg")}
          >
            <AntDesign
              style={{ position: "absolute", top: 10, right: 10 }}
              name="hearto"
              size={24}
              color="#fff"
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: "800" }}>
          Tsinghua University
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3 }}>4.5</Text>
            <Text style={{ marginLeft: 10 }}>|</Text>
            <Text style={{ marginLeft: 10, fontSize: 13, color: "#493d8a" }}>
              2.1M
            </Text>
            <Text style={{ color: "#493d8a", fontSize: 13, marginLeft: 10 }}>
              Scholarships
            </Text>
          </View>
          <Text style={{marginTop: 10}}> 100K International Students</Text>
      <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center"}}>
            <EvilIcons name="location" size={24} color="black" />
            <Text style={{marginLeft: 5, fontWeight: "500"}}>Beijing, China</Text>
          </View>
        </View>
      </Pressable>
      
    </View>
  );
};

export default UniversityDetails;

const styles = StyleSheet.create({});
