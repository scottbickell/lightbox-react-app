import React from "react";
import ReactDOM from "react-dom";
import data from "../photoData.json";

function Test() {
  return (
    <div className="App">
      <h1>Test</h1>
      {data.map(d => (
        <p>{d.photoFileName}</p>
      ))}
    </div>
  );
}
export default Test;

