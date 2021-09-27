module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("car_images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      car_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "cars" }, key: "id" },
        allowNull: false,
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
    await queryInterface.dropTable("car_images");
  },
};
