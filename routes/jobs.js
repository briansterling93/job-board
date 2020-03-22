const express = require("express");
const router = express.Router();
const db = require("../config/database.js");
const Job = require("../models/Job.js");

//get all jobs list
router.get("/", async (req, res) => {
  try {
    const findAll = await Job.findAll();
    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

//add a job
router.get("/add", async (req, res) => {
  try {
    let data = {
      title: "Node Developer",
      tech_stack: "Node, Express, SQL",
      salary: "$95000",
      descrip: "Node Developer with 3+ years experience",
      contact: "johnnyjing23@hotmail.com"
    };

    const { title, tech_stack, salary, descrip, contact } = data;

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
