module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("permission_roles", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      permission_uuid: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: "permissions",
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("permission_roles");
  },
};
