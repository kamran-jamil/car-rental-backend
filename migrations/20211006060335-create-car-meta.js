module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("car_meta", {
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
        allowNull: true,
      },
      type: Sequelize.DataTypes.ENUM("string", "number", "date"),
      key: Sequelize.STRING,
      value: Sequelize.STRING,
      slug: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("car_meta");
  },
};
