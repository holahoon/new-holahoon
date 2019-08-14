import React from "react";

// import "./Backdrop.css";
import "./styles/Backdrop.scss";

const backdrop = props => {
  return props.showModal ? (
    <section
      className={"Backdrop backdrop-active"}
      onClick={props.closeModal}
    />
  ) : (
    <section
      className={"Backdrop backdrop-disable"}
      onClick={props.closeModal}
    />
  );
};

export default backdrop;
