import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import { createApi } from "unsplash-js";

const app = express();
// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// Api initialization
const unsplash = createApi({
  accessKey: "<Add-Your-Key-Here>",
  fetch: fetch,
});

// routes
app.post("/search", (req, res) => {
  const name = req.body.name;

  unsplash.search
    .getPhotos({
      query: name,
      page: 1,
      perPage: 10,
    })
    .then((result) => {
      if (result.errors) {
        return res.status(400).json({
          err: result.errors[0],
        });
      } else {
        res.status(200).json({
          photos: result.response.results,
        });
      }
    });
});

// server configuration
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server started");
  console.log(`You can view server in 👉 http://localhost:${PORT}`);
});
