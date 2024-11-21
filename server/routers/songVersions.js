import { Router } from "express";
import Song from "../models/Song.js";

const router = Router();

// Get a single Song by ID in order to use its array of song versions
router.get("/", async (request, response) => {
  try {
    console.log("Here is the GET req query:", request.query);
    const data = await Song.findById(request.query.id);
    console.log("This is the data from the GET request", data);
    await data.versions.reverse();
    console.log("The songVersions GET data", data);
    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.put("/", async (request, response) => {
  try {
    const body = request.body;
    console.log("Request body:", body);
    console.log("Request query:", request.query);
    const songId = request.query.id;

    const data = await Song.findByIdAndUpdate(
      songId,
      {
        $push: {
          versions: body
        }
      },
      {
        new: true,
        runValidators: true
      }
    );
    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
