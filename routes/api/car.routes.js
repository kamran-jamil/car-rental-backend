const express = require("express");

const router = express.Router();
const carController = require("../../controllers/car.controller");
const { carValidation } = require("../../validations/index");
const validate = require("../../middlewares/validate");

// car routes
router.post("/create", validate(carValidation.create), carController.createCar);
router.get("/list", carController.carList);
router.put("/update/:id", carController.updateCar);

// car types
router.post("/create-type", carController.createCarType);
router.get("/car-type-list", carController.carTypelist);

module.exports = router;
