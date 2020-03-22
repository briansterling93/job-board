import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AllJobs from "./AllJobs";
import AddJob from "./AddJob";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={AllJobs} />
        <Route exact path="/jobs/add" component={AddJob} />
      </Fragment>
    </Router>
  );
};

export default App;
