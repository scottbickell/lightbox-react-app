import React, { Component } from "react";
import data from "../../../photoData.json";

import "./styles.css";

class Gallery extends Component {
  render() {
    return (
      <div>
        <h2>gallery: film cameras</h2>
        <p>Medium &amp; large format; pinhole; Holga</p>
        
        {data.map(d => (
          <div className="photo-container" key={d._id}>
            <img
              src={"uploads/" + d.photoFileName}
              className="photo"
              alt={d.photoFileName}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
