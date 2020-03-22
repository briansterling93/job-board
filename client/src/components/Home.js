import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="main">
      <div id="main-secondary">
        <div>
          <input placeholder="Search for a job" />
        </div>
        <div>
          <Link to="/jobs">View all jobs</Link>
        </div>
        <div>
          <Link to="/jobs/add">Add a new job</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
