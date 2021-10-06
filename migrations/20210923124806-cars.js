module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cars", {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      owner_uuid: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: "users",
          },
          key: "uuid",
        },
        allowNull: true,
      },
      car_type_uuid: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: "car_types",
          },
          key: "uuid",
        },
        allowNull: true,
      },
      description: Sequelize.DataTypes.TEXT,
      status: Sequelize.DataTypes.ENUM("active", "inactive"),
      rate: Sequelize.DataTypes.DECIMAL,
      discount: Sequelize.DataTypes.DECIMAL,
      discount_till: Sequelize.DataTypes.DATE,
      feedback_score: Sequelize.DataTypes.DECIMAL,
      feedbacks_count: Sequelize.DataTypes.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cars");
  },
};
