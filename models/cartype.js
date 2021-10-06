const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CarType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CarType.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      type_name: DataTypes.STRING,
      min_rate: DataTypes.DECIMAL,
      max_rate: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "car_types",
      modelName: "CarType",
    }
  );
  return CarType;
};
