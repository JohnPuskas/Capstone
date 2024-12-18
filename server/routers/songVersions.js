import { Router } from "express";
import Song from "../models/Song.js";
import songVersions from "../../store/songVersions.js";

const router = Router();

// Get a single Song by ID in order to use its array of song versions
router.get("/", async (request, response) => {
  try {
    console.log("Here is the GET req query:", request.query);
    let data = await Song.findById(request.query.id);
    // console.log("This is the data from the GET request", data);
    await data.versions.reverse();

    console.log(Song);
    // console.log("The songVersions GET data", data);
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
    console.log("This is the songs ID:", songId);

    /*
      Check if there is a Version ID in the request, If yes, then Update the Version
      Else if there is not a VersionID in the request, push the new Version.
    */
    if (body._id) {
      const versionId = body._id;
      console.log("this is the version ID:", versionId);
      console.log("The Version ID Exists!");
      const data = await Song.findOneAndUpdate(
        { "versions._id": versionId },
        {
          $set: {
            "versions.$": body
          }
        },
        {
          new: true,
          runValidators: true
        }
      );
      console.log(data);
      response.json(data);
    } else {
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
    }
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

router.delete("/", async (request, response) => {
  try {
    const body = request.body;
    console.log("Request body:", body);
    console.log("Request query:", request.query);
    const songId = request.query.id;
    console.log("This is the songs ID:", songId);
    const versionId = request.query.versionID;
    console.log(typeof versionId);
    console.log("this is the version ID:", versionId);
    let song = await Song.findById(songId);
    console.log("This is the song:", song);
    await song.versions.pull(versionId);
    const data = await song.save();

    console.log("This is the data:", data);
    response.json(data);
  } catch (error) {
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
