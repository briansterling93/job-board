import React from "react";

const Home = () => {
  return (
    <div id="home-main">
      <div id="home-secondary">
        <div id="main-title">Dev Remote</div>
        <div id="sec-title">
          Search for a job, get hired, and work as a completely remote developer
        </div>
        <div id="home-search">
          <input
            type="search"
            results="0"
            placeholder="Node, React, Java, etc.."
          />
        </div>
        <div id="home-btn">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
