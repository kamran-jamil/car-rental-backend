const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Client, {
        foreignKey: "client_id",
        as: "client",
      });
      models.Client.hasMany(Booking);
      Booking.belongsTo(models.Car, {
        foreignKey: "car_id",
        as: "car",
      });
      Booking.belongsTo(models.Boarder, {
        foreignKey: "car_onwer_id",
        as: "boarder",
      });
    }
  }
  Booking.init(
    {
      client_id: DataTypes.INTEGER,
      car_id: DataTypes.INTEGER,
      car_onwer_id: DataTypes.INTEGER,
      paid: DataTypes.BOOLEAN,
      amount: DataTypes.FLOAT,
      pre_paid: DataTypes.BOOLEAN,
      return_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
