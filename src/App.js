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
  // state = {
  //   aboutClicked: false
  // };

  // showModal = () => {
  //   this.setState({ aboutClicked: true });
  // };

  // hideModal = () => {
  //   this.setState({ aboutClicked: false });
  // };

  render() {
    return (
      <BrowserRouter>
        {/*<Navbar stateData={this.state} clicked={this.showModal} />*/}
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/Projects" component={Projects} />
            {/*<Route path="/Contact" component={Contact} />*/}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

// React TransitionGroup for animating through pages
// <BrowserRouter>
//   <Navbar />

//   <Route
//     render={({ location }) => {
//       return (
//         <TransitionGroup>
//           <CSSTransition key={location.key} className="page-slide">
//             <Switch location={location}>
//               <Route path="/" exact component={MainPage} />
//               <Route path="/Projects" component={Projects} />
//             </Switch>
//           </CSSTransition>
//         </TransitionGroup>
//       );
//     }}
//   />
// </BrowserRouter>;
