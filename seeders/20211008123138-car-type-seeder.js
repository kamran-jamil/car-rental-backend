module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("car_types", [
      {
        type_name: "Sports Car",
        min_rate: 9000.0,
        max_rate: 10000.0,
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete("car_types", null, {}),
};
