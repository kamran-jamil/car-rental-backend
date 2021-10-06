const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserMeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserMeta.belongsTo(models.User, {
        foreignKey: "user_uuid",
        constraints: false,
      });
    }
  }
  UserMeta.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      user_uuid: DataTypes.STRING,
      type: DataTypes.ENUM("string", "number", "date"),
      key: DataTypes.STRING,
      value: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserMeta",
    }
  );
  return UserMeta;
};
