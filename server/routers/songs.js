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
    const page = request.query.page ? request.query.page : 1;
    const limit = 12;
    const offset = (page - 1) * limit;
    const data = await Song.find()
      .sort({ $natural: -1 })
      .skip(offset)
      .limit(limit);
    // console.log("The songs router response", data);
    // console.log(request.query);
    const count = await Song.countDocuments();

    response.json({
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page)
    });
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.put("/", async (request, response) => {
  try {
    const body = request.body;
    console.log("Request body:", body);
    const songId = body["_id"];
    console.log("SongId:", songId);
    console.log("body title:", body["title"]);
    const data = await Song.findByIdAndUpdate(
      songId,
      {
        $set: {
          title: body["title"],
          description: body["description"]
        }
      },
      {
        new: true,
        runValidators: true
      }
    );
    response.json({ data, currentPage: body["currentPage"] });
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

router.delete("/", async (request, response) => {
  try {
    // console.log("REQUEST:", request);
    // console.log("REQUEST BODY:", request.body);
    const songId = request.query.id;
    console.log("SongId:", songId);

    const data = await Song.findByIdAndDelete(songId);
    response.json(data);
  } catch (error) {
    return response.status(500).json(error.errors);
  }
});

export default router;
