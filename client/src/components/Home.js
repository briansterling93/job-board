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

      let res = await axios.get("/jobs");

      JSON.stringify(res);
      const allJobs = await res.data.findAll;

      const allTechs = await allJobs.map((i) =>
        i.tech_stack.toLowerCase().split(",").join(",")
      ); //database query to populate all entered tech_stacks in sql database

      if (allTechs.includes(state.searchQuery)) {
        //function to determine if search query matches any tech_stacks in the sql database job board
        console.log("Included");
      } else {
        console.log("Not Included");
      }

      console.log(state.searchQuery);
      console.log(allTechs);
    } catch (error) {
      console.error(error);
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
              value={state.searchQuery}
              onChange={(e) =>
                dispatch({ type: "SEARCH_QUERY", payload: e.target.value })
              }
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
