const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.User, {
        foreignKey: "owner_uuid",
        constraints: false,
      });
      Car.belongsTo(models.CarType, {
        foreignKey: "car_type_uuid",
        constraints: false,
      });
    }
  }
  Car.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      owner_uuid: DataTypes.STRING,
      car_type_uuid: DataTypes.UUID,
      description: DataTypes.TEXT,
      status: DataTypes.ENUM("active", "inactive"),
      rate: DataTypes.DECIMAL,
      feedback_score: DataTypes.DECIMAL,
      feedbacks_count: DataTypes.INTEGER,
      discount: DataTypes.DECIMAL,
      discount_till: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "cars",
      modelName: "Car",
    }
  );
  return Car;
};
