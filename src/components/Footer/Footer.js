import React from "react";
import { Link } from "react-router-dom";

import dkLogo from "../../assets/images/dk-logo.png";

// import "./Footer.css";
import "./styles/Footer.scss";

const footer = () => {
  return (
    <footer className={"Footer"}>
      Copyright &copy; 2019 David Kim. All rights reserved.
      <br />
      <Link to="/">
        <img src={dkLogo} alt="dk-logo" />
      </Link>
    </footer>
  );
};

export default footer;
