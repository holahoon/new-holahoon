import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

import Layout from "./components/Layout/Layout";
// import Navbar from "./components/Navbar/Navbar";
import MainPage from "./containers/MainPage/MainPage";
import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/Projects" component={Projects} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
