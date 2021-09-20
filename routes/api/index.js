const User = require("./user");

module.exports = (app) => {
  app.use("/user", User);
};
