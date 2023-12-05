import { StatusBar } from 'expo-status-bar';
import {  View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import HomeScreen from './components/HomeScreen';
import Onboarding from './components/Onboarding';
import HomePage from './screens/HomePage';
import LoginScreen from './screens/LoginScreen';
import CountryFilter from './screens/CountryFilter';
import Universities from './screens/Universities';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







const Loading = () =>{
  return(
  <View>
    <ActivityIndicator size="large" />
  </View>

  )
}
const Stack = createNativeStackNavigator();
export default function App() {

const [loading, setLoading] = useState(true);
const [viewedOnboarding, setViewedOnboarding] = useState(false);

const checkOnboarding = async () =>{
  try {
    const value = await AsyncStorage.getItem('@viewedOnboarding');

    if (value !== null){
      setViewedOnboarding(true);
    }
  } catch (err)  {
    console.log('Error @checkingOnboarding: ', err)
  }finally{
    setLoading(false)
  }
}

useEffect(() =>{
  checkOnboarding();
},[])

  return (


    <NavigationContainer>
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          </>
        )}
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CountryFilter" component={CountryFilter} options={{ headerShown: false }} />
            <Stack.Screen name="Universities" component={Universities} options={{ headerShown: false }} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

   


  );
}
