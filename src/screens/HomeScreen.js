import React, { useState } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Data
import dogs from "../../assets/data/dogs";
import AnimatedStack from "../components/AnimatedStack.js";
import Card from "../components/Card";
import Home from "../components/Home";
import MatchesScreen from "./MatchesScreen";
import { useGlobalContext } from "../../context";

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  const { onSwipeLeft, onSwipeRight } = useGlobalContext();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Puppy Love"
        component={Home}
        options={{ title: "Home" }}
      />
      <Tab.Screen name="Explore">
        {(props) => (
          <AnimatedStack
            {...props}
            data={dogs}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            renderItem={({ item }) => <Card dog={item} />}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Matches"
        options={{ title: "Matches" }}
        component={MatchesScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default HomeScreen;
