const express = require("express");

const app = express();
const path = require("path");
const logger = require("./middlewares/logger");
const { port } = require("./config/app");

const routes = require("./routes/index.routes");

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

// Routes
app.use("/", routes);

// static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {});
