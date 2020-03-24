const express = require("express");
const router = express.Router();
const db = require("../config/database.js");
const Job = require("../models/Job.js");

//get a list of all the current jobs
router.get("/", async (req, res) => {
  try {
    const findAll = await Job.findAll();
    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

//add a new job (ui input based)
router.post("/add", async (req, res) => {
  try {
    let { title, tech_stack, salary, descrip, contact } = req.body;

    await Job.create({
      title: title,
      tech_stack: tech_stack,
      salary: salary,
      descrip: descrip,
      contact: contact
    });

    res.redirect("/jobs");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
