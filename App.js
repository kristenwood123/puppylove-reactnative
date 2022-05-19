import React from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// Data
import dogs from "./assets/data/dogs";
import AnimatedStack from "././src/components/AnimatedStack.js";
import Card from "./src/components/Card";
import Home from "./src/components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MatchesScreen from "./src/screens/MatchesScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const onSwipeLeft = (dog) => {
    console.warn("swipe left", dog.name);
  };

  const onSwipeRight = (dog) => {
    console.warn("swipe right", dog.name);
    console.log("swipre right", dog.name);
  };

  return (
    <NavigationContainer>
      {/*<View style={styles.pageContainer}>*/}
      <Stack.Navigator>
        {/*<Stack.Screen name="matches" component={MatchesScreen} />*/}
        <Stack.Screen name="Puppy Love" component={Home} />
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
      {/*</View>*/}
    </NavigationContainer>
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

export default App;
