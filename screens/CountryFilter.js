import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../constants/Colors";

import { Ionicons } from "@expo/vector-icons";

const CountryFilter = () => {
  return (
    <View style={{ backgroundColor: Colors.primary }}>
      <View
        style={{
          marginTop: 60,
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
        }}
      >
        <Ionicons name="arrow-back-circle" size={34} color="#fff" />
        <Text
          style={{
            marginLeft: 64,
            fontSize: 24,
            fontWeight: "800",
            color: Colors.lightPrimary,
          }}
        >
          {" "}
          Filter Countries
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: Colors.lightPrimary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>America</Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 150,
                  height: 130,
                  backgroundColor: Colors.lightPrimary,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 30 }}>
                  {"\uD83C\uDDFA\uD83C\uDDF8"}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  United States
                </Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 130,
                  backgroundColor: Colors.lightPrimary,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <Text style={{ fontSize: 30 }}>
                  {"\uD83C\uDDE7\uD83C\uDDF7"}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>Brazil</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Africa</Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 150,
                  height: 130,
                  backgroundColor: Colors.lightPrimary,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 30 }}>
                  {"\uD83C\uDDF0\uD83C\uDDEA"}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>Kenya</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 130,
                  backgroundColor: Colors.lightPrimary,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <Text style={{ fontSize: 30 }}>
                  {"\uD83C\uDDF3\uD83C\uDDEC"}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>Nigeria</Text>
              </View>
            </View>
          </View>
          {/* Asian Countries */}
          <View
            style={{
              borderColor: "#d7d7d7",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Asia</Text>
            <View style={{ flexDirection: "row" }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: Colors.lightPrimary,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {"\uD83C\uDDE8\uD83C\uDDF3"}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>China</Text>
                </View>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: Colors.lightPrimary,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {"\uD83C\uDDEE\uD83C\uDDF3"}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>India</Text>
                </View>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: Colors.lightPrimary,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {"\uD83C\uDDEF\uD83C\uDDF5"}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>Japan</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          {/* Europe */}
          <View
            style={{
              borderColor: "#d7d7d7",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Europe</Text>
            <View style={{ flexDirection: "row" }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: Colors.lightPrimary,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {"\uD83C\uDDE9\uD83C\uDDEA"}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    Germany
                  </Text>
                </View>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: Colors.lightPrimary,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {"\uD83C\uDDEB\uD83C\uDDF7"}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    France
                  </Text>
                </View>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: Colors.lightPrimary,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {"\uD83C\uDDEA\uD83C\uDDF8"}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>Spain</Text>
                </View>
                <View
                  style={{
                    width: 150,
                    height: 130,
                    backgroundColor: Colors.lightPrimary,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {"\uD83C\uDDEE\uD83C\uDDF9"}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>Italy</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CountryFilter;

const styles = StyleSheet.create({});
