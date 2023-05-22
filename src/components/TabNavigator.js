import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import MainScreen from "../screens/MainScreen";
import Forums from "../screens/forums";
import Therapy from "../screens/therapy";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InsightsProfile from "../screens/InsightsProfile";
import DailyTasks from "../screens/dailyReminder/dailyTasks";
import Navigation from "./Navigation";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Navigation}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Ionicons name="md-home-outline" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forums}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="forum-outline"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen name="Therapy" component={Therapy} />
      <Tab.Screen name="Task" component={DailyTasks} />
      <Tab.Screen
        name="Insight Profile"
        component={InsightsProfile}
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
