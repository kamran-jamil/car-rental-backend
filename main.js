const express = require("express");

const app = express();
// eslint-disable-next-line import/order
const path = require("path");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const logger = require("./middlewares/logger");

app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// User routes

require("./routes/api")(app);

app.use(errorHandlerMiddleware);

// static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {});
