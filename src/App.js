import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";

import Index from "./views/index/index";

function About() {
  return <div>About页面</div>;
}

function NoMatch() {
  return <div>NoMatch页面</div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
