import React, { Component } from "react";
import { Fade } from "react-reveal";

import Project from "./Project/Project";

import remnantMinistry from "../../assets/images/movies_app.png";
import zunSungAn from "../../assets/images/zunsungan.png";
import fivie from "../../assets/images/movies_app.png";
import zigoGraph from "../../assets/images/cryptocurrency_graph.png";
import onTheCloud from "../../assets/images/weather_app.png";
import firstHolaHoon from "../../assets/images/movies_app.png";

import "./Projects.css";

class Projects extends Component {
  state = {
    projects: [
      {
        projectName: remnantMinistry,
        projectTitle: "Remnant Ministry",
        projectDescription:
          "Web service for users to view different events and register",
        projectDemo: "holahoon.com",
        projectGithub: "https://github.com/holahoon"
      },
      {
        projectName: zunSungAn,
        projectTitle: "Jun Sung An",
        projectDescription: "Portfolio built for a designer",
        projectDemo: "holahoon.com",
        projectGithub: "https://github.com/holahoon"
      },
      {
        projectName: fivie,
        projectTitle: "Fivie",
        projectDescription:
          "Single page movie application collaborated with a designer",
        projectDemo: "holahoon.com",
        projectGithub: "https://github.com/holahoon"
      },
      {
        projectName: firstHolaHoon,
        projectTitle: "Personal portfolio",
        projectDescription:
          "Previous personal portfolio collaborated with a designer",
        projectDemo: "holahoon.com",
        projectGithub: "https://github.com/holahoon"
      },
      {
        projectName: zigoGraph,
        projectTitle: "ZigoGraph",
        projectDescription:
          "A data viz application displaying cryptocurrency(Bitcoin) value",
        projectDemo: "holahoon.com",
        projectGithub: "https://github.com/holahoon"
      },
      {
        projectName: onTheCloud,
        projectTitle: "OntheCloud",
        projectDescription:
          "A weather application that displays weather information of the current or searched city",
        projectDemo: "holahoon.com",
        projectGithub: "https://github.com/holahoon"
      }
    ]
  };

  render() {
    return (
      <Fade duration={1500} delay={400}>
        <section className={"Projects margin-left-1 margin-right-1"}>
          {this.state.projects.map((project, index) => {
            return <Project project={project} index={index} />;
          })}
          {/*<Fade bottom duration={1500} delay={400}>
          {this.state.projects.map((project, index) => {
            return <Project project={project} index={index} />;
          })}
        </Fade>*/}
        </section>
      </Fade>
    );
  }
}

export default Projects;
