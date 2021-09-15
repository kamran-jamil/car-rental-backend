const Sequilize = require("sequelize");
const dotenv = require("dotenv");
const { db } = require("./app");

module.exports = new Sequilize(db.name, db.username, db.password, {
  host: db.host_address,
  dialect: db.dialect,
});
