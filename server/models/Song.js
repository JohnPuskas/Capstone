import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  description: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  versions: [String]
  // type: array of SongVersion (similar to Notes from the curriculum ch.9.4)
});

const Song = mongoose.model("Song", songSchema);

export default Song;
