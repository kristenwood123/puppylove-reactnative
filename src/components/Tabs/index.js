import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MatchesScreen from "../../screens/MatchesScreen";

const Tab = createMaterialBottomTabNavigator();

const TabScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Matches</Text>
    </View>
  );
};

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Hellloooo"
        component={TabScreen}
        options={{ tabBarLabel: "Matches" }}
      />
    </Tab.Navigator>
  );
};
