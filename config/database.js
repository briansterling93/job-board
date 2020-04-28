const Sequelize = require("sequelize");

module.exports = new Sequelize("gigs_app", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});
