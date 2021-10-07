const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: "user_roles",
      });
      User.belongsTo(models.User, {
        foreignKey: "referrer_uuid",
        constraints: false,
      });
      User.hasMany(models.UserMeta);
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      account_status: DataTypes.ENUM("active", "inactive", "pending"),
      referrer_uuid: DataTypes.STRING,
      is_approved: DataTypes.BOOLEAN,
      referred_at: DataTypes.DATE,
      verified_at: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
