import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import AppTextInput from "../components/AppTextInput";

const LoginScreen = () => {
    const navigation = useNavigation();

    const goToHomePage = () => {
      navigation.navigate('HomePage');
    //   navigation.navigate("Login");
    };
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: Colors.primary,
              fontWeight: "800",
            //   fontFamily: Font["poppins-bold"],
              marginVertical: 40,
            }}
          >
            UniQuest
          </Text>
          <Text
            style={{
            //   fontFamily: Font["poppins-semiBold"],
              fontSize: 20,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back!
          </Text>
        </View>
        <View
          style={{
            marginVertical: 30,
          }}
        >
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
        </View>

        <View>
          <Text
            style={{
              // fontFamily: Font["poppins-semiBold"],
              fontSize: 15,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: Colors.primary,
            marginVertical: 30,
            borderRadius: 10,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
  onPress={goToHomePage}
        >
          <Text
            style={{
              // fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: 25,
              fontWeight: "800",
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigate("Register")}
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              // fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: 30,
          }}
        >
          <Text
            style={{
              // fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Colors.gray,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-google" color={Colors.text} size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Colors.gray,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-apple" color={Colors.text} size={10 * 2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Colors.gray,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={10 * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
