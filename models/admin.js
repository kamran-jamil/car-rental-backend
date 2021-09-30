const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {}
  Admin.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      cnic: DataTypes.NUMERIC,
      gender: DataTypes.ENUM("male", "female", "other"),
      password: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
      is_verified: DataTypes.BOOLEAN,
      verified_at: DataTypes.DATE,
      type: DataTypes.STRING,
      setting: DataTypes.JSON,
      account_status: DataTypes.ENUM("active", "inactive", "pending"),
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
