import React, { useState, useContext } from "react";
import axios from "axios";

//context
import { PopulateContext } from "../contexts/PopulateContext";

const AllJobs = () => {
  const { jobTitle } = useContext(PopulateContext);

  //populate all jobs function (below)
  const populateAll = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const res = await axios.get("/jobs");

      JSON.stringify(res);
      console.log(res.data.findAll);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="all-main">
      <div id="all-secondary">
        <div>{jobTitle}</div>
        <div>...</div>
        <div>
          <button onClick={populateAll}>Click me</button>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
