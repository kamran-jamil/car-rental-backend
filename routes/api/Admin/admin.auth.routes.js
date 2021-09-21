const express = require("express");
const router = express.Router();
const adminAuthController = require("../../../controllers/admin/auth.controller");
const { adminAuthValidation } = require("../../../validations/index");
const validate = require("../../../middlewares/validate");

// Signup
router.post(
  "/signup",
  validate(adminAuthValidation.register),
  adminAuthController.register
);

//Signin
router.post(
  "/signin",
  validate(adminAuthValidation.login),
  adminAuthController.login
);

module.exports = router;
