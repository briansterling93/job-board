const express = require("express");
const router = express.Router();
const db = require("../config/database.js");
const Job = require("../models/Job.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//GET - view all jobs
router.get("/", async (req, res) => {
  try {
    const findAll = await Job.findAll();
    res.json({ findAll });
  } catch (error) {
    console.log(error);
  }
});

//POST - add a new job
router.post("/add", async (req, res) => {
  try {
    let { title, tech_stack, salary, descrip, contact, createdAt } = req.body;

    const errors = [];

    if (!title) {
      errors.push({ error: "Please add a Job title" });
    }
    if (!tech_stack) {
      errors.push({ error: "Please add the required technical skills" });
    } else {
      tech_stack = tech_stack.replace(/, /g, ",");
    }
    if (!salary) {
      errors.push({ error: "Please add the job's salary" });
    } else {
      salary = `$${salary}`;
    }
    if (!descrip) {
      errors.push({ error: "Please add a Job Description" });
    } else {
      descrip = descrip.replace(/\s+/g, " ").trim();
    }
    if (!contact) {
      errors.push({ error: "Please add Contact Info for this position" });
    }

    if (errors.length > 0) {
      res.send({ error: "Invalid Entry" });
    } else {
      await Job.create({
        title: title,
        tech_stack: tech_stack,
        salary: salary,
        descrip: descrip,
        contact: contact,
        createdAt: createdAt,
      });

      res.redirect("/jobs");
    }
  } catch (error) {
    console.log(error);
  }
});

//GET - ui query to search for a specific role
router.get("/queried/:qItem", async (req, res) => {
  try {
    let { userQuery } = await req.body;

    const findEm = await Job.findAll({
      where: {
        tech_stack: {
          [Op.like]: `%${req.params.qItem}%`,
        },
      },
    });

    res.json({ findEm });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
