import { createContext } from "react";

export const StateContext = createContext();

export const initialState = {
  title: "",
  tech_stack: "",
  salary: "",
  descrip: "",
  contact: "",
  searchedJob: "hello",
  queriedJob: [],
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

  SEARCH_JOB: (state, actions) => {
    return { ...state, searchedJob: actions.payload };
  },

  QUERY_JOB: (state, actions) => {
    return { ...state, queriedJob: actions.payload };
  },

  CLEAR_FORM: (state, actions) => {
    return { title: "", tech_stack: "", salary: "", descrip: "", contact: "" };
  },
};

export const reducer = (state, action) => {
  return appActions[action.type](state, action);
};

export default StateContext;
