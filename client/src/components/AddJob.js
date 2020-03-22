import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddJob = () => {
  return (
    <div id="main">
      <div id="main-secondary">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/jobs">All Jobs</Link>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
