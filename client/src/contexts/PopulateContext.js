import React, { useState, createContext } from "react";

export const PopulateContext = createContext();

const PopulateContextProvider = props => {
  const [jobTitle, setJobTitle] = useState("");

  return (
    <PopulateContext.Provider value={{ jobTitle, setJobTitle }}>
      {props.children}
    </PopulateContext.Provider>
  );
};

export default PopulateContextProvider;
