module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert("users", [
      {
        uuid: "UUIF",
        first_name: "John",
        last_name: "Doe",
        email: "example@example.com",
        password: "1234",
        account_status: "active",
        referrer_uuid: "UUIF",
        is_approved: true,
        referred_at: null,
        verified_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete("users", null, {}),
};
