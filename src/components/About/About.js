import React, { Component } from "react";

import githubLogo from "../../assets/images/github-icon-dark.svg";
import linkedinLogo from "../../assets/images/linkedin-dark.svg";
import emailLogo from "../../assets/images/email-dark.svg";
import Backdrop from "../Backdrop/Backdrop";
import SNS from "../SNS/SNS";

import "./styles/About.scss";

class About extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.showModal !== this.props.showModal;
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop
          showModal={this.props.showModal}
          closeModal={this.props.closeModal}
        />
        <div
          className={`About-container ${
            this.props.showModal ? "About-active" : ""
          }`}
        >
          <div className={"About-close"} onClick={this.props.closeModal}>
            x
          </div>
          <div className={"About-content"}>
            <h1 className={"About-h1"}>Hi, I'm David Kim</h1>
            <h2 className={"About-h2"}>Front End Developer</h2>

            <p className={"About-p"}>
              It all started with passion in learning to code that led me to be
              determined to continuously learn web development. I'm always
              striving for improvement with an open mind to be an outstanding
              developer.
            </p>

            <SNS
              SNSclassName={"About-contact"}
              email={"hola.hoon@gmail.com"}
              envelopIcon={emailLogo}
              github={"Github"}
              githubIcon={githubLogo}
              githubLink={"new-holahoon"}
              linkedin={"LinkedIn"}
              linkedInIcon={linkedinLogo}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
