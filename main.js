const express = require("express");
const app = express();
const path = require("path");
const logger = require("./middlewares/logger");
const { port } = require("./config/app");

app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Members routes
app.use("/api/clients", require("./routes/api/clients"));

// static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {});
