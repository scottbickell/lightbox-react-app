const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
// const exifjs = require("exif-js");
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
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lightbox",
  {
    useNewUrlParser: true
  }
);

// Define API routes here

// upload a photo
// default options
app.use(fileUpload());

app.get(
  "/example/b",
  function(req, res) {
    console.log("the response will be sent by the next function ...");
    next();
  },
  function(req, res) {
    res.send("Hello from B!");
  }
);

app.post("/upload", (req, res) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "photoFile") is used to retrieve the uploaded file
  let photoFile = req.files.photoFile;

  // Use the mv() method to place the file somewhere on your server
  photoFile.mv("./client/public/uploads/" + photoFile.name, function(err) {
    if (err) return res.status(500).send(err);
    // console.log(Object.keys(photoFile));
    res.send("File uploaded!");
    const buffer = fs.readFileSync("./client/public/uploads/" + photoFile.name);
    const parser = exif.create(buffer);
    const result = parser.parse();

    console.log(JSON.stringify(result, null, 2));

    // send the info to the database

    var myPhoto = new Photo(result);
    myPhoto
      .save()
      .then(item => {
        // res.send("item saved to database");
        console.log("item saved to db");
      })
      .catch(err => {
        // res.status(400).send("unable to save to database");
        console.log("item not saved to db");
      });
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
