const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {}
  Client.init(
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
      referer_id: DataTypes.INTEGER,
      referred_at: DataTypes.DATE,
      account_status: DataTypes.ENUM("active", "inactive", "pending"),
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
