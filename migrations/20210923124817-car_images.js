module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("car_images", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      car_uuid: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: "cars",
          },
          key: "uuid",
        },
        allowNull: false,
      },
      image: Sequelize.DataTypes.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("car_images");
  },
};
