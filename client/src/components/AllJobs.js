import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../contexts/StateContext.js";
import axios from "axios";

const AllJobs = () => {
  const { state, dispatch, jobsAray } = useContext(StateContext);

  // populate all jobs function (below)
  const populateAll = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("/jobs");

      JSON.stringify(res);
      const allJobs = res.data.findAll;
      console.log(allJobs);

      await dispatch({
        type: "UPDATE_ARRAY",
        payload: (
          <div>
            <ul>
              {allJobs.map((i) => (
                <li key={i.id}>
                  <div>
                    {i.title} , {i.salary} , {i.tech_stack} ,
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ),
      });

      // await dispatch({
      //   type: "UPDATE_ARRAY",
      //   payload: allJobs.map((i) => (
      //     <div key={i.id}>
      //       {i.title}, {i.salary}
      //     </div>
      //   )),
      // });
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
