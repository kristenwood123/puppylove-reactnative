import React, { useState, useContext, useEffect } from "react";
// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [matches, setMatches] = useState([
    // {
    //   id: "ei2roujds",
    //   name: "Bailey",
    //   breed: "Pug",
    //   image: require("./assets/images/dog5.jpg"),
    //   percent: 76,
    // },
    // {
    //   id: "eirou5jds",
    //   name: "Max",
    //   breed: "Husky",
    //   image: require("./assets/images/dog1.jpg"),
    //   percent: 50,
    // },
    // {
    //   id: "eirou3jds",
    //   name: "Bear",
    //   breed: "Husky",
    //   image: require("./assets/images/dog2.jpg"),
    //   percent: 90,
    // },
  ]);

  const onSwipeLeft = (dog) => {
    console.log("swipe left", dog.name);
  };

  const saveMatches = async (key, value) => {
    try {
      await AsyncStorage.setItem("key", "saved");
    } catch (error) {
      console.log("error");
    }
  };

  const onSwipeRight = async (key) => {
    try {
      const value = await AsyncStorage.getItem("key");
      console.log(value);
      if (value !== null) {
        return setMatches(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        onSwipeLeft,
        onSwipeRight,
        matches,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
