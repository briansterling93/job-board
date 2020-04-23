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
            {allJobs.reverse().map((i) => (
              <li key={i.id}>
                <div id="test2">
                  <div id="test1">
                    <div>
                      <h1 className="job-title">{i.title}</h1>
                    </div>
                    <div id="job-details">
                      <div className="job-detail">
                        <span id="job-detail-salary">{i.salary}</span>
                      </div>
                      <div className="job-detail">
                        <ol>
                          <li>
                            <span className="job-detail-title">
                              Requirements:
                            </span>{" "}
                            {i.tech_stack}
                          </li>
                        </ol>
                      </div>
                      <div id="job-detail-description" className="job-detail">
                        <ol>
                          <li>{i.descrip}</li>
                        </ol>
                      </div>

                      <div className="job-detail">
                        <ol>
                          <li>
                            <span className="job-detail-title">Contact:</span>{" "}
                            {i.contact}
                          </li>
                        </ol>
                      </div>
                      <div className="job-detail">
                        <ol>
                          <li>
                            <span className="job-detail-title">
                              Date Posted:
                            </span>{" "}
                            {i.createdAt}
                          </li>
                        </ol>
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
        {/* <div id="page-title">
          <h1>Current Openings</h1>
        </div> */}
        <div>{jobBoard}</div>
      </div>
    </div>
  );
};

export default AllJobs;
