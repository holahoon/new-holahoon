import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

import "./Navbar.css";

const navbar = props => {
  // const mobileMenu = (
  //   <ul className={"Navbar-ul margin-right-1 mobile-menu"}>
  //     <li />
  //     <li />
  //     <li />
  //   </ul>
  // );

  // const navbarMenu = (
  //   <ul className={"Navbar-ul margin-right-1 Navbar-menu"}>
  //     <li>
  //       <i className="fas fa-bars" />
  //     </li>
  //     <li>
  //       <NavLink
  //         className={"NavLink"}
  //         activeStyle={{ color: "#fb4b53" }}
  //         to="/Projects"
  //       >
  //         Projects
  //       </NavLink>
  //     </li>
  //     <li
  //       className={
  //         props.showModal ? "Navbar-ul-about selected" : "Navbar-ul-about"
  //       }
  //       onClick={props.openModal}
  //     >
  //       About
  //       {/*<NavLink
  //       className={"NavLink"}
  //       activeStyle={{ color: "#fb4b53" }}
  //       to="/Contact"
  //     >
  //       Contact
  //     </NavLink>*/}
  //     </li>
  //   </ul>
  // );

  return (
    <nav className={"Navbar-container"}>
      <Fade bottom cascade duration={1000}>
        <ul className={"Navbar-ul margin-left-1"}>
          <li>
            <NavLink className={"Logo"} to="/">
              DAVID KIM
            </NavLink>
          </li>
        </ul>
      </Fade>

      <Fade bottom cascade duration={1500}>
        <ul className={"Navbar-ul margin-right-1 Navbar-menu"}>
          {/*<li>
            <i className="fas fa-bars mobile-menu" />
          </li>*/}
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
            {/*<NavLink
        className={"NavLink"}
        activeStyle={{ color: "#fb4b53" }}
        to="/Contact"
      >
        Contact
      </NavLink>*/}
          </li>
        </ul>
      </Fade>
    </nav>
  );
};

export default navbar;
