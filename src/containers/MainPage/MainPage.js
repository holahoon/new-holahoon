import React, { Component } from "react";
import { Fade } from "react-reveal";

import SNS from "../../components/SNS/SNS";

import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className={"MainPage"}>
        <Fade cascade duration={1200} delay={400}>
          <div className={"MainPage-header"}>
            {/*<h5 className={"MainPage-h5-content"}>Let's</h5>*/}
            <h1 className={"MainPage-h1-content margin-left-3"}>Develop</h1>

            {/*<h5 className={"MainPage-h5-content"}>Web</h5>*/}
            <h1 className={"MainPage-h1-content margin-left-3"}>Products</h1>
          </div>

          <div className={"MainPage-bottom"}>
            <div className={"margin-left-1"}>
              <h3 className={"MainPage-h3-content"}>Front End Developer</h3>
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
