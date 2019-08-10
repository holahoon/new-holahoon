import React, { Component } from "react";
import { Fade } from "react-reveal";

import Project from "./Project/Project";
import Footer from "../Footer/Footer";

import remnantMinistry from "../../assets/images/remnant_ministry-resized.jpg";
import zunSungAn from "../../assets/images/junsungan-resized.jpg";
import fivie from "../../assets/images/fivie-resized.jpg";
import zigoGraph from "../../assets/images/zigograph-resized.jpg";
import onTheCloud from "../../assets/images/onthecloud-resized.jpg";
import firstHolaHoon from "../../assets/images/portfolio1-resized.jpg";

import "./Projects.css";

class Projects extends Component {
  state = {
    projects: [
      {
        projectName: remnantMinistry,
        projectTitle: "Remnant Ministry",
        projectDescription:
          "Started web service for users to view different events and register",
        projectDemo: "",
        projectGithub: "https://github.com/holahoon/Remnant-Ministry"
      },
      {
        projectName: zunSungAn,
        projectTitle: "Jun Sung An",
        projectDescription: "Collaborated a portfolio built for a designer",
        projectDemo: "https://www.junsungan.com/",
        projectGithub: "https://github.com/holahoon/zun-portfolio"
      },
      {
        projectName: firstHolaHoon,
        projectTitle: "FED Portfolio",
        projectDescription:
          "Developed a personal portfolio in collaboration with a designer",
        projectDemo: "https://holahoon.github.io/holahoon/",
        projectGithub: "https://github.com/holahoon/holahoon"
      },
      {
        projectName: fivie,
        projectTitle: "Fivie",
        projectDescription:
          "Single page movie application collaborated with a designer",
        projectDemo: "https://holahoon.github.io/fivie/",
        projectGithub: "https://github.com/holahoon/fivie"
      },
      {
        projectName: zigoGraph,
        projectTitle: "ZigoGraph",
        projectDescription:
          "A data viz application displaying cryptocurrency (Bitcoin) value",
        projectDemo: "https://holahoon.github.io/cryptocurrency/",
        projectGithub: "https://github.com/holahoon/cryptocurrency"
      },
      {
        projectName: onTheCloud,
        projectTitle: "OntheCloud",
        projectDescription:
          "A weather application displaying weather information of the current or searched city",
        projectDemo: "https://holahoon.github.io/weather-app/",
        projectGithub: "https://github.com/holahoon/weather-app"
      }
    ]
  };

  render() {
    return (
      <Fade duration={1300} delay={400}>
        <section className={"Projects"}>
          {this.state.projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </section>

        <Footer />
      </Fade>
    );
  }
}

export default Projects;
