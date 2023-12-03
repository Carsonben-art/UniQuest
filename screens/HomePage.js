import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import TopCourses from "./TopCourses";

const HomePage = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  topCourses: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
