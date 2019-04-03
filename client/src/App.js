import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from './components/pages/Admin';
import Gallery from './components/pages/Gallery';

class App extends Component {
  getdata = (event) => {
    event.preventDefault()
    // console.log("getdata function did fire");
    fetch("http://localhost:3000/test", {
      method: "GET"
      // headers: {
      //   Accept: "application/json",
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json"
      // }
    })
    .then(response => response.json())
    .then(res => console.log("response", res));
  }


  render() {
    return (
      <div className="container">
      <div className="row mb-4 mt-2">
        <div className="col-md-6">
            <h1>lightbox</h1>
        </div>
        <div className="col-md-6 text-right">
            <a href="/admin" className="btn btn-secondary mr-3">Admin</a>
            <a href="/gallery" className="btn btn-secondary mr-3">Gallery</a>
            <a href="/test" className="btn btn-secondary" onClick = {(event)=> this.getdata(event)} >test</a>
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
