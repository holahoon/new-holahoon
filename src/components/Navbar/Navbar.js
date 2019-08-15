import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

import "./styles/Navbar.scss";

const navbar = props => {
  return (
    <nav className={"Navbar-container"}>
      <Fade bottom cascade duration={1000}>
        <ul className={"Navbar-ul margin-left-1"}>
          <li>
            <NavLink className={"Logo"} to="/">
              David Kim
            </NavLink>
          </li>
        </ul>
      </Fade>

      <Fade bottom cascade duration={1500}>
        <ul className={"Navbar-ul margin-right-1 Navbar-menu"}>
          <li>
            <NavLink
              className={"NavLink"}
              activeStyle={{ color: "#fb4b53" }}
              to="/Projects"
            >
              Projects
            </NavLink>
          </li>
          <li
            className={
              props.showModal ? "Navbar-ul-about selected" : "Navbar-ul-about"
            }
            onClick={props.openModal}
          >
            About
          </li>
        </ul>
      </Fade>
    </nav>
  );
};

export default navbar;
