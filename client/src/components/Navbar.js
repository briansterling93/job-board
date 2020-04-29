import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setToggle] = useState("");

  //nav bar toggle functionality
  const handle = () => {
    setToggle((document.getElementById("nav-ul").style.display = "block"));

    if (
      showNav === (document.getElementById("nav-ul").style.display = "block")
    ) {
      setToggle((document.getElementById("nav-ul").style.display = "none"));
    }
  };

  return (
    <div id="navbar-main">
      <div id="navbar-div">
        <nav>
          <div id="toggle">
            <i
              onClick={handle}
              value={showNav}
              class="fa fa-bars menu"
              aria-hidden="true"
            ></i>
          </div>
          <ul id="nav-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">View All Jobs</Link>
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
