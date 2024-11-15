import { Router } from "express";
import Song from "../models/Song.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const newSong = new Song(request.body);

    const data = await newSong.save();

    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError") {
      return response.status(400).json(error.errors);
    }

    return response.status(500).json(error.errors);
  }
});

router.get("/", async (request, response) => {
  try {
    const query = request.query;

    const data = await Song.find(query);

    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
