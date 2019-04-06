import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/pages/Admin";
import Gallery from "./components/pages/Gallery";
import Test from "./components/Test";

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-6">
            <h1>photomongo</h1>
          </div>
          <div className="col-md-6 text-right mt-1">
            <a href="/admin" className="btn btn-secondary mr-3">
              admin
            </a>
            <a href="/gallery" className="btn btn-secondary">
              gallery
            </a>
            {/* <a href="http://localhost:3001/api" className="btn btn-secondary ml-3">Get Data</a> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Router>
              <div>
                <Switch>
                  <Route exact path="/" component={Gallery} />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/gallery" component={Gallery} />
                  <Route exact path="/test" component={Test} />
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
