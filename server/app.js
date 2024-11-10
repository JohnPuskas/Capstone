import express from "express";

const app = express();

app.use(express.json());

app.get("/status", (request, response) => {
  response.json({ message: "Service Healthy" });
});

app.listen(4040, () => console.log("Listening on port 4040"));
