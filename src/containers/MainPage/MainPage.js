import React, { Component } from "react";
import { Fade } from "react-reveal";

import SNS from "../../components/SNS/SNS";

import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className={"MainPage"}>
        <Fade cascade duration={1200} delay={300}>
          <div className={"MainPage-header"}>
            <h1 className={"MainPage-h1-content"}>
              <Fade left cascade duration={800} delay={400}>
                Develop
              </Fade>
            </h1>

            <h1 className={"MainPage-h1-content"}>
              <Fade left cascade duration={800} delay={600}>
                UI <span style={{ color: "#8f8f8f" }}>/</span> UX
              </Fade>
            </h1>
          </div>

          <div className={"MainPage-bottom"}>
            <div className={"margin-left-1"}>
              <Fade left cascade duration={700}>
                <h3 className={"MainPage-h3-content"}>Front End Developer</h3>
              </Fade>
              <div className={"MainPage-line"} />
            </div>

            <SNS />
          </div>
        </Fade>
      </div>
    );
  }
}

export default MainPage;
