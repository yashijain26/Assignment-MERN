const express = require('express');
const MapCapture = require('../models/MapCapture');
const router = express.Router();
// Route to save a map capture
// POST route for capturing the region
router.post('/capture', async (req, res) => {
    try {
      const { imageUrl, region, userId } = req.body;
  
      const newCapture = new MapCapture({
        imageUrl,
        region,
        userId,
      });
  
      const savedCapture = await newCapture.save();
      res.status(201).json(savedCapture);  // Respond with the saved capture
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
// Route to get all map captures
router.get('/captures', async (req, res) => {
   try {
       const captures = await MapCapture.find();
       res.json(captures);
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
});
module.exports = router;
