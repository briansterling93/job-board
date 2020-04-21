import React, { Fragment, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StateContext, {
  initialState,
  reducer,
} from "../contexts/StateContext.js";
import Home from "./Home";
import AllJobs from "./AllJobs";
import AddJob from "./AddJob";
import QueriedJob from "./QueriedJob";
import Navbar from "./Navbar";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />

        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/jobs" component={AllJobs} />
            <Route exact path="/jobs/add" component={AddJob} />
            <Route exact path="/jobs/queried" component={QueriedJob} />
          </Switch>
        </Fragment>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
