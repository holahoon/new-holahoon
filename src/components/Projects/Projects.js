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

import "./styles/Projects.scss";

class Projects extends Component {
  state = {
    projects: [
      {
        projectName: remnantMinistry,
        projectTitle: "Remnant Ministry",
        projectDescription:
          "Developing a web service for users to view different events and register",
        projectDemo: "",
        projectGithub: "https://github.com/holahoon/Remnant-Ministry"
      },
      {
        projectName: zunSungAn,
        projectTitle: "Jun Sung An",
        projectDescription: (
          <span>
            Collaborated with a{" "}
            <a
              className={"designer-link"}
              href="https://www.junsungan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              designer
            </a>{" "}
            in creating his personal portfolio
          </span>
        ),
        projectDemo: "https://www.junsungan.com/",
        projectGithub: "https://github.com/holahoon/zun-portfolio"
      },
      {
        projectName: firstHolaHoon,
        projectTitle: "Holahoon v1",
        projectDescription: (
          <span>
            Developed a personal portfolio v1 in collaboration with a{" "}
            <a
              className={"designer-link"}
              href="https://jinkyukang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              designer
            </a>
          </span>
        ),
        projectDemo: "https://holahoon.github.io/holahoon/",
        projectGithub: "https://github.com/holahoon/holahoon"
      },
      {
        projectName: fivie,
        projectTitle: "Fivie",
        projectDescription: (
          <span>
            Built a single page movie application collaborated with a{" "}
            <a
              className={"designer-link"}
              href="https://jinkyukang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              designer
            </a>
          </span>
        ),
        projectDemo: "https://holahoon.github.io/fivie/",
        projectGithub: "https://github.com/holahoon/fivie"
      },
      {
        projectName: zigoGraph,
        projectTitle: "ZigoGraph",
        projectDescription:
          "Developed a data viz application displaying cryptocurrency (Bitcoin) value",
        projectDemo: "https://holahoon.github.io/cryptocurrency/",
        projectGithub: "https://github.com/holahoon/cryptocurrency"
      },
      {
        projectName: onTheCloud,
        projectTitle: "OntheCloud",
        projectDescription:
          "Built an application displaying weather information of the current or searched city",
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
