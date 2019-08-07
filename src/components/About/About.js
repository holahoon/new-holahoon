import React, { Component } from "react";

import Backdrop from "../Backdrop/Backdrop";

import "./About.css";

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
          className={
            this.props.showModal
              ? "About-container About-active"
              : "About-container"
          }
        >
          <div className={"About-close"} onClick={this.props.closeModal}>
            x
          </div>
          <div className={"About-content"}>
            <h1 className={"About-h1"}>Hi, I'm David Kim</h1>
            <h2 className={"About-h2"}>Front End Developer</h2>

            <p className={"About-p"}>
              In year 2018, I first learned the basic HTML and realized how
              passionate I became that I've always been striving to be better
              and humbly learn from mistakes.
              <br />I still remember that day in 2018, when I first learned HTML
              and was totally amazed by it. Ever since then, I've been hustling
              to be better and humbly learn from failures.
              <br />
            </p>

            <ul className={"About-contact"}>
              <li>
                <a href="mailto:hola.hoon@gmail.com">
                  <i className="fas fa-envelope email-reveal" />
                  <span>hola.hoon@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/holahoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github github-reveal" />
                  <span>Github</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/holahoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in linkedin-reveal" />
                  <span>Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
