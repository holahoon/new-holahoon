import React, { Component } from "react";
import { Fade } from "react-reveal";

import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className={"MainPage"}>
        <Fade cascade duration={1200}>
          <div className={"MainPage-header"}>
            <h5 className={"MainPage-h5-content"}>Let's</h5>
            <h1 className={"MainPage-h1-content margin-left-3"}>Develop</h1>

            <h5 className={"MainPage-h5-content"}>Web</h5>
            <h1 className={"MainPage-h1-content margin-left-3"}>Together</h1>
          </div>

          <div className={"MainPage-bottom"}>
            <div className={"margin-left-1"}>
              <h3 className={"MainPage-h3-content"}>Front End Developer</h3>
              <div className={"MainPage-line"} />
            </div>

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
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default MainPage;
