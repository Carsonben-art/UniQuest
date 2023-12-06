import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import PopularUniversities from "../components/PopularUniversities";
import UniversityDetails from "../components/UniversityDetails";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const UniversityListing = () => {
  return (
    <ScrollView>

    
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

        <View
          style={{
            backgroundColor: Colors.lightPrimary,
            flexDirection: "row",
            alignItems: "center",
            padding: 7,
            borderRadius: 8,
            width: 250,
            justifyContent: "space-between",
          }}
        >
          <TextInput placeholder="Search University. " />
          <AntDesign name="search1" size={24} color="#493d8a" />
        </View>
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
        <View>
          <Text
            style={{
              fontSize: 20,
              color: Colors.primary,
              marginTop: 10,
              marginLeft: 10,
              fontWeight: "800",
            }}
          >
            Top Universities
          </Text>
          <View>
            <UniversityDetails/>
          </View>
        </View>
        <PopularUniversities />
      </View>
    </View>
    </ScrollView>
  );
};

export default UniversityListing;

const styles = StyleSheet.create({});
