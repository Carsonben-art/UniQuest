import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import countries from "../data/countries";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CountryFilter = () => {
  const data = countries;

  const navigation = useNavigation();
  const viewUniversities = () => {
    navigation.navigate("Universities");
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: Colors.primary }}>
        {/* Title */}
        <View
          style={{
            marginTop: 60,
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="arrow-back-circle" size={34} color="#fff" />
          <Text
            style={{
              // marginLeft: 64,
              fontSize: 24,
              fontWeight: "800",
              color: Colors.lightPrimary,
            }}
          >
            Select Country
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
          {/* Map Countries Here... */}
          {data.map((item, index) => (
            <View
              key={item.id}
              style={{
                borderColor: Colors.gray,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 10,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                {item.Continent}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {item.countries.map((country) => (
                    <Pressable
                      key={country.id}
                      onPress={viewUniversities}
                      style={{
                        width: 140,
                        height: 130,
                        borderColor: "#d0d0d0",
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 5,
                      }}
                    >
                      <Text>{country.unicode}</Text>
                      <Text>{country.name}</Text>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryFilter;

const styles = StyleSheet.create({});
