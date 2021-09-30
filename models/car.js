const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.Boarder, {
        foreignKey: "owner_id",
        as: "boarder",
      });
      Car.belongsTo(models.Car_Types, {
        foreignKey: "car_type_id",
        as: "car_types",
      });
    }
  }
  Car.init(
    {
      owner_id: DataTypes.INTEGER,
      color: DataTypes.STRING,
      car_type_id: DataTypes.INTEGER,
      seats: DataTypes.INTEGER,
      model_year: DataTypes.STRING,
      description: DataTypes.STRING,
      car_number: DataTypes.INTEGER,
      brand_name: DataTypes.STRING,
      wheels: DataTypes.INTEGER,
      lights: DataTypes.STRING,
      trunk_capacity: DataTypes.FLOAT,
      status: DataTypes.STRING,
      rate: DataTypes.FLOAT,
      discount: DataTypes.FLOAT,
      discount_till: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
