import React, { useContext } from "react";
import { StateContext } from "../contexts/StateContext.js";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useContext(StateContext);

  //handle ui search query
  const handleQuery = async () => {
    try {
      if (!state.searchedJob) {
        console.log("Please try another search");
      } else {
        let res = await axios.get(`jobs/queried/` + state.searchedJob);

        const findQuery = res.data.findEm;

        await dispatch({
          type: "QUERY_JOB",
          payload: findQuery.reverse().map((i) => (
            <ul>
              <li key={i.length}>
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
            </ul>
          )),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //method to handle onChange input & query job results
  const handleSearch = (e) => {
    dispatch({ type: "SEARCH_JOB", payload: e.target.value });
    handleQuery();
  };

  //error handling if no queries found
  const handleError = async () => {
    try {
      if (state.queriedJob.length < 1) {
        await dispatch({
          type: "QUERY_JOB",
          payload: (
            <div id="query-error-div">
              <div id="query-error">
                <div id="query-face">:(</div>
                <div>
                  <p>
                    No current roles are available yet regarding your search,
                    feel free to check back later or{" "}
                    <NavLink to="/">search for another technology</NavLink>
                  </p>
                </div>
              </div>
            </div>
          ),
        });
      }
    } catch (error) {
      console.error(error.message);
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
              type="text"
              maxLength="15"
              onChange={handleSearch}
              placeholder="Enter a technology (React, Node, Etc..)"
            />

            <div id="btn-div">
              <NavLink to="/jobs/queried">
                <button onClick={handleError} id="home-btn">
                  Search
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
