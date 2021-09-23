module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookings", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      client_uuid: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: "users",
          },
          key: "uuid",
        },
        allowNull: true,
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
      car_owner_uuid: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: "users",
          },
          key: "uuid",
        },
        allowNull: true,
      },
      feedback: Sequelize.DataTypes.TEXT,
      feedback_score: Sequelize.DataTypes.DECIMAL,
      amount_received: Sequelize.DataTypes.DECIMAL,
      amount: Sequelize.DataTypes.DECIMAL,
      is_pre_paid: Sequelize.DataTypes.BOOLEAN,
      return_date: Sequelize.DataTypes.DATE,
      status: Sequelize.DataTypes.ENUM(
        "booking_cancelled",
        "pending",
        "car_delivered",
        "car_returned"
      ),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bookings");
  },
};
