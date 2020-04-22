import React, { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext.js";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useContext(StateContext);
  const [userQuery, setQuery] = useState("");

  //handle ui search query
  const handleQuery = async () => {
    try {
      if (!userQuery) {
        console.log("Please try another search");
      }

      let res = await axios.get(`jobs/queried/` + userQuery);

      const findQuery = res.data.findEm;

      await dispatch({
        type: "QUERY_JOB",
        payload: findQuery.map((i) => (
          <ul>
            <li key={i.length}>
              <div id="test2">
                <div id="test1">
                  <div>
                    <h1 className="job-title">{i.title}</h1>
                  </div>
                  <div id="job-details">
                    <div className="job-detail">
                      {/* <span className="job-detail-title">Salary - </span>{" "} */}
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
                          <span className="job-detail-title">Date Posted:</span>{" "}
                          {i.createdAt}
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        )),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="home-main">
      <div id="home-secondary">
        <div id="main-title">Dev Remote</div>
        <div id="sec-title">
          Search for a job, get hired, and work as a completely remote developer
        </div>
        <div id="home-query">
          <div id="home-search">
            <input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a technology (React, Node, Etc..)"
            />
            <div id="btn-div">
              <button onClick={handleQuery} id="home-btn">
                Search
              </button>
              <Link to="/jobs/queried">Test</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
