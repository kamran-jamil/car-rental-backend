const express = require("express");
const adminAuthRoutes = require("./api/api.routes");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/api",
    route: adminAuthRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
