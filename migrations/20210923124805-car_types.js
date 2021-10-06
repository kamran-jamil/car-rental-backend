module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("car_types", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      type_name: Sequelize.DataTypes.STRING,
      min_rate: Sequelize.DataTypes.DECIMAL,
      max_rate: Sequelize.DataTypes.DECIMAL,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("car_types");
  },
};
