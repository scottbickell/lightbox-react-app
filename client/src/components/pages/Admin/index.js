import React, { Component } from "react";
import "./styles.css";

class Form extends Component {
    render() {

        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h3>upload a photo</h3>
                <hr/>
                    <form
                        ref="uploadForm"
                        id="uploadForm"
                        action="http://localhost:3000/upload"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <input type="file" name="photoFile" id="photoFile" className="form-control-file mb-3" />
                        <input type="submit" className="btn btn-success" value="upload" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
