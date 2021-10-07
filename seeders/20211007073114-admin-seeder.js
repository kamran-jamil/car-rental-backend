const bcrypt = require("bcrypt");
require("../helpers/auth");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    let email = "admin@rental.net";
    let password = "123456";
    let auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    await queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "0",
          first_name: "Super",
          last_name: "Admin",
          email,
          password,
          account_status: "active",
          referrer_uuid: null,
          is_approved: true,
          referred_at: null,
          verified_at: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("users", null, { where: { uuid: "0" } });
  },
};
