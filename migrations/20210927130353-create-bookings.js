module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: { tableName: "clients" }, key: "id" },
      },
      car_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "cars" }, key: "id" },
        allowNull: false,
      },
      car_onwer_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "boarders" }, key: "id" },
        allowNull: false,
      },
      paid: {
        type: Sequelize.BOOLEAN,
      },
      amount: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      pre_paid: {
        type: Sequelize.BOOLEAN,
      },
      return_date: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("bookings");
  },
};
