import React from "react";
import { Fade } from "react-reveal";

import "./SNS.css";

const SNS = () => {
  return (
    <Fade right cascade duration={1400} delay={600}>
      <div className={"SNS-group margin-right-1"}>
        <a
          href="https://github.com/holahoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>

        <a
          href="https://www.linkedin.com/in/holahoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>

        <a href="mailto:hola.hoon@gmail.com">
          <i className="fas fa-envelope" />
        </a>
      </div>
    </Fade>
  );
};

export default SNS;
