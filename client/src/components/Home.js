import React, { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext.js";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useContext(StateContext);
  const [userQuery, setQuery] = useState("");

  //handle ui search func (below)
  const handleQuery = async () => {
    try {
      if (!userQuery) {
        console.log("You must enter a job search");
      } else {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(userQuery);

        // const res = await axios.get(`jobs/test/`, body, config);

        const res = await axios.get(`jobs/test/`, body, config);

        // console.log(body);
        console.log(res.data);
      }
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
              placeholder="Node, React, Java, etc.."
            />
            <div id="btn-div">
              <button onClick={handleQuery} id="home-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
