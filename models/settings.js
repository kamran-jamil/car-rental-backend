const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {}
  Settings.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.JSON,
      setting_owner_type: DataTypes.STRING,
      setting_owner_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Settings",
    }
  );
  return Settings;
};
