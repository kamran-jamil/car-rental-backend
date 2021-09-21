module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("clients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
      },
      cnic: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
      },
      profile_pic: {
        type: Sequelize.STRING,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
      },
      verified_at: {
        type: Sequelize.DATE,
      },
      referer_id: {
        type: Sequelize.INTEGER,
      },
      referred_at: {
        type: Sequelize.DATE,
      },
      account_status: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("clients");
  },
};