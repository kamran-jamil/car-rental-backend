const express = require("express");
const adminAuthRoutes = require("./Admin/admin.auth.routes");
const carRoutes = require("./car.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth/admin",
    route: adminAuthRoutes,
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
