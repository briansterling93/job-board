const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Job = db.define("jobs", {
  title: {
    type: Sequelize.STRING,
  },
  tech_stack: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  descrip: {
    type: Sequelize.STRING,
  },
  contact: {
    type: Sequelize.STRING,
  },
});

module.exports = Job;
