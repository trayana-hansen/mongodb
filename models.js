const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  _id: {
    type: Object,
    require: true,
  },
  id: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  artist_id: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
});

const Song = mongoose.model("song", songSchema);

module.exports = Song;
