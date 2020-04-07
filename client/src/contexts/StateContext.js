import { createContext } from "react";
import e from "express";

export const StateContext = createContext();

export const initialState = {
  title: "",
  tech_stack: "",
  salary: "",
  descrip: "",
  contact: "",
  jobsArray: "",
};

export const appActions = {
  UPDATE_TITLE: (state, actions) => {
    return { ...state, title: actions.payload };
  },

  UPDATE_TECH: (state, actions) => {
    return { ...state, tech_stack: actions.payload };
  },

  UPDATE_SALARY: (state, actions) => {
    return { ...state, salary: actions.payload };
  },

  UPDATE_DESCRIPTION: (state, actions) => {
    return { ...state, descrip: actions.payload };
  },

  UPDATE_CONTACT: (state, actions) => {
    return { ...state, contact: actions.payload };
  },

  // UPDATE_ARRAY: (state, actions) => {
  //   return {
  //     jobsArray: [
  //       ...state.jobsArray,
  //       { id: state.jobsArray.length, value: actions.payload },
  //     ],
  //   };
  // },

  UPDATE_ARRAY: (state, actions) => {
    return {
      ...state,
      jobsArray: actions.payload,
    };
  },

  CLEAR_FORM: (state, actions) => {
    return { title: "", tech_stack: "", salary: "", descrip: "", contact: "" };
  },
};

export const reducer = (state, action) => {
  return appActions[action.type](state, action);
};

export default StateContext;
