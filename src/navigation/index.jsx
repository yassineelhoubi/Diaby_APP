import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Platform, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../constants/theme";

import { TabBarIcon, MapButton } from "../components/index";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Home from "../screens/Home";
import Options from "../screens/Options";
import Profile from "../screens/Profile";
import AddPost from "../screens/AddPost";
import { HealthScreen, SearchScreen, WelcomeScreen, SignUpScreen , SignInScreen} from "../screens";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "ios" ? 80 : 60,
        },
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={<Ionicons name="heart-outline" size={24} color="black" />}
              name="Profile"
              source={require("../../assets/png/user.png")}
              isFocuse={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="Search"
              source={require("../../assets/png/search_active.png")}
              isFocuse={focused}
            />
          ),
        }}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name="Home"
        component={Home}
        listeners={["tabPress"]}
        options={{
          title: "Diaby",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          onPress: () => {
            console.log("clicked");
          },
          headerTitleStyle: {
            color: COLORS.primary,
            ...FONTS.h2,
          },
          tabBarIcon: ({ focused }) => <MapButton isFocuse={focused} />
        }}
      />
      <BottomTab.Screen
        name="Health"
        component={HealthScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="Health"
              source={require("../../assets/png/health-heart.png")}
              isFocuse={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Options}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="Settings"
              source={require("../../assets/png/settings.png")}
              isFocuse={focused}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}


function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeNavigator"
        component={WelcomeNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


function WelcomeNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
