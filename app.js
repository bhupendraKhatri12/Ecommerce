const express = require("express");
const Mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
uri = process.env.ATLAS_URI;

Mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => {
    console.log("ERROR " + err);
  });

app.get("/", (req, res) => {
  res.send("HWLLP");
});

app.listen(port, () => {
  console.log("SERver Started");
});
