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
        type: String
    },

    photoDate: {
        type: Date,
        default: Date.now
    },

    photoLatitude: {
        type: Number
    },

    photoLongitude: {
        type: Number
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