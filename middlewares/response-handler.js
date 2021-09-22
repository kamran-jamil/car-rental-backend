const logger = require("./logger");

const successResponseHandler = (req, res, data, code = 200) =>
  res.send({
    code,
    data,
    success: true,
  });

const errorResponseHandler = (
  req,
  res,
  message = "Internal Server Error",
  code = 500,
  error = {}
) => {
  logger.error(message);
  res.status(500).json({
    code,
    message,
    error,
    success: false,
  });
};
module.exports = {
  successResponseHandler,
  errorResponseHandler,
};
