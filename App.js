import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import { AppProvider } from "./context";

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </AppProvider>
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
