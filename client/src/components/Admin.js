import React, { Component } from "react";
import "./admin.css";

class Form extends Component {
  render() {

    return (
      <div>
        <form
          ref="uploadForm"
          id="uploadForm"
          action="http://localhost:8000/upload"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="sampleFile" />
          <input type="submit" value="Upload!" />
        </form>
      </div>
    );
  }
}

export default Form;
