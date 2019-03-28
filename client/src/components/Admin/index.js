import React, { Component } from "react";
import "./styles.css";

class Form extends Component {
  render() {

    return (
      <div>
        <form
          ref="uploadForm"
          id="uploadForm"
          action="http://localhost:3000/upload"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="photoFile" id="photoFile" />
          <input type="submit" value="Upload!" />
        </form>
      </div>
    );
  }
}

export default Form;
