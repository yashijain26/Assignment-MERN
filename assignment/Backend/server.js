const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);

const mapCaptureSchema = new mongoose.Schema({
  imageUrl: String,
  region: {
    north: Number,
    south: Number,
    east: Number,
    west: Number,
  },
  userId: String,
});

const MapCapture = mongoose.model('MapCapture', mapCaptureSchema);

app.post('/api/maps/capture', async (req, res) => {
  const { imageUrl, region, userId } = req.body;
  try {
    const capture = new MapCapture({ imageUrl, region, userId });
    await capture.save();
    res.status(200).json(capture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/maps/captures', async (req, res) => {
  try {
    const captures = await MapCapture.find();
    res.status(200).json(captures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
