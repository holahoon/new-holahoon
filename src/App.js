import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

import Navbar from "./components/Navbar/Navbar";
import MainPage from "./containers/MainPage/MainPage";
import Projects from "./components/Projects/Projects";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/Projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
};

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
