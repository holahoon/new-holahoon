import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import About from "../About/About";

class Layout extends Component {
  state = {
    showModal: false
  };

  showModal = () => {
    this.setState({ ...this.state, showModal: true });
  };

  hideModal = () => {
    this.setState({ ...this.state, showModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          showModal={this.state.showModal}
          showMenu={this.state.showMenu}
          openModal={this.showModal}
        />
        <About showModal={this.state.showModal} closeModal={this.hideModal} />

        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
