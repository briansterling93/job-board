import React, { useContext } from "react";
import { StateContext } from "../contexts/StateContext.js";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useContext(StateContext);
  const handleQuery = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      let res = await axios.get("/jobs/test");

      const searchQuery = res.data.findEm;
      JSON.stringify(searchQuery);
      console.log(searchQuery);
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
            <input placeholder="Node, React, Java, etc.." />
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
