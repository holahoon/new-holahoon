import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import About from "../About/About";

class Layout extends Component {
  state = {
    showModal: false
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const about = <About stateData={this.state} closeModal={this.hideModal} />;

    return (
      <React.Fragment>
        <Navbar stateData={this.state} openModal={this.showModal} />
        {this.state.showModal ? about : null}
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
