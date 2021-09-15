const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  environemnt: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  db: {
    dialect: process.env.DB_DIALECT,
    host_address: process.env.DB_HOST,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};
