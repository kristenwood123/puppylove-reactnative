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
  ]);

  const onSwipeLeft = (dog) => {
    console.log("swipe left", dog.name);
  };
  let onSwipeRight = (dog) => {
    setMatches(dog);
  };

  onSwipeRight = (dog) => {
    setMatches(dog);
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
