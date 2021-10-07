const express = require("express");

const router = express.Router();
const carController = require("../../controllers/car.controller");
const { carValidation } = require("../../validations/index");
const validate = require("../../middlewares/validate");

// car routes
router.post("/create", validate(carValidation.create), carController.addCar);

module.exports = router;
