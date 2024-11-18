import { Router } from "express";
import Song from "../models/Song.js";

const router = Router();

// Get a single Song by ID in order to use its array of song versions
router.get("/", async (request, response) => {
  try {
    console.log("Here is the GET req query:", request.query);
    // const data = await Song.findById(request.params.id);
    const data = await Song.findById(request.query.id);
    console.log("This is the data from the GET request", data);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
