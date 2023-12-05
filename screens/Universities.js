import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Pressable } from "react-native";

const Universities = () => {
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
        >
          <Text style={{fontSize: 20}}>Universities</Text>
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
          <Text style={{fontSize: 20}}>Agencies</Text>
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
          <Text style={{fontSize: 20}}>Embassy</Text>
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
          <Text style={{fontSize: 20}}>Mentors</Text>
          <AntDesign name="rightcircleo" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Universities;

const styles = StyleSheet.create({});
