import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";



class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
        
          <h1>Christopher Jackson</h1><h2> Software Engineer </h2><h2>University of Denver 2020</h2>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        
        </HashRouter>
        </React.Fragment>
    );
  }
}
 
export default Main;