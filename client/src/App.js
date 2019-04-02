import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from './components/pages/Admin';
import Gallery from './components/pages/Gallery';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row mb-4 mt-2">
        <div className="col-md-6">
            <h1>lightbox</h1>
        </div>
        <div className="col-md-6 text-right">
            <a href="/admin" className="btn btn-secondary mr-3">Admin</a>
            <a href="/gallery" className="btn btn-secondary">Gallery</a>
          </div>
      </div>
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
