const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  class Car_Images extends Model {
    static associate(models) {
      models.Car.hasMany(Car_Images, {
        foreignKey: "car_id",
        as: "car",
      });
      Car_Images.belongsTo(models.Car);
    }
  }
  Car_Images.init(
    {
      image: DataTypes.STRING,
      car_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Car_Images",
    }
  );
  // eslint-disable-next-line camelcase
  return Car_Images;
};
