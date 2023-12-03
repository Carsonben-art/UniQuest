import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default  HomeScreen = () => {

  const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate('HomePage');
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
          <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/toplogo.png")}
          />
          <Text style={styles.logoText}>UniQuest</Text>
      </View>

      <View style={styles.image}>
          <Image 
            style={styles.hero_image}
            source={require("../assets/students.jpg")}
          />
      </View>
      {/* Welcome Text */}
      <View style={styles.heroContainer}>
        <Text style={styles.heroText}>Welcome to Uniquest</Text>
        <Text style={styles.descText}>SEARCH DREAM COURSE HERE!</Text>

        <TouchableOpacity style={styles.button} onPress={goToHomePage}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",

    },
    logo: {
        flex: 0.1,
        justifyContent: "center",
        
    },
    logoText: {
      fontSize: 18,
      color: '#493d8a',
      paddingLeft: 10,
      marginBottom: 10,
    },
    image: {
      flex: 0.6,
      justifyContent: "center",
      marginTop: 20,
    },
    hero_image: {
      width: 400,
      height: 426,
      borderRadius: 20,
    },
    heroContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    heroText: {
      fontSize: 30,
      fontWeight: '800',
      color: '#493d8a',

    },
    descText: {
      fontSize: 10,
      fontWeight: '200',
      color: '#616161'
    },
    button: {
      backgroundColor: '#493d8a',
      width: 350,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,

    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    }
})