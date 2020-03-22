import React from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  return (
    <div>
      <div id="main">
        <div id="main-secondary">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/jobs/add">Add Jobs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
