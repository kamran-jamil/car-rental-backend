const {
  successResponseHandler,
  errorResponseHandler,
} = require("../helpers/responseHelper");

const { Car, CarType } = require("../models");

const carList = async (req, res, _next) => {
  try {
    console.log("car list");
    let cars = [];
    cars = await Car.findAll();
    return successResponseHandler(req, res, cars);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const addCar = async (req, res, _next) => {
  try {
    console.log("add car");
    let car = {};
    car = await Car.create(req.body);
    return successResponseHandler(req, res, car);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const updateCar = async (req, res, _next) => {
  try {
    let findCar = {};
    let car = [];
    const carId = req.params.id;
    findCar = await Car.findOne({ where: { id: carId } });

    if (!findCar) throw new Error("Car not found!");
    car = await Car.update(req.body, {
      where: { id: carId },
      returning: true,
    });
    const carObj = car[1][0];
    return successResponseHandler(req, res, carObj);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const deleteCar = async (req, res, _next) => {
  try {
    let findCar = {};
    findCar = await Car.findOne({ where: { id: req.params.id } });
    if (!findCar) throw new Error("Car not found!");
    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponseHandler(req, res, {
      message: "Car successfully deleted!",
    });
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 404);
  }
};

const carTypelist = async (req, res, _next) => {
  try {
    let types = [];
    types = await CarType.findAll({ order: [["uuid", "ASC"]] });
    return successResponseHandler(req, res, types);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

// cartype
const addCarType = async (req, res, _next) => {
  try {
    let type = {};
    type = await CarType.create(req.body);
    return successResponseHandler(req, res, type);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const updateCarType = async (req, res, _next) => {
  try {
    let findType = {};
    let type = [];
    const typeId = req.params.id;
    findType = await CarType.findOne({ where: { uuid: typeId } });

    if (!findType) throw new Error("Type not found!");

    type = await CarType.update(req.body, {
      where: { uuid: typeId },
      returning: true,
    });
    const typeObj = type[1][0];
    return successResponseHandler(req, res, typeObj);
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 400);
  }
};

const deleteCarType = async (req, res, _next) => {
  try {
    let findType = {};
    findType = await CarType.findOne({ where: { uuid: req.params.id } });
    if (!findType) throw new Error("Type not found!");
    await CarType.destroy({
      where: {
        id: req.params.id,
      },
    });
    return successResponseHandler(req, res, {
      message: "Car type successfully deleted!",
    });
  } catch (err) {
    return errorResponseHandler(req, res, err.message, 404);
  }
};

module.exports = {
  carList,
  addCar,
  updateCar,
  deleteCar,
  carTypelist,
  addCarType,
  updateCarType,
  deleteCarType,
};