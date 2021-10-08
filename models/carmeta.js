const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CarMeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CarMeta.belongsTo(models.Car, {
        foreignKey: "car_uuid",
        constraints: false,
      });
    }
  }
  CarMeta.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      car_uuid: DataTypes.UUID,
      type: DataTypes.ENUM("string", "number", "date"),
      key: DataTypes.STRING,
      value: DataTypes.STRING,
      slug: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "CarMeta",
    }
  );
  return CarMeta;
};
