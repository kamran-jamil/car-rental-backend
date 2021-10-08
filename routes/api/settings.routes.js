const express = require("express");

const router = express.Router();
const settingsController = require("../../controllers/settings.controller");
const { settingsValidation } = require("../../validations/index");
const validate = require("../../middlewares/validate");

// Save Settings
router.put(
  "/",
  validate(settingsValidation.updateSettings),
  settingsController.updateSettings
);

// List Settings
router.get(
  "/",
  validate(settingsValidation.login),
  settingsController.getSettings
);

module.exports = router;
