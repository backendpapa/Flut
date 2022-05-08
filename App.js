/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from './screens/splash/SplashScreen/SplashScreen';
import SingleEvent from './screens/SingleEvent/SingleEvent'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={SplashScreen} />
      <Tab.Screen name="Settings" component={SplashScreen} />
    </Tab.Navigator>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Welcome" component={SingleEvent} />


        <Stack.Screen name="HomeScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;