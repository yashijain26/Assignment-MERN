const mongoose = require('mongoose');
// Schema for map capture
const mapCaptureSchema = new mongoose.Schema({
   imageUrl: { type: String, required: true },
   region: {
       north: Number,
       south: Number,
       east: Number,
       west: Number,
   },
   userId: { type: String, required: true },
   timestamp: { type: Date, default: Date.now },
});
// Create the model from the schema
const MapCapture = mongoose.model('MapCapture', mapCaptureSchema);
module.exports = MapCapture;