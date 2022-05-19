import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const Card = (props) => {
  const { name, breed, image } = props.dog;
  console.log("asdasd", props.image);
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.breed}>{breed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: "85%",
    borderRadius: 10,
    shadowColor: "#000",
    backgroundColor: "pink",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image: {
    width: "90%",
    height: "70%",
    marginTop: 20,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  breed: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    lineHeight: 25,
  },
});

export default Card;
