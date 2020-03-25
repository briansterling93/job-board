import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AllJobs from "./AllJobs";
import AddJob from "./AddJob";
import Navbar from "./Navbar";

//Context
import PopulateContextProvider from "../contexts/PopulateContext.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Fragment>
        <Route exact path="/" component={Home} />

        <Switch>
          <PopulateContextProvider>
            <Route exact path="/jobs" component={AllJobs} />
            <Route exact path="/jobs/add" component={AddJob} />
          </PopulateContextProvider>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
