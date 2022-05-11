/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, Text, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import SplashScreen from './screens/splash/SplashScreen/SplashScreen';

import {colors} from "./constant";
import {Icon} from "@rneui/base";
//Home section
import Home from './screens/Home/Home'
import SingleEvent from './screens/SingleEvent/SingleEvent'
import BuyTicket from "./screens/BuyTicket/BuyTicket";
import Checkout from "./screens/Checkout/Checkout";

//Search section
import Search from "./screens/Search/Search";









const Tab = createBottomTabNavigator();

function MyTabs() {
  const theme=useColorScheme()
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{height:80,backgroundColor:theme=='dark'?colors.accent:colors.ultra}}}>
      <Tab.Screen name="Home" options={{tabBarIcon:(({focused,color,size})=>{
        return <Icon name={"home"} type={"octicon"} />
      })}} component={Home} />
      <Tab.Screen options={{tabBarIcon:(({focused,color,size})=>{
          return <Icon name={"search"} type={"octicon"} />
        })}} name="Search" component={Search} />
      <Tab.Screen options={{tabBarIcon:(({focused,color,size})=>{
          return <Icon name={"ticket"} type={"foundation"} />
        })}} name="Settings2" component={SplashScreen} />
      <Tab.Screen options={{tabBarIcon:(({focused,color,size})=>{
          return <Icon name={"hearto"} type={"antdesign"} />
        })}} name="Settings3" component={SplashScreen} />
      <Tab.Screen options={{tabBarIcon:(({focused,color,size})=>{
          return <Icon name={"account-outline"} type={"material-community"} />
        })}} name="Settings4" component={SplashScreen} />
    </Tab.Navigator>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={MyTabs} />

        <Stack.Screen name="SingleEvent" component={SingleEvent} />
        <Stack.Screen name="BuyTicket" component={BuyTicket} />
        <Stack.Screen name="Checkout" component={Checkout} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
