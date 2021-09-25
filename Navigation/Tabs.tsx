import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          shadowOffset: { width: 10, height: 5 },
          shadowColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Foundation
                name="home"
                size={28}
                color={`${focused ? "black" : "grey"}`}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="text-search"
                size={28}
                color={`${focused ? "black" : "grey"}`}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Grocery"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="shopping-basket"
                size={28}
                color={`${focused ? "black" : "grey"}`}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="receipt"
                size={28}
                color={`${focused ? "black" : "grey"}`}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={28}
                color={`${focused ? "black" : "grey"}`}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
