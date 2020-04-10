import React, { useContext, useEffect } from "react";
import { StateContext } from "../contexts/StateContext.js";
import axios from "axios";

const AllJobs = () => {
  const { state, dispatch } = useContext(StateContext);

  // useEffect(() => {
  //   populateAll();
  // }, []);

  // populate all jobs function (below)
  const populateAll = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      let res = await axios.get("/jobs");

      JSON.stringify(res);
      const allJobs = await res.data.findAll;

      console.log(allJobs);

      const y = await dispatch({
        type: "UPDATE_ARRAY",
        payload: (
          <div>
            <ul>
              {allJobs.map((i) => (
                <li key={i.id}>
                  <div id="test2">
                    <div id="test1">
                      <div>Job Title: {i.title}</div>
                      <div>Tech Stack: {i.tech_stack}</div>
                      <div>Salary: {i.salary}</div>
                      <div>Contact: {i.contact}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="all-main">
      <div id="all-secondary">
        <div>
          <button onClick={populateAll}>Click me</button>
        </div>

        <ul>
          {state.jobsArray.map((i) => (
            <li key={i.id}>{i.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllJobs;
