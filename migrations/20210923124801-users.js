module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      first_name: Sequelize.DataTypes.STRING,
      last_name: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      account_status: Sequelize.DataTypes.ENUM("active", "inactive", "pending"),
      referrer_uuid: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: "users",
          },
          key: "uuid",
        },
        allowNull: true,
      },
      is_approved: Sequelize.DataTypes.BOOLEAN,
      referred_at: Sequelize.DataTypes.DATE,
      verified_at: Sequelize.DataTypes.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
