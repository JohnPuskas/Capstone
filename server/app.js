import express from "express";

const app = express();

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());

app.get("/status", (request, response) => {
  response.json({ message: "Service Healthy" });
});

app.listen(4040, () => console.log("Listening on port 4040"));
