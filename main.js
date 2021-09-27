const express = require("express");
const morgan = require("morgan");
const path = require("path");
const logger = require("./middlewares/logger");
const routes = require("./routes");

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("combined", { stream: logger.stream.write }));
// routes
app.use("/", routes);

// static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {});
