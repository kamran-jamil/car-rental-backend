// eslint-disable-next-line import/no-extraneous-dependencies
const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
