module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert("Users", [
      {
        first_name: "Noman",
        last_name: "Liaqat",
        email: "noman@gmail.com",
        password: "1234",
        role: "admin",
        status: "active",
      },
      {
        first_name: "Kamran",
        last_name: "Liaqat",
        email: "kamran@gmail.com",
        password: "123456",
        role: "user",
        status: "active",
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
