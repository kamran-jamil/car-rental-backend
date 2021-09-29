const Sequilize = require("sequelize");
const db = require("../helpers/database");

const User = db.define(
  "User",
  {
    uuid: {
      type: Sequilize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: Sequilize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequilize.STRING,
    },
    email: {
      type: Sequilize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequilize.STRING,
    },
    profilePic: {
      type: Sequilize.STRING,
    },
    role: {
      type: Sequilize.STRING,
      defaultValue: "client",
    },
    verifyToken: {
      type: Sequilize.STRING,
      defaultValue: null,
    },
    isVerified: {
      type: Sequilize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequilize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequilize.DATE,
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ["password", "verifyToken"] },
    },
    scopes: {
      withSecretColumns: {
        attributes: { include: ["password", "verifyToken"] },
      },
    },
  }
);

module.exports = User;
