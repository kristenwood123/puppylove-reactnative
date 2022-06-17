import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import dogs from "../../assets/data/dogs";

const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "#cc63c7" }}>
          New Matches
        </Text>
        <View style={styles.dogs}>
          {dogs.map((dog) => {
            const { image, id } = dog;
            return (
              <View style={styles.dog} key={id}>
                <Image source={image} style={styles.image} />
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  dogs: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dog: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 2,
    borderColor: "#cc63c7",
    borderRadius: 50,
    padding: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});
export default MatchesScreen;
