const Sequelize = require("sequelize"),
  sequelize = null;
const http = require("http");

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "mysql",
  });
}

db.sequelize.sync().then(function () {
  http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
  });
});
