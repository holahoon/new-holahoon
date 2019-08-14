import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactGA from "react-ga";

import Layout from "./components/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import Projects from "./components/Projects/Projects";

// import "./App.css";
import "./styles/App.scss";

class App extends Component {
  componentDidMount() {
    this.initGA();
    this.logPageView();
  }

  // Google Analytics
  initGA = () => {
    console.log("GA init");
    ReactGA.initialize("UA-145620488-1");
  };

  logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };

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
