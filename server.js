const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 3001;
const Photo = require("./photoModel");
const app = express();

// Define middleware here
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lightbox", {
        useNewUrlParser: true
    }
);

// Define API routes here

// upload a photo
// default options
app.use(fileUpload());

app.post('/upload', function (req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('~/Desktop/', function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});