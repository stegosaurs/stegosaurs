var mongoose = require('mongoose');

// Create the schema
var restSchema = new mongoose.Schema({
 name: { type: String, required: true },
 image: { type: String, required: true },
 username: { type: String, required: true },
 userPhoto: { type: String, required: true },
 foodRating: { type: Number, required: true },
 serviceRating: { type: Number, required: true },
 ambianceRating: { type: Number, required: true },
 recommendation: { type: String, required: true }
 });

//Export a Restaurant model to be used in the controllers file.
module.exports = mongoose.model("Restaurant", restSchema);