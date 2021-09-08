const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server started");
  console.log(`You can view server in 👉 http://localhost:${PORT}`);
});
