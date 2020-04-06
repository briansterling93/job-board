import React, { useState, useContext } from "react";
import { StateContext } from "../contexts/StateContext.js";
import axios from "axios";

const AllJobs = () => {
  const { state, dispatch } = useContext(StateContext);

  //populate all jobs function (below)
  const populateAll = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("/jobs");

      JSON.stringify(res);
      const gg = res.data.findAll;

      // console.log(gg[0]);
      // console.log(res.data.findAll);

      await dispatch({
        // update job board
        type: "UPDATE_ARRAY",
        payload: gg[0],
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
          {/* <div>
            <ul>
              {state.jobsArray.map((i) => (
                <li key={i.id}>{i.value}</li>
              ))}
            </ul>
          </div> */}
        </div>
        <div>
          <ul>
            {state.jobsArray.map((i) => (
              <li key={i.id}>{i.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
