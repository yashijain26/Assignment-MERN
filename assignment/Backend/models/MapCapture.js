const mapCaptureSchema = new mongoose.Schema({
    imageUrl: String,
    region: {
      north: Number,
      south: Number,
      east: Number,
      west: Number,
    },
    userId: String,
    timestamp: { type: Date, default: Date.now },
   });
 