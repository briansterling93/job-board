import { createContext, useState } from "react";

export const StateContext = createContext();

export const initialState = {
  title: "",
  tech_stack: "",
  salary: "",
  descrip: "",
  contact: "",
  searchQuery: "",
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

  // SEARCH_QUERY: (state, actions) => {
  //   return { ...state, searchQuery: actions.payload.toLowerCase() };
  // },

  CLEAR_FORM: (state, actions) => {
    return { title: "", tech_stack: "", salary: "", descrip: "", contact: "" };
  },
};

export const reducer = (state, action) => {
  return appActions[action.type](state, action);
};

export default StateContext;
