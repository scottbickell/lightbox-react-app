import React, { Component } from "react";
import data from "../../../photoData.json";

import "./styles.css";

class Gallery extends Component {
  render() {

    return (
        <div>
          <h2>Gallery</h2>
          {data.map(d => (
            // <div style="background-image:url(http://placekitten.com/100/200)"></div>
            // <div className="photo-container" style="background-image:url("");"></div>
            <img src={"uploads/" + d.photoFileName} className="photo" />
          ))}
        </div>
    );
  }
}

export default Gallery;
