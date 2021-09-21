const Sequilize = require("sequelize");
const {
  dialect,
  host_address,
  name,
  username,
  password,
  port,
} = require("../config/database");

module.exports = new Sequilize(name, username, password, {
  host: host_address,
  dialect: dialect,
  port: port,
});
