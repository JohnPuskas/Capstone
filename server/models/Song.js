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
  }
});

const Song = mongoose.model("Song", songSchema);

export default Song;
