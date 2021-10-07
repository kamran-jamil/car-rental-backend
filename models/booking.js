const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.Car, {
        foreignKey: "car_uuid",
        constraints: false,
      });
      Booking.belongsTo(models.User, {
        foreignKey: "client_uuid",
        constraints: false,
      });
      Booking.belongsTo(models.User, {
        foreignKey: "car_owner_uuid",
        constraints: false,
      });
    }
  }
  Booking.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      client_uuid: DataTypes.STRING,
      car_uuid: DataTypes.UUID,
      car_owner_uuid: DataTypes.STRING,
      amount_received: DataTypes.DECIMAL,
      amount: DataTypes.DECIMAL,
      is_pre_paid: DataTypes.BOOLEAN,
      return_date: DataTypes.DATE,
      status: DataTypes.ENUM(
        "booking_cancelled",
        "pending",
        "car_delivered",
        "car_returned"
      ),
      feedback: DataTypes.TEXT,
      feedback_score: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "bookings",
      modelName: "Booking",
    }
  );
  return Booking;
};
