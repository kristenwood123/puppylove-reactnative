import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [matches, setMatches] = useState([
    {
      id: "ei2roujds",
      name: "Bailey",
      breed: "Pug",
      image: require("./assets/images/dog5.jpg"),
      percent: 76,
    },
    {
      id: "eirou5jds",
      name: "Max",
      breed: "Husky",
      image: require("./assets/images/dog1.jpg"),
      percent: 50,
    },
    {
      id: "eirou3jds",
      name: "Bear",
      breed: "Husky",
      image: require("./assets/images/dog2.jpg"),
      percent: 90,
    },
  ]);

  const onSwipeLeft = (dog) => {
    console.log("swipe left", dog.name);
  };
  const onSwipeRight = (dog) => {
    // setMatches(dog);
    console.log("swipe right");
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
