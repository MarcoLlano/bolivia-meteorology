require("dotenv").config();

const express = require("express");
const cors = require("cors");

const weatherRoutes =
  require("./routes/weatherRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Bolivia Meteorology API"
  });
});

app.use(
  "/api/weather",
  weatherRoutes
);

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});