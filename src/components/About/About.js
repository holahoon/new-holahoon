import React, { Component } from "react";
import { Fade } from "react-reveal";

import Backdrop from "../Backdrop/Backdrop";

import "./About.css";

class About extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("nextProps.showModal", nextProps.showModal);
    // console.log("this.props.showModal", this.props.showModal);

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
          className={
            this.props.showModal
              ? "About-container About-active"
              : "About-container"
          }
        >
          <div className={"About-close"} onClick={this.props.closeModal}>
            <i className="fas fa-times" />
          </div>
          <div className={"About-content"}>
            <h1 className={"About-h1"}>
              Hi! I'm David Kim, a Front End Developer
            </h1>
            <p className={"About-p"}>
              I could not be anymore happier ever since I started web
              development. Always humbly learn from mistakes and strive to be
              better. I am looking to further improve my skills and take part in
              a team.
            </p>
            <p className={"About-contact"}>
              - Please, feel free to:
              <br />
              <a href="mailto:hola.hoon@gmail.com" className={"About-email"}>
                hola.hoon
                <i className="fas fa-at" />
                gmail.com
              </a>
            </p>
            <p className={"About-phrase"}>
              " User interface is like a joke. If you have to explain it, it
              isn't that good. "
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
