const express = require("express");
const authRoutes = require("./auth.routes");
const carRoutes = require("./car.routes");
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
  {
    path: "/car",
    route: carRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
