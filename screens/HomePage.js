import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



import Carousel from "../components/Carousel";
import TopCourses from "./TopCourses";
import PopularUniversities from "../components/PopularUniversities";
import UniversityDetails from "../components/UniversityDetails";

import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomePage = () => {
  const navigation = useNavigation();

    const goToCountryFilter = () => {
      navigation.navigate('CountryFilter');
    
    };
  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search for Course or University. " />
        <AntDesign name="search1" size={24} color="#493d8a" />
      </View>
      <View style={styles.carousel}>
        <Carousel />
      </View>
      <View style={styles.topCourses}>
        <TopCourses />
      </View>
      <View style={styles.popularUniversities}>
        <PopularUniversities />
      </View>

      {/* Filter Buttons */}
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      <Pressable
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#d7d7d7",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text>Filter</Text>
        <Ionicons name="filter-outline" size={24} color="black" />
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#d7d7d7",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
        }}
        onPress={goToCountryFilter}
      >
        <Text>Countries</Text>
        {/* <Ionicons name="filter-outline" size={24} color="black" /> */}
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#d7d7d7",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text>Scholarships</Text>
        {/* <Ionicons name="filter-outline" size={24} color="black" /> */}
      </Pressable>

      </View>
      {/* University details */}
      <UniversityDetails />

    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#493d8a",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "90%",
  },
  carousel: {
    flex: 0.26,
    justifyContent: "center",
    alignItems: "center",
  },
  topCourses: {
    flex: 0.14,
    justifyContent: "center",
    alignItems: "center",
backgroundColor: "#fff",
  },
  popularUniversities: {
    flex: 0.2,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#d7d7d7",
    width: "100%",
    borderTopColor: "#fff",
    borderTopWidth: 1,
  },
});
