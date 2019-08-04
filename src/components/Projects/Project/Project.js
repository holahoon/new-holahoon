import React from "react";

// import githubLogo from "../../../assets/images/github-logo.svg";

const project = props => {
  let projectDisable = (
    <div>
      {props.project.projectTitle}
      <span>(being developed)</span>
    </div>
  );
  let projectLink = (
    <a
      href={props.project.projectDemo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.project.projectTitle}
      <span>(view project)</span>
    </a>
  );

  let projectImageDisable = (
    <span className={"view-project"}>being developed</span>
  );
  let projectImageLink = (
    <span className={"view-project"}>
      <a
        href={props.project.projectDemo}
        target="_blank"
        rel="noopener noreferrer"
      >
        view project
      </a>
    </span>
  );

  return (
    <div className={"Project-container"}>
      <img
        src={props.project.projectName}
        alt={props.project.projectTitle}
        className={"project-image"}
      />
      {props.project.projectDemo === ""
        ? projectImageDisable
        : projectImageLink}
      {/*<span className={"view-project"}>
        <a
          href={props.project.projectDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project
        </a>
  </span>*/}
      {/*<a
        href={props.project.projectDemo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.project.projectName} alt={props.project.projectTitle} />
      </a>*/}

      <div className={"Project-content"}>
        <h3>
          {props.project.projectDemo === "" ? projectDisable : projectLink}

          <a
            href={props.project.projectGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            {/*<img
              src={githubLogo}
              alt="github logo"
              className={"github-link-logo"}
            />*/}
          </a>
        </h3>
        <p>{props.project.projectDescription}</p>
      </div>
    </div>
  );
};

export default project;
