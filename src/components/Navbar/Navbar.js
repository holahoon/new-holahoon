import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

import "./Navbar.css";

const navbar = () => {
  return (
    <nav className={"Navbar-container"}>
      <Fade bottom cascade duration={1000}>
        <ul className={"Navbar-ul margin-left-1"}>
          <li>
            <NavLink className={"NavLink Logo"} to="/">
              David Kim
            </NavLink>
          </li>
          {/*<li style={{ fontSize: "0.85rem", color: "#9e9e9e" }}>
            Front End Developer
  </li>*/}
        </ul>
      </Fade>

      <Fade bottom cascade duration={1500}>
        <ul className={"Navbar-ul margin-right-1"}>
          <li>
            <NavLink
              className={"NavLink"}
              activeStyle={{ color: "#343434" }}
              to="/Projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={"NavLink"} to="/">
              Contact
            </NavLink>
          </li>
        </ul>
      </Fade>
    </nav>
  );
};

export default navbar;
