import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../contexts/StateContext.js";
import axios from "axios";

const AllJobs = () => {
  const { state, dispatch } = useContext(StateContext);
  const [jobBoard, setJobBoard] = useState([]);

  useEffect(() => {
    populateAll();
  }, []);

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

      setJobBoard(
        <div>
          <ul>
            {allJobs.map((i) => (
              <li key={i.id}>
                <div id="test2">
                  <div id="test1">
                    <div>
                      <h1>{i.title}</h1>
                    </div>
                    <div id="job-details">
                      <div className="job-detail">
                        <span className="job-detail-title">Tech Stack:</span>{" "}
                        {i.tech_stack}
                      </div>
                      <div className="job-detail">
                        <span className="job-detail-title">Description:</span>{" "}
                        {i.descrip}
                      </div>
                      <div className="job-detail">
                        <span className="job-detail-title">Salary:</span>{" "}
                        {i.salary}
                      </div>
                      <div className="job-detail">
                        <span className="job-detail-title">Contact:</span>{" "}
                        {i.contact}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="all-main">
      <div id="all-secondary">
        <div>{jobBoard}</div>
      </div>
    </div>
  );
};

export default AllJobs;
