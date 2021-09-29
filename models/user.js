const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  // added for testing purposes
  User.addHook("beforeCreate", (user) => {
    if (user.email !== "noman@gmail.com") {
      throw new Error("You don't have permission!");
    }
  });

  return User;
};
