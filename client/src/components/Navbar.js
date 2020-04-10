import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar-main">
      <div id="navbar-div">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">View Jobs</Link>
            </li>
            <li>
              <Link to="/jobs/add">Post Job</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
