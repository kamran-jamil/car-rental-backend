const Sequilize = require("sequelize");
const db = require("../config/database");

const Member = db.define("Member", {
  name: {
    type: Sequilize.STRING,
  },
  contact_email: {
    type: Sequilize.STRING,
  },
  status: {
    type: Sequilize.STRING,
  },
});

module.exports = Member;
