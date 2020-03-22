import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-main">
      <div id="home-secondary">
        <div id="main-title">Dev Remote</div>
        <div id="sec-title">
          Search for a job, get hired, and work as a completely remote developer
        </div>
        <div id="home-search">
          <input placeholder="Node, React, Java, etc.." />
        </div>
        <div id="home-btn">
          <button>Search</button>
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
