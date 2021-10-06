module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_roles", {
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
      role_uuid: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: "roles",
          },
          key: "uuid",
        },
        allowNull: true,
      },
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
    await queryInterface.dropTable("user_roles");
  },
};
