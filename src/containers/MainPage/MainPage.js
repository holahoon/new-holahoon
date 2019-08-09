import React, { Component } from "react";
import { Fade } from "react-reveal";

import SNS from "../../components/SNS/SNS";
import githubIcon from "../../assets/images/github-icon.svg";
import linkedInIcon from "../../assets/images/linkedin.svg";
import envelopIcon from "../../assets/images/email.svg";

import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className={"MainPage"}>
        <Fade cascade duration={1200} delay={300}>
          <div className={"MainPage-header"}>
            <h1 className={"MainPage-h1-content margin-left-3"}>
              <Fade left cascade duration={800} delay={400}>
                Front-end
              </Fade>
            </h1>

            <h1 className={"MainPage-h1-content margin-left-3"}>
              <Fade left cascade duration={800} delay={600}>
                Developer
              </Fade>
            </h1>
          </div>

          <div className={"MainPage-bottom"}>
            <div className={"margin-left-1"}>
              <Fade left cascade duration={700} delay={200}>
                <h3 className={"MainPage-h3-content"}>Hustle & Code</h3>
              </Fade>
              <div className={"MainPage-line"} />
            </div>

            <SNS
              SNSclassName={"SNS-group margin-right-1"}
              githubIcon={githubIcon}
              linkedInIcon={linkedInIcon}
              envelopIcon={envelopIcon}
            />
          </div>
        </Fade>
      </div>
    );
  }
}

export default MainPage;
