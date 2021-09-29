module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      owner_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "boarders" }, key: "id" },
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      car_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "car_types",
          },
          key: "id",
        },
        allowNull: false,
      },
      seats: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      model_year: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      car_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      brand_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      wheels: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lights: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      trunk_capacity: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rate: {
        type: Sequelize.FLOAT,
      },
      discount: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        allowNull: true,
      },
      discount_till: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("cars");
  },
};
