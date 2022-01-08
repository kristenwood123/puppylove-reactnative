import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const MatchesScreen = () => {
  return (
    <SafeAreaView style={{styles.root}}>
      <Text style={{ fontWeight: "bold", fontSize: 24, fontColor: "#cc63c7"}}>
        New Matches
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,

  }
})
export default MatchesScreen;
