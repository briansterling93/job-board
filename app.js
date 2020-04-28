const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 5000;

const db = require("./config/database.js");

db.authenticate(async () => {
  try {
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
});

const app = express();

app.use(express.json({ extended: false })); //body parser

app.get("/", (req, res) => {
  res.send("test route!!");
});

//job routes
app.use("/jobs", require("./routes/jobs.js"));

app.listen(PORT, () => {
  console.log(`App running on Port ${PORT}`);
});
