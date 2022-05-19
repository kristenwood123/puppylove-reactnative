import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Data
import dogs from "../../assets/data/dogs";
import AnimatedStack from "../components/AnimatedStack.js";
import Card from "../components/Card";
import Home from "../components/Home";
import MatchesScreen from "./MatchesScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const onSwipeLeft = (dog) => {
    console.warn("swipe left", dog.name);
  };

  const onSwipeRight = (dog) => {
    console.warn("swipe right", dog.name);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Puppy Love" component={Home} />
      <Stack.Screen name="Matches" component={MatchesScreen} />
      <Stack.Screen name="Explore">
        {(props) => (
          <AnimatedStack
            {...props}
            data={dogs}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            renderItem={({ item }) => <Card dog={item} />}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
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
