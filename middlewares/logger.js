const { createLogger, format, transports } = require("winston");

const { combine, timestamp, label, printf } = format;

const myFormat = printf(
  ({ level, message, text, timeStamp }) =>
    `${timeStamp} [${text}] ${level}: ${message}`
);

const filename = module.filename.split("/").slice(-1);
const options = {
  level: "error",
  format: combine(
    label({ label: filename }),
    timestamp(),
    myFormat,
    format.colorize(),
    format.json(),
    format.prettyPrint(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log", level: "error" }),
  ],
};
// const logger = createLogger(options);

const logger = createLogger(options);

module.exports = logger;
