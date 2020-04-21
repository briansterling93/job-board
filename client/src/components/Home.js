import React, { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext.js";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useContext(StateContext);
  const [userQuery, setQuery] = useState("");
  const [jobList, setJobList] = useState([]);

  //handle ui search func (below)
  const handleQuery = async () => {
    try {
      if (!userQuery) {
        console.log("Please try another search");
      }

      let res = await axios.get(`jobs/queried/` + userQuery);

      // console.log(res.data.findEm[0]);

      setJobList(
        res.data.findEm.map((e) => (
          <div>
            <ul key={e.id}>
              <li>{e.title}</li>
              <li>{e.salary}</li>
              <li>{e.tech_stack}</li>
              <li>{e.descrip}</li>3<li>{e.createdAt}</li>
            </ul>
          </div>
        ))
      );

      // await dispatch({
      //   type: "QUERIED_JOB", //render the searched jobs into a new component
      //   payload: jobList,
      // });
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
              // maxLength="12"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Node, React, Java, etc.."
            />
            <div id="btn-div">
              <button onClick={handleQuery} id="home-btn">
                Search
              </button>
              {jobList}
              {/* {state.queriedJob} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
