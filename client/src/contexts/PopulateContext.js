import React, { useState, createContext } from "react";

export const PopulateContext = createContext();

const PopulateContextProvider = props => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescrip, setJobDescrip] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobTechStack, setJobTechStack] = useState("");

  return (
    <PopulateContext.Provider
      value={{
        jobTitle,
        setJobTitle,
        jobDescrip,
        setJobDescrip,
        jobSalary,
        setJobSalary,
        jobTechStack,
        setJobTechStack
      }}
    >
      {props.children}
    </PopulateContext.Provider>
  );
};

export default PopulateContextProvider;
