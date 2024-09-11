const mongoose = require('mongoose');

const mapCaptureSchema = new mongoose.Schema({
  region: {
    northEast: { lat: Number, lng: Number },
    southWest: { lat: Number, lng: Number },
  },
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MapCapture', mapCaptureSchema);
