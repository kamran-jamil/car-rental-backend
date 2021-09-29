"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      uuid: Sequelize.DataTypes.STRING,
      firstName: Sequelize.DataTypes.STRING,
      lastName: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      profilePic: Sequelize.DataTypes.STRING,
      role: Sequelize.DataTypes.STRING,
      verifyToken: Sequelize.DataTypes.STRING,
      isVerified: Sequelize.DataTypes.BOOLEAN,
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
