import React from "react";

import "./SNS.css";

const SNS = () => {
  return (
    <div className={"SNS-group margin-right-1"}>
      <a href="mailto:hola.hoon@gmail.com">
        <i className="fas fa-at" />
      </a>

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
    </div>
  );
};

export default SNS;
