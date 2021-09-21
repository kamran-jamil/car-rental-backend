const express = require("express");
const adminAuthRoutes = require("./Admin/admin.auth.routes");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth/admin",
    route: adminAuthRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
