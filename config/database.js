const Sequelize = require("sequelize");

// module.exports = new Sequelize(
//   "gigs_app",
//   "root",
//   "password",
//   {
//     host: "localhost",
//     dialect: "mysql",
//   },
//   {
//     production: {
//       use_env_variable: "DATABASE_URL",
//     },
//   }
// );

module.exports = new Sequelize(
  "qaubet5jf4lj5o4h",
  "srd07hzytzoh27gu",
  "k3dhal92max0ftg7",
  {
    host: "g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  {
    production: {
      use_env_variable: "DATABASE_URL",
    },
  }
);
