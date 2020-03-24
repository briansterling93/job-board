import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddJob = () => {
  return (
    <div id="post-main">
      <div id="post-secondary">
        <div id="form-main">
          <div id="form-secondary">
            <div className="form-input">
              <h2>Job Title</h2>
              <input placeholder="Job Title" />
            </div>
            <div className="form-input">
              <h2>Technologies Required</h2>
              <input placeholder="Python, C#, Java, React, etc.." />
            </div>
            <div className="form-input">
              <h2>Salary</h2>
              <input placeholder="Annual Salary" />
            </div>
            <div className="form-input">
              <h2>Job Description</h2>
              <input placeholder="Job Description" />
            </div>
            <div className="form-input">
              <h2>Contact Email</h2>
              <input placeholder="Contact Email Address" />
            </div>
            <div className="form-input">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
