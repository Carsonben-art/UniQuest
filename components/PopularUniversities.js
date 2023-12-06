import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import universities from "../data/universities";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const PopularUniversities = () => {
  const data = universities;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 15,
            fontWeight: "800",
            color: "#493d8a",
          }}
        >
          Top Offers
        </Text>
        <TouchableOpacity>
          <AntDesign name="menufold" size={34} color="#493d8a" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => ( 
          <Pressable style={{ margin: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 6 / 6, height: 150 }}
              source={item.image}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#fff",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3 }}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}>|</Text>
              <Text style={{ marginLeft: 3, fontSize: 13, color: "#493d8a" }}>
                {" "}
                {item.stars}{" "}
              </Text>
              <Text style={{ color: "#493d8a", fontSize: 13 }}>Stars</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularUniversities;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
