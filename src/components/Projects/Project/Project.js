import React from "react";

import githubLogo from "../../../assets/images/github-icon.svg";

const project = props => {
  let projectImageDisable = <span className={"view-project"}>in progress</span>;
  let projectImageLink = (
    <a
      className={"view-project"}
      href={props.project.projectDemo}
      target="_blank"
      rel="noopener noreferrer"
    >
      view project
    </a>
  );

  let projectDisable = <div>{props.project.projectTitle}</div>;
  let projectLink = (
    <a
      href={props.project.projectDemo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.project.projectTitle}
    </a>
  );

  return (
    <div className={"Project-container"}>
      <div className={"image-container"}>
        <img
          src={props.project.projectName}
          alt={props.project.projectTitle}
          className={"project-image"}
        />
        {props.project.projectDemo === ""
          ? projectImageDisable
          : projectImageLink}
      </div>

      <div className={"Project-content"}>
        <h3>
          {props.project.projectDemo === "" ? projectDisable : projectLink}

          <a
            href={props.project.projectGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="Github-logo" />
          </a>
        </h3>
        <p>{props.project.projectDescription}</p>
      </div>
    </div>
  );
};

export default project;
