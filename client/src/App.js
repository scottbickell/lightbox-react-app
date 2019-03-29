import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Admin from './components/Admin';
import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
