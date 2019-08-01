import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import "./About.css";

const about = props => {
  return (
    <React.Fragment>
      <Backdrop stateData={props.stateData} closeModal={props.closeModal} />
      <div
        className={"About-container"}
        style={{
          transform: props.stateData.showModal
            ? "translateY(0)"
            : "translateY(30vh)",
          opacity: props.stateData.showModal ? "1" : "0"
        }}
      >
        <div className={"About-close"} onClick={props.closeModal}>
          <i className="fas fa-times" />
        </div>
        <div className={"About-content"}>
          <h1 className={"About-h1"}>
            Hey! I'm David Kim, a Front End Developer
          </h1>
          <p className={"About-p"}>
            I develop and build creative & responsive web applications.
            <br />
            some sample texts
            <br />
            I'm available at
          </p>
          <a href="mailto:hola.hoon@gmail.com">
            hola.hoon
            <i className="fas fa-at" />
            gmail.com
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
