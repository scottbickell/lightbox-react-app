const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    filename: {
        type: String,
        trim: true,
        required: "filename is required"
    },

    date: {
        type: Date,
        default: Date.now
    },

    camera: {
        type: String
    },

    location: {
        type: Number
    },

    country: {
        type: String
    }

});

// This creates our model from the above schema, using mongoose's model method
const Photo = mongoose.model("Photo", PhotoSchema);

// Export the Photo model
module.exports = Photo;