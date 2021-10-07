const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "settings",
      [
        {
          uuid: uuidv4(),
          name: "site_name",
          value: "Car Rental Mechanism",
          setting_owner_uuid: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: uuidv4(),
          name: "max_discount_prepay",
          value: "0",
          setting_owner_uuid: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (_queryInterface, _Sequelize) => {},
};
