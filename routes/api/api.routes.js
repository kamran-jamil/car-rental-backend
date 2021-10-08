const express = require("express");
const authRoutes = require("./auth.routes");
const settingsRoutes = require("./settings.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/settings",
    route: settingsRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
