import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import MainScreen from "../screens/MainScreen";
import Forums from "../screens/forums";
import Tasks from "../screens/tasks";
import Therapy from "../screens/therapy";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Forum" component={Forums} />
      <Tab.Screen name="Therapy" component={Therapy} />
      <Tab.Screen name="Task" component={Tasks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
