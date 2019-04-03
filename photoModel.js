const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    
    photoFileName: {
        type: String
    },

    cameraMake: {
        type: String,
        default: "Film camera"
    },

    cameraModel: {
        type: String,
        default: "Medium format camera"
    },

    photoDate: {
        type: Date,
        default: Date.now
    },
// default to my house
    photoLatitude: {
        type: Number,
        default: 39.5590123
    },

    photoLongitude: {
        type: Number,
        default: -104.9352024
    },

    country: {
        type: String,
        default: "USA"
    }

});

// This creates our model from the above schema, using mongoose's model method
const Photo = mongoose.model("Photo", PhotoSchema);

// Export the Photo model
module.exports = Photo;