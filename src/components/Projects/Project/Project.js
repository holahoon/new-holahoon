import React from "react";
import { Fade } from "react-reveal";

const project = props => {
  return (
    <div className={"Project-container"} key={props.index}>
      <img src={props.project.projectName} alt={props.project.projectTitle} />

      <div className={"Project-content"}>
        <h3>
          <a
            href={props.project.projectDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.project.projectTitle}
          </a>
          <a
            href={props.project.projectGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </h3>
        <p>{props.project.projectDescription}</p>
      </div>
    </div>
  );
};

export default project;
