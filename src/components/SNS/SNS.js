import React from "react";
import { Fade } from "react-reveal";

// import "./SNS.css";
import "./styles/SNS.scss";

const SNS = props => {
  return (
    <div className={props.SNSclassName}>
      <Fade cascade delay={600}>
        <a href="mailto:hola.hoon@gmail.com">
          <img src={props.envelopIcon} alt="Envelop icon" />
          <span>{props.email}</span>
        </a>

        <a
          href={`https://github.com/holahoon/${props.githubLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.githubIcon} alt="Github icon" />
          <span>{props.github}</span>
        </a>

        <a
          href="https://www.linkedin.com/in/holahoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.linkedInIcon} alt="Linkedin icon" />
          <span>{props.linkedin}</span>
        </a>
      </Fade>
    </div>
  );
};

SNS.defaultProps = {
  githubLink: ""
};

export default SNS;
