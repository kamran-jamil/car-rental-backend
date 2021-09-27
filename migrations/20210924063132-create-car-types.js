module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("car_types", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      max_rate: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        allowNull: false,
      },
      min_rate: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        allowNull: false,
      },
      createda_t: {
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
    await queryInterface.dropTable("car_types");
  },
};
