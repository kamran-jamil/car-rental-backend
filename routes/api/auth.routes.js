const express = require("express");

const router = express.Router();
const authController = require("../../controllers/auth.controller");
const { authValidation } = require("../../validations/index");
const validate = require("../../middlewares/validate");

// Signup
router.post(
  "/signup",
  validate(authValidation.register),
  authController.register
);

// Signin
router.post("/signin", validate(authValidation.login), authController.login);

module.exports = router;
