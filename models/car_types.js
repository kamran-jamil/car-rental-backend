const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  class Car_Types extends Model {}
  Car_Types.init(
    {
      type: DataTypes.STRING,
      max_rate: DataTypes.FLOAT,
      min_rate: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Car_Types",
    }
  );
  // eslint-disable-next-line camelcase
  return Car_Types;
};
