const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const exif = require("exif-parser");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const Photo = require("./photoModel");
const app = express();

// Define middleware here
app.use(
    express.urlencoded({
        extended: true
    })
);
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

app.use(fileUpload());

app.post("/upload", (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send("No files were uploaded.");
    }

    // The name of the input field (i.e. "photoFile") is used to retrieve the uploaded file
    let photoFile = req.files.photoFile;

    // Use the mv() method to place the file somewhere on your server
    photoFile.mv("./client/public/uploads/" + photoFile.name, function (err) {
        if (err) return res.status(500).send(err);
        // console.log(Object.keys(photoFile));
        res.send("File uploaded!");
        const buffer = fs.readFileSync("./client/public/uploads/" + photoFile.name);
        const parser = exif.create(buffer);
        const result = parser.parse();

        // console.log(JSON.stringify(result, null, 2));

        // grab the relevant key-value pairs

        // const photoFileName  = photoFile.name;
        // const cameraMake     = result.tags.Make;
        // const cameraModel    = result.tags.Model;
        // const photoDate      = result.tags.GPSDateStamp;
        // const photoLatitude  = result.tags.GPSLatitude;
        // const photoLongitude = result.tags.GPSLongitude;

        const data = {
            photoFileName: photoFile.name,
            cameraMake: result.tags.Make,
            cameraModel: result.tags.Model,
            photoDate: result.tags.GPSDateStamp,
            photoLatitude: result.tags.GPSLatitude,
            photoLongitude: result.tags.GPSLongitude
        }

        // console.log(photoFileName + " " + cameraMake + " " + cameraModel + " " + photoDate + " " + photoLatitude + " " + photoLongitude);
        console.log(data);

        // send the info to the database

        Photo.create(data)
            .then(function (dbPhoto) {
                // If saved successfully, print the new Photo document to the console
                console.log(dbPhoto);
            })
            .catch(function (err) {
                // If an error occurs, log the error message
                console.log(err.message);
            });
    });
});

app.get("/test", (req, res) => {

    // console.log("photos route");
    Photo.find({})
    .then(function(dbLightbox) {
        res.json(dbLightbox);
        console.log(dbLightbox);
    })
    .catch(function(err) {
        res.json(err);
    })
});

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});