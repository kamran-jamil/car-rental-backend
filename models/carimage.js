const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CarImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CarImage.belongsTo(models.Car, {
        foreignKey: "car_uuid",
        constraints: false,
      });
    }
  }
  CarImage.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      image: DataTypes.STRING,
      car_uuid: DataTypes.UUID,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "car_images",
      modelName: "CarImage",
    }
  );
  return CarImage;
};
