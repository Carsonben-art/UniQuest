import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Universities = () => {
  const navigation = useNavigation();

  const listUniversities = () => {
    navigation.navigate("UniversityListing");
  };
  return (
    <View style={{ backgroundColor: Colors.primary }}>
      <View
        style={{
          marginTop: 60,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <Ionicons name="arrow-back-circle" size={30} color="white" />
        <Text style={{ fontSize: 15, color: Colors.lightPrimary }}>
          Select from United States
        </Text>
        <FontAwesome name="user-circle-o" size={30} color="white" />
      </View>
      <View
        style={{
          backgroundColor: Colors.lightPrimary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 10,
        }}
      >
        <Pressable
          style={{
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 80,
            marginTop: 15,
            backgroundColor: Colors.gray,
          }}
          onPress={listUniversities}
        >
          <Image
            source={require("../assets/images/university.jpg")}
            style={{ width: 40, height: 40, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 20 }}>Universities</Text>
          <AntDesign name="rightcircleo" size={30} color="black" />
        </Pressable>
        <Pressable
          style={{
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 80,
            marginTop: 15,
            // backgroundColor: Colors.gray,
          }}
        >
          <Image
            source={require("../assets/images/agency.png")}
            style={{ width: 40, height: 40, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 20 }}>Agencies</Text>
          <AntDesign name="rightcircleo" size={30} color="black" />
        </Pressable>
        <Pressable
          style={{
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 80,
            marginTop: 15,
            backgroundColor: Colors.gray,
          }}
        >
          <Image
            source={require("../assets/images/embassy.png")}
            style={{ width: 40, height: 40, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 20 }}>Embassy</Text>
          <AntDesign name="rightcircleo" size={30} color="black" />
        </Pressable>
        <Pressable
          style={{
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 80,
            marginTop: 15,
          }}
        >
          <Image
        source={require("../assets/images/mentor.png")}
            style={{ width: 40, height: 40, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 20 }}>Mentors</Text>
          <AntDesign name="rightcircleo" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Universities;

const styles = StyleSheet.create({});
