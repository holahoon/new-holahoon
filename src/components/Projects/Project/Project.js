import React from "react";

const project = props => {
  return (
    <div className={"Project-container"}>
      <a
        className={"Project-image"}
        href={props.project.projectDemo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.project.projectName} alt={props.project.projectTitle} />
      </a>

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
