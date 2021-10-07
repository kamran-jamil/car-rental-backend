module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_meta", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      user_uuid: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: "users",
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
    await queryInterface.dropTable("user_meta");
  },
};
